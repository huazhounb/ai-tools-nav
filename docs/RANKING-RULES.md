# 榜单规则

## 榜单类型

本站榜单分为模型能力榜、工具场景榜和用户行为榜。

- `model-arena`：按能力维度排序，例如文本、代码、搜索、图像、视频、办公。
- `scenario`：按具体使用场景排序，例如写作、编程、绘图、PPT、论文研究。
- `free`：突出免费额度和性价比。
- `popular`：综合浏览、点击、点赞和近期内容热度。
- `user-liked`：以用户点赞为核心信号。
- `new`：展示最新收录且内容完整的工具。

## model-arena 说明

本站参考 arena.ai 按能力维度展示排名的结构，但不直接复制第三方排名。AI 工具箱的 model-arena 榜单面向中文工具导航场景，重点看中文可用性、实际任务表现、免费/付费门槛和页面内容完整度。

## 综合计算

默认权重：

- 编辑评分：45%
- 用户点赞：20%
- 浏览量：15%
- 官网点击：10%
- 更新时间：10%

不同榜单可以调整权重。例如免费工具榜会提高性价比权重，编程榜会提高代码能力权重，搜索榜会提高来源和研究能力权重。

## 用户点赞榜

用户点赞榜按 `tool_likes`、工具 `stats.likes` 和近期互动计算。同一登录用户对同一工具只能点赞一次。

## 免费工具榜

免费工具榜优先选择 `free_status='free'` 或免费额度实用的工具，并结合中文支持、上手难度和功能覆盖。

## 模型能力榜

模型能力榜使用工具 `scores` 中的能力字段：

- text：writing、chinese、easeOfUse
- code：coding、easeOfUse、costPerformance
- search：search、research、chinese
- image：image、easeOfUse
- video：video、easeOfUse
- office：office、writing、chinese
- research：research、search、writing
- webdev：coding、office、easeOfUse

所有榜单页面都必须说明排名规则，避免用户误以为榜单是绝对客观排名。
