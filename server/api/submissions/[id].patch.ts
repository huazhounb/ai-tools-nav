export default defineEventHandler(() => {
  throw createError({
    statusCode: 405,
    statusMessage: '普通投稿接口不允许修改审核状态，请使用管理员审核接口。'
  })
})
