#!/usr/bin/env bash
set -e

# 从 gzip 压缩的 SQL 备份恢复数据库。恢复前会要求输入 YES 确认。

if [ -z "$1" ]; then
  echo "用法：bash deployment/aliyun/restore-db.sh backups/xxx.sql.gz"
  exit 1
fi

if [ -f ".env" ]; then
  export $(grep -v '^#' .env | xargs)
fi

if [ -z "$DATABASE_URL" ]; then
  echo "错误：DATABASE_URL 未配置"
  exit 1
fi

echo "警告：即将恢复数据库，可能覆盖现有数据。"
read -p "确认请输入 YES: " CONFIRM

if [ "$CONFIRM" != "YES" ]; then
  echo "已取消"
  exit 0
fi

gunzip -c "$1" | psql "$DATABASE_URL"

echo "数据库恢复完成"
