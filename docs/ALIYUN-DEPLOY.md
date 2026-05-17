# 阿里云部署说明

1. 当前项目推荐部署方式：

   阿里云服务器单机部署。

2. 主要教程位置：

   `deployment/aliyun/README.md`

3. 上线前必须准备：

   - 阿里云服务器公网 IP
   - 域名，可选但推荐
   - PostgreSQL 数据库密码
   - SESSION_SECRET
   - `.env` 文件
   - Git 仓库地址
   - 管理员邮箱

4. 最小上线步骤：

   - 创建服务器
   - 配置安全组 22/80/443
   - 安装 Node/PostgreSQL/Nginx/PM2
   - 创建数据库
   - 拉取项目
   - 配置 `.env`
   - `npm install`
   - `npm run build`
   - `pm2 start`
   - 配置 Nginx
   - 域名解析
   - HTTPS

5. 更新流程：

   ```bash
   bash deployment/aliyun/deploy.sh
   ```

6. 数据库备份：

   ```bash
   bash deployment/aliyun/backup-db.sh
   ```

7. 数据库恢复：

   ```bash
   bash deployment/aliyun/restore-db.sh backups/xxx.sql.gz
   ```

8. 重要提醒：

   - `.env` 不要提交 Git
   - `backups` 不要提交 Git
   - PostgreSQL 5432 不要开放公网
   - Nuxt 3000 不要开放公网
   - 只开放 80 和 443 给用户访问
