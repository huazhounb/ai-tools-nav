# 开发流程

## Git worktree 使用方式

项目已按页面模块创建 worktree，位置见 `WORKTREES.md`。

常用查看命令：

```bash
git worktree list
git status --short
```

进入某个模块：

```powershell
cd E:\project\ai-nav-worktrees\category
npm install
npm run dev
```

## 每个页面一个分支

建议页面模块与分支一一对应：

- 首页：`page-home`
- 免费工具：`page-free-tools`
- 工具分类：`page-category`
- 教程：`page-tutorial`
- 提示词：`page-prompts`
- 工具对比：`page-compare`
- 榜单：`page-rankings`
- 投稿：`page-submit`
- 后台审核：建议新增 `page-admin-submissions`
- 工具详情：建议新增 `page-tool-detail`

## 每个 Codex 窗口只改一个模块

- 一个窗口只打开一个 worktree。
- 不要多个窗口同时修改 `ToolCard`、`BrandIcon`、`data/comprehensive.ts` 这类共享文件。
- 如果必须修改共享文件，先在主窗口记录修改范围，再通知其他模块合并。

## 分支命名规范

- 页面分支：`page-{module}`
- 修复分支：`fix-{scope}-{short-name}`
- 文档分支：`docs-{topic}`
- 数据分支：`data-{topic}`

如需符合 Codex 应用默认规则，也可使用 `codex/` 前缀，例如 `codex/page-category`。

## 提交规范

建议格式：

```text
type(scope): summary
```

示例：

- `feat(category): improve ai writing category page`
- `fix(home): repair search input interaction`
- `docs(project): add route and data model docs`
- `data(tools): add missing writing tool category slugs`

## 合并顺序

1. 先合并数据结构和共享组件。
2. 再合并依赖该结构的页面模块。
3. 最后合并 README、docs 和 TODO。
4. 合并后统一运行检查。

## 冲突处理建议

- `data/comprehensive.ts` 冲突优先人工处理，不要简单覆盖。
- `ToolCard`、`PromptCard`、`TutorialCard` 冲突要确认所有页面兼容。
- 导航冲突以 `data/navigation.ts` 和 `SiteHeader` 实际入口为准。
- 文档冲突可保留最新结构，但要避免重复段落。
