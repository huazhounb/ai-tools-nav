import type { Submission, SubmissionInput, SubmissionStatus, SubmissionUpdateInput } from '../../types/submission'

const now = new Date().toISOString()

const submissions: Submission[] = [
  {
    id: 'sub_001',
    type: 'tool',
    name: '讯飞智文',
    website: 'https://zhiwen.xfyun.cn/',
    category: 'AI 办公',
    description: '面向办公写作和文档生成的 AI 工具，适合写方案、报告和演示稿初稿。',
    freeStatus: '有免费额度',
    chineseSupport: '优秀',
    reason: '中文办公场景贴合度高，适合补充 AI PPT 和报告写作分类。',
    submitterName: '内容编辑',
    contact: 'editor@example.com',
    status: 'pending',
    reviewNote: '',
    createdAt: now,
    updatedAt: now
  },
  {
    id: 'sub_002',
    type: 'prompt',
    name: '短视频分镜脚本提示词',
    website: 'https://example.com/video-prompt',
    category: '提示词 / 短视频',
    description: '把选题拆成镜头、口播、画面和字幕的提示词模板。',
    freeStatus: '免费模板',
    chineseSupport: '优秀',
    reason: '适合自媒体和短视频脚本场景，可以关联豆包和即梦 AI。',
    submitterName: '运营同学',
    contact: 'creator@example.com',
    status: 'approved',
    reviewNote: '可进入提示词库，发布前补一个失败示例。',
    createdAt: now,
    updatedAt: now
  }
]

export function listSubmissions(status?: SubmissionStatus) {
  const list = status ? submissions.filter((item) => item.status === status) : submissions
  return [...list].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
}

export function getSubmission(id: string) {
  return submissions.find((item) => item.id === id)
}

export function createSubmission(input: SubmissionInput) {
  const createdAt = new Date().toISOString()
  const submission: Submission = {
    ...input,
    id: `sub_${Date.now().toString(36)}`,
    status: 'pending',
    reviewNote: '',
    createdAt,
    updatedAt: createdAt
  }

  submissions.unshift(submission)
  return submission
}

export function updateSubmission(id: string, input: SubmissionUpdateInput) {
  const submission = getSubmission(id)
  if (!submission) return null

  if (input.status) submission.status = input.status
  if (typeof input.reviewNote === 'string') submission.reviewNote = input.reviewNote
  submission.updatedAt = new Date().toISOString()

  return submission
}

export function isSubmissionStatus(value: unknown): value is SubmissionStatus {
  return value === 'pending' || value === 'approved' || value === 'rejected'
}
