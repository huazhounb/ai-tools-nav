# AI 工具箱

中文 AI 工具导航、教程、提示词、工具对比和榜单内容产品。项目目标不是做“大而全工具黄页”，而是帮助中文用户按真实任务选择 AI 工具、看懂使用边界，并通过教程和可复制提示词完成工作。

## 项目定位

- 核心定位：AI 工具选择 + 上手教程 + 场景方案 + 可复制提示词。
- 优先页面：工具详情页、分类页、免费工具页、教程页、提示词页、对比页、榜单页。
- MVP 原则：先做可索引内容页面和基础投稿审核，不先做复杂账号体系、评论、收藏夹和厂商投放后台。

## 技术栈

- Nuxt 4，`srcDir` 为 `app/`
- Vue 3 + TypeScript
- Tailwind CSS
- Nuxt Content
- Nitro server routes
- 本地 mock data，后续预留关系型数据库
- 品牌图标本地化存放在 `public/brand-icons/`

## 本地启动

```bash
npm install
npm run dev
```

默认访问地址：

```text
http://localhost:3000
```

## 常用命令

```bash
npm run dev
npm run build
npm run preview
npm run generate
npm run icons:fetch
```

说明：

- `icons:fetch` 会根据 `data/tool-official-sites.ts` 抓取官网声明的 favicon、apple-touch-icon 或 manifest 图标到 `public/brand-icons/`。
- 当前任务若只写文档，不应运行 build、安装依赖或修改业务代码。

## 目录结构

```text
app/
  pages/              Nuxt 页面路由
  components/         公共组件、卡片组件、搜索组件、布局组件
  layouts/            默认布局
  utils/              SEO、JSON-LD、结构化数据工具
  assets/css/         全局样式
content/              Nuxt Content Markdown 示例内容
data/                 mock 数据、导航、广告位、品牌图标清单
docs/                 产品、技术、SEO、内容、部署和流程文档
public/               favicon、品牌图标等静态资源
server/               Nitro API、robots、sitemap、投稿审核逻辑
types/                TypeScript 类型
.codex/skills/        项目专用 Codex skills
WORKTREES.md          页面 worktree 分工说明
```

## 页面入口

- `/` 首页
- `/tools/free` 免费工具页
- `/category` 分类总页
- `/category/[slug]` 分类详情页
- `/tool/[slug]` 工具详情页
- `/tutorial` 教程列表页
- `/tutorial/[slug]` 教程详情页
- `/prompts` 提示词列表页
- `/prompts/[slug]` 提示词详情页
- `/compare` 工具对比列表页
- `/compare/[slug]` 工具对比详情页
- `/rankings` 榜单列表页
- `/rankings/[slug]` 榜单详情页
- `/submit` 投稿页
- `/admin/submissions` 简单投稿审核后台
- `/search` 搜索页
- `/scenarios/[slug]` 场景页
- `/robots.txt` 搜索引擎规则
- `/sitemap.xml` 站点地图

## 开发流程

1. 先确认任务属于哪个页面模块。
2. 在对应 worktree 或分支中修改，避免多个 Codex 窗口同时改同一文件。
3. 数据新增优先从 `data/comprehensive.ts` 或对应 `data/mock-*.ts` 出口确认现有结构。
4. 页面改动必须同步检查 SEO、内链、空状态、移动端和 JSON-LD。
5. 新增 AI 工具时同步维护工具数据、分类关系、图标来源和必要内容入口。
6. 提交前运行必要检查；若只改文档，可不跑 build。

## 分支 / Worktree 使用方式

当前已建立页面模块 worktree，见 `WORKTREES.md`：

- 首页：`E:\project\ai-nav-worktrees\home`，分支 `page-home`
- 免费工具：`E:\project\ai-nav-worktrees\free-tools`，分支 `page-free-tools`
- 工具分类：`E:\project\ai-nav-worktrees\category`，分支 `page-category`
- 教程：`E:\project\ai-nav-worktrees\tutorial`，分支 `page-tutorial`
- 提示词：`E:\project\ai-nav-worktrees\prompts`，分支 `page-prompts`
- 工具对比：`E:\project\ai-nav-worktrees\compare`，分支 `page-compare`
- 榜单：`E:\project\ai-nav-worktrees\rankings`，分支 `page-rankings`
- 投稿：`E:\project\ai-nav-worktrees\submit`，分支 `page-submit`

建议一个 Codex 窗口只打开一个 worktree，只处理一个页面模块。

## 注意事项

- 当前根目录未发现 `AGENTS.md`，相关代理约定待确认。
- 当前项目存在中文乱码风险，已在 `docs/TODO.md` 中列为高优先级问题。
- `pages/`、`components/`、`layouts/`、`utils/` 根目录不存在，真实源码位于 `app/`。
- 投稿审核目前使用内存数组，不是持久化数据库。
- `.env.example` 当前存在乱码，应在后续允许修改配置文件时修复。
- 不要热链品牌图标；页面应优先使用 `public/brand-icons/` 本地图标。
