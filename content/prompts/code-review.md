---
title: 代码 Review 提示词
description: 让 AI 按 bug 风险、类型问题、可维护性和测试缺口检查代码。
seoTitle: 代码 Review 提示词：适合 Cursor 和 DeepSeek
seoDescription: 可复制的代码 Review Prompt，帮助开发者检查 bug、类型边界、重构点和测试缺口。
category: AI 编程
scenario: 代码审查
tags:
  - 代码 Review
  - Cursor
  - 编程
status: published
publishedAt: 2026-05-10
updatedAt: 2026-05-10
---

# 代码 Review 提示词

## 完整 Prompt

```text
请 review 以下代码，优先找：
1. 可能导致运行错误的 bug。
2. 类型不严谨或边界情况。
3. 重复逻辑和可维护性问题。
4. 缺失的测试场景。

请按严重程度排序，并给出具体原因和修改建议。

代码：
{{代码片段}}
```

## 使用方法

不要一次粘贴整个仓库。优先选择一个组件、一个接口或一段业务逻辑，让 AI 聚焦检查。

## 失败示例

“这段代码有没有问题？”范围太宽，输出通常会很泛。
