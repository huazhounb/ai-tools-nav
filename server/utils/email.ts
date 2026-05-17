type EmailInput = {
  to?: string | null
  subject: string
  text: string
  html?: string
}

function isEmailEnabled() {
  return Boolean(process.env.RESEND_API_KEY && process.env.EMAIL_FROM)
}

export async function sendEmail(input: EmailInput) {
  const to = input.to?.trim()
  if (!to) return { sent: false, skipped: true, reason: 'missing-recipient' }
  if (!isEmailEnabled()) return { sent: false, skipped: true, reason: 'email-not-configured' }

  try {
    const response = await $fetch<{ id?: string }>('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: {
        from: process.env.EMAIL_FROM,
        to,
        subject: input.subject,
        text: input.text,
        html: input.html
      }
    })
    return { sent: true, skipped: false, id: response.id || null }
  } catch (error) {
    console.warn('[email] failed to send email', error)
    return { sent: false, skipped: false, reason: 'send-failed' }
  }
}

export async function notifySubmissionReceived(input: {
  title: string
  type: string
  submitterEmail?: string | null
}) {
  const adminEmail = process.env.ADMIN_NOTIFY_EMAIL || process.env.CONTACT_EMAIL
  if (!adminEmail) return { sent: false, skipped: true, reason: 'missing-admin-email' }

  return await sendEmail({
    to: adminEmail,
    subject: `新的投稿待审核：${input.title}`,
    text: [
      'AI工具箱收到一条新的用户投稿。',
      '',
      `标题：${input.title}`,
      `类型：${input.type}`,
      `投稿人：${input.submitterEmail || '未提供'}`,
      '',
      '请登录管理员后台查看并审核。'
    ].join('\n')
  })
}

export async function notifySubmissionReviewResult(input: {
  to?: string | null
  title: string
  status: 'approved' | 'rejected' | 'needs_edit'
  reviewNote?: string | null
}) {
  const statusText = {
    approved: '已通过',
    rejected: '已拒绝',
    needs_edit: '需要修改'
  }[input.status]

  return await sendEmail({
    to: input.to,
    subject: `你的投稿审核结果：${statusText}`,
    text: [
      `你的投稿「${input.title}」审核状态已更新为：${statusText}。`,
      input.reviewNote ? `审核备注：${input.reviewNote}` : '',
      '',
      '你可以登录 AI工具箱，在“我的投稿”页面查看最新状态。'
    ].filter(Boolean).join('\n')
  })
}
