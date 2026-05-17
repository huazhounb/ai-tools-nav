# 阿里云服务器单机部署教程

本文档用于把当前 Nuxt/Nitro 项目部署到一台阿里云服务器上，让用户可以通过公网访问网站。部署方式为单机部署：前端、后端、数据库都放在同一台服务器。

## 一、推荐服务器配置

- 系统：Ubuntu 22.04 LTS 或 Ubuntu 24.04 LTS
- 配置：2核2G 可以测试上线
- 更稳配置：2核4G
- 系统盘：40GB 起步
- 公网带宽：3Mbps 起步
- 服务器类型：阿里云 ECS 或轻量应用服务器都可以
- 如果服务器在中国内地，绑定域名通常需要备案
- 如果只是测试，可以先用公网 IP，或者使用香港/海外服务器

## 二、部署架构

```text
阿里云服务器
├─ Nginx：负责公网访问和 HTTPS
├─ Nuxt/Nitro：运行网站前后端
├─ PostgreSQL：保存数据
└─ PM2：保持项目后台运行
```

## 三、服务器需要开放端口

只需要在阿里云安全组开放：

- 22：SSH
- 80：HTTP
- 443：HTTPS

不要开放：

- 3000
- 5432

说明：

- 3000 只给 Nginx 在服务器本机代理访问。
- 5432 是 PostgreSQL 数据库端口，不对公网开放。

## 四、服务器初始化命令

使用 root 用户或有 sudo 权限的用户执行：

```bash
apt update && apt upgrade -y
apt install -y git curl wget vim unzip nginx postgresql postgresql-contrib build-essential
```

安装 Node.js 22：

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
apt install -y nodejs
```

安装 PM2：

```bash
npm install -g pm2
```

检查版本：

```bash
node -v
npm -v
pm2 -v
```

## 五、创建 PostgreSQL 数据库

进入 PostgreSQL：

```bash
sudo -u postgres psql
```

创建数据库用户和数据库：

```sql
create user ai_nav_user with password '请换成强密码';
create database ai_tools_nav owner ai_nav_user;
grant all privileges on database ai_tools_nav to ai_nav_user;
\q
```

`DATABASE_URL` 示例：

```text
postgresql://ai_nav_user:你的强密码@127.0.0.1:5432/ai_tools_nav?schema=public
```

## 六、上传或拉取项目

推荐部署目录：

```text
/var/www/ai-tools-nav
```

从 Git 仓库拉取项目：

```bash
mkdir -p /var/www
cd /var/www
git clone 你的仓库地址 ai-tools-nav
cd ai-tools-nav
```

如果暂时没有 Git 仓库，也可以把项目压缩后上传到 `/var/www/ai-tools-nav`。

## 七、配置环境变量

复制生产环境变量模板：

```bash
cp deployment/aliyun/.env.production.example .env
```

编辑 `.env`：

```bash
nano .env
```

请至少替换：

- 域名或公网 IP
- 数据库密码
- `SESSION_SECRET`
- 管理员邮箱
- 第三方登录配置，如果项目启用了这些功能

提醒：`.env` 不要提交 Git。

## 八、安装依赖和构建

```bash
npm install
npm run build
```

如果项目使用 Prisma：

```bash
npx prisma generate
npx prisma migrate deploy
npm run db:seed
```

如果项目没有使用 Prisma：

```text
按项目实际 SQL 初始化数据库。
```

## 九、PM2 启动

复制 PM2 示例配置：

```bash
cp deployment/aliyun/ecosystem.config.cjs.example ecosystem.config.cjs
```

启动项目：

```bash
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup
```

PM2 常用命令：

```bash
pm2 list
pm2 logs ai-tools-nav
pm2 restart ai-tools-nav
pm2 stop ai-tools-nav
pm2 delete ai-tools-nav
```

第一版建议使用 `fork` 模式，不使用 `cluster`，这样可以避免数据库连接数过多。

## 十、Nginx 配置

复制 Nginx 示例配置：

```bash
cp deployment/aliyun/nginx.conf.example /etc/nginx/sites-available/ai-tools-nav
nano /etc/nginx/sites-available/ai-tools-nav
```

把配置里的 `your-domain.com` 换成真实域名。没有域名时，可以先把 `server_name` 改成服务器公网 IP 测试。

启用站点：

```bash
ln -s /etc/nginx/sites-available/ai-tools-nav /etc/nginx/sites-enabled/ai-tools-nav
nginx -t
systemctl reload nginx
```

## 十一、HTTPS

如果有域名，建议使用 Certbot 自动申请 HTTPS 证书：

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d 你的域名.com
```

申请前需要先把域名解析到服务器公网 IP，并确认 80 端口可以访问。

## 十二、后续更新

每次更新前先备份数据库：

```bash
bash deployment/aliyun/backup-db.sh
```

简单更新流程：

```bash
git pull
npm install
npm run build
pm2 restart ai-tools-nav
```

也可以直接使用本目录提供的更新脚本：

```bash
bash deployment/aliyun/deploy.sh
```

## 十三、回滚

1. 代码回滚用 Git tag 或旧 commit。
2. 数据库回滚用备份 SQL。
3. 数据库恢复前必须先备份当前数据库。

示例：

```bash
git log --oneline
git checkout 旧commit
npm install
npm run build
pm2 restart ai-tools-nav
```

恢复数据库：

```bash
bash deployment/aliyun/backup-db.sh
bash deployment/aliyun/restore-db.sh backups/xxx.sql.gz
```

## 十四、数据库备份和恢复

备份数据库：

```bash
bash deployment/aliyun/backup-db.sh
```

备份文件会保存到：

```text
backups/
```

恢复数据库：

```bash
bash deployment/aliyun/restore-db.sh backups/xxx.sql.gz
```

提醒：`backups/` 不要提交 Git，建议加入 `.gitignore`。

## 十五、常见问题

公网访问不了：

- 检查阿里云安全组是否开放 80/443。
- 检查 Nginx 是否启动。
- 检查域名是否解析到服务器公网 IP。

出现 502：

- 检查 PM2 是否正常运行：`pm2 list`
- 检查项目日志：`pm2 logs ai-tools-nav`
- 检查 3000 端口是否只在本机监听：`ss -lntp | grep 3000`

数据库连接失败：

- 检查 `.env` 中的 `DATABASE_URL`。
- 检查 PostgreSQL 是否运行：`systemctl status postgresql`
- 检查数据库用户、密码、库名是否正确。

HTTPS 失败：

- 检查域名是否已经解析到服务器公网 IP。
- 检查 80 端口是否可以访问。
- 检查 Nginx 配置是否通过：`nginx -t`

页面没更新：

- 检查是否执行了 `npm run build`。
- 检查是否执行了 `pm2 restart ai-tools-nav`。
- 检查浏览器缓存。

