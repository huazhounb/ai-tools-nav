# Content Model

## 内容目录

当前内容系统基于 Nuxt Content，Markdown 文件放在 `content/` 下：

| 内容类型 | 目录 | 示例 URL | 用途 |
|---|---|---|---|
| 教程 | `content/tutorials/` | `/tutorial/deepseek-weekly-report` | 解决具体工作流 |
| 提示词 | `content/prompts/` | `/prompts/weekly-report-summary` | 提供可复制 Prompt |
| 榜单 | `content/rankings/` | `/rankings/free-ai-tools` | 透明规则推荐工具 |
| 场景页 | `content/scenarios/` | `/scenarios/ai-ppt` | 按任务组织工具和流程 |
| 对比页 | `content/comparisons/` | `/compare/kimi-vs-doubao` | 帮用户做选择 |

> 注意：当前动态页面主要使用 `data/` mock 数据渲染，`content/` 用于建立内容资产和后续迁移到 Nuxt Content 驱动页面。

## 通用 Frontmatter

每篇 Markdown 必须包含：

```yaml
---
title: 页面标题
description: 页面摘要
seoTitle: SEO 标题
seoDescription: SEO 描述
category: 内容分类
tags:
  - 标签一
  - 标签二
status: published
publishedAt: 2026-05-10
updatedAt: 2026-05-10
---
```

规则：
- `title` 用于页面 H1 或内容标题。
- `description` 用于页面摘要。
- `seoTitle` 必须唯一，优先放主搜索意图。
- `seoDescription` 说明用户能完成什么决策或任务。
- `updatedAt` 每次内容实质更新都必须修改。
- `tags` 至少 2 个，必须贴近场景、工具或人群。
- `status` 可用 `draft / review / published / archived`，未审核内容不能进入 sitemap。

## 教程怎么写

目录：`content/tutorials/[slug].md`

教程必须解决一个具体任务，不写泛泛 AI 评论。

正文结构：
1. 教程目标
2. 适合人群
3. 准备材料
4. 操作步骤
5. 可复制提示词
6. 常见错误
7. 相关工具
8. FAQ 或注意事项

新增教程时检查：
- 标题是否包含任务，例如“写周报”“总结论文”“做 PPT”。
- 是否有可执行步骤。
- 是否有完整 Prompt。
- 是否说明失败原因和修正方法。

## 提示词怎么写

目录：`content/prompts/[slug].md`

提示词不能只有一句 Prompt，必须解释变量和使用方法。

正文结构：
1. 使用场景
2. 完整 Prompt
3. 变量说明
4. 使用方法
5. 示例输入或失败示例
6. 适用工具
7. 相关教程

质量要求：
- Prompt 必须可直接复制。
- 变量必须用 `{{变量名}}` 标清。
- 必须说明不适合的输入方式。
- 不使用“爆款”“保证有效”等夸张承诺。

## 榜单怎么写

目录：`content/rankings/[slug].md`

榜单必须有排名依据，不能把广告伪装成自然推荐。

正文结构：
1. 榜单结论
2. 排名规则
3. 推荐工具列表
4. 每个工具的推荐理由
5. 每个工具的主要限制
6. 选择建议
7. 相关教程或对比

审核重点：
- 是否说明排名规则。
- 是否同时写优点和限制。
- 是否标注商业合作或赞助。
- 是否避免虚假评分、虚假用户量和虚假价格。

## 场景页怎么写

目录：`content/scenarios/[slug].md`

场景页按任务组织内容，目标是帮用户从“我要完成什么”进入工具、教程和提示词。

正文结构：
1. 场景目标
2. 推荐工具组合
3. 推荐流程
4. 可复制提示词
5. 常见限制
6. 相关工具、教程、提示词

适合优先建设的场景：
- AI 做 PPT
- 写论文和论文润色
- 短视频脚本
- AI 绘图
- 数据分析
- 自媒体文案
- 会议纪要

## 对比页怎么写

目录：`content/comparisons/[slug].md`

对比页必须结论先行，不能只堆参数。

正文结构：
1. 结论先行
2. 快速选择建议
3. 对比表格
4. 价格和免费额度
5. 中文支持
6. 适合人群
7. 使用场景
8. 优缺点
9. 推荐结论
10. FAQ

规则：
- slug 固定一种顺序，例如 `kimi-vs-doubao`。
- 不再创建反向重复页 `doubao-vs-kimi`。
- 反向搜索需求应 canonical 到主 URL。

## 新增内容流程

1. 确认内容类型和搜索意图。
2. 选择目录并创建英文小写 slug。
3. 填写完整 frontmatter。
4. 按对应模板写正文。
5. 添加至少 3 个相关内链建议。
6. 自查 SEO 标题、描述、H1、正文、更新时间。
7. 进入审核，状态为 `review`。
8. 审核通过后改为 `published`，再进入 sitemap。

## 审核规则

审核人需要检查：
- 是否贴近中文 AI 工具用户。
- 是否有可索引正文，而不是只有列表或卡片。
- 是否有明确任务、结论或选择建议。
- 是否包含完整 `seoTitle / seoDescription / updatedAt / tags`。
- 是否有事实风险，价格、额度、官网能力是否需要标注“以官方为准”。
- 是否存在广告、赞助、合作内容，若有必须标注。
- 是否重复已有内容，重复时合并，不拆薄页。

## 更新时间规则

| 内容类型 | 建议更新频率 | 必须更新的触发条件 |
|---|---:|---|
| 教程 | 90-180 天 | 工具界面变化、步骤失效、Prompt 失效 |
| 提示词 | 90 天 | 输出质量下降、适用工具变化 |
| 榜单 | 30-60 天 | 免费额度、排名依据、工具能力变化 |
| 场景页 | 60-90 天 | 推荐流程或工具组合变化 |
| 对比页 | 60 天 | 任一工具功能、价格或定位变化 |

每次实质更新必须修改 `updatedAt`，并检查是否需要同步内链、sitemap 和相关页面推荐。
