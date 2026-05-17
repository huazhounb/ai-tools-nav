# 数据库接入计划

## 当前状态

项目第一版已具备两层数据来源：

1. 本地 mock 数据：继续作为页面兜底，不删除。
2. Supabase PostgreSQL：用于线上内容、登录用户互动、投稿审核和赞助位。

本轮新增了完整 Supabase 内容模型和服务端读取 API，但没有重构页面 UI。

## 数据表规划

### 内容生产

- `categories`：工具分类。
- `tools`：AI 工具主表。
- `tool_categories`：工具和分类的多对多关系。
- `tutorials`：教程内容。
- `prompts`：提示词模板。
- `comparisons`：工具对比页面。
- `rankings`：榜单定义。
- `ranking_items`：榜单工具条目。

### 用户互动

- `tool_likes`：用户点赞。
- `tool_views`：工具浏览记录。
- `tool_clicks`：官网点击记录。

### 投稿审核

- `submissions`：用户提交工具、教程、提示词、工具对比。
- 后续管理员审核通过后，可以将投稿转换为正式 `tools`、`tutorials`、`prompts`、`comparisons` 记录。

### 商业化

- `sponsor_slots`：合作、赞助、推荐位。

## 接入顺序

1. 执行 `supabase/schema.sql`。
2. 执行 `supabase/seed.sql`。
3. 验证 `/api/categories`、`/api/tools`、`/api/tutorials`、`/api/prompts`、`/api/comparisons`、`/api/rankings`。
4. 逐页接入数据库读取：
   - 分类页
   - 工具详情页
   - 教程页
   - 提示词页
   - 对比页
   - 榜单页
5. 每个页面保留 mock fallback，避免数据库未配置时白屏。

## 排行榜计算

榜单详情使用 `ranking_items` 和 `tools.stats` 计算分数：

```text
score =
editor_score * editorWeight
+ likes * likesWeight
+ views * viewsWeight
+ clicks * clicksWeight
+ freshnessScore * freshnessWeight
```

默认权重来自 `rankings.weights`。

## 投稿发布路线

第一版：

- 用户提交进入 `submissions`。
- 管理员审核改变 `status`。
- 审核通过后暂不自动发布。

后续：

- 新增一键发布流程。
- `tool` 投稿写入 `tools` + `tool_categories`。
- `tutorial` 投稿写入 `tutorials`。
- `prompt` 投稿写入 `prompts`。
- `comparison` 投稿写入 `comparisons`。

## 生产注意事项

- `SUPABASE_SERVICE_ROLE_KEY` 只在服务端使用。
- 管理员 API 必须调用 `requireAdmin(event)`。
- 前台公开内容只读取 `status='published'`。
- 用户行为数据可以先记录明细，再定时汇总到 `tools.stats`。
- Supabase 免费版适合第一版验证，后续流量增长后再考虑缓存和分页优化。
