#!/usr/bin/env bash
set -e

# 简单更新脚本：备份数据库、拉取代码、安装依赖、迁移数据库、构建并重启 PM2。
# 不写真实密码，不删除旧文件。生产环境执行前请确认 .env 已配置。

echo "开始备份数据库..."
bash deployment/aliyun/backup-db.sh || echo "数据库备份失败，请手动检查"

echo "拉取最新代码..."
git pull

echo "安装依赖..."
npm install

if [ -f "prisma/schema.prisma" ]; then
  echo "执行 Prisma 生成和迁移..."
  npx prisma generate
  npx prisma migrate deploy
fi

echo "构建项目..."
npm run build

echo "重启 PM2..."
pm2 restart ai-tools-nav || pm2 start ecosystem.config.cjs

echo "部署完成"
