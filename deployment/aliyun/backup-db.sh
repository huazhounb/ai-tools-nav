#!/usr/bin/env bash
set -e

# 从项目根目录的 .env 读取 DATABASE_URL，并把 PostgreSQL 数据库备份到 backups/。
# backups/ 不要提交 Git，建议加入 .gitignore。

BACKUP_DIR="./backups"
mkdir -p "$BACKUP_DIR"

if [ -f ".env" ]; then
  export $(grep -v '^#' .env | xargs)
fi

if [ -z "$DATABASE_URL" ]; then
  echo "错误：DATABASE_URL 未配置"
  exit 1
fi

TIME=$(date +"%Y%m%d_%H%M%S")
FILE="$BACKUP_DIR/ai_tools_nav_$TIME.sql.gz"

echo "正在备份数据库到 $FILE"
pg_dump "$DATABASE_URL" | gzip > "$FILE"

echo "备份完成：$FILE"
