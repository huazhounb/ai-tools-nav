---
title: 用 Cursor 做代码 Review
description: 使用 Cursor 检查 Vue 或 TypeScript 项目的潜在问题、重构点和测试缺口。
seoTitle: Cursor 代码 Review 教程：检查问题、重构和测试缺口
seoDescription: 教你用 Cursor 对前端项目做代码 Review，定位潜在 bug、可维护性问题和缺失测试。
category: AI 编程
tags:
  - Cursor
  - 代码 Review
  - TypeScript
status: published
publishedAt: 2026-05-10
updatedAt: 2026-05-10
---

# 用 Cursor 做代码 Review

Cursor 适合在真实代码仓库里做辅助 Review，但它不能替代工程判断。本教程适合已经能读懂项目结构的前端开发者。

## 操作步骤

1. 先选定一个明确范围，例如某个页面、组件或接口。
2. 要求 Cursor 按“bug 风险、可维护性、类型问题、测试缺口”输出。
3. 对每个建议要求给出文件位置和原因。
4. 只采纳能解释清楚的问题，不要机械接受所有改法。

## 可复制提示词

```text
请 review 当前选中的代码，优先找：
1. 可能导致运行错误的 bug
2. 类型不严谨或边界情况
3. 重复逻辑和可维护性问题
4. 缺失的测试场景

请按严重程度排序，并给出具体文件位置和修改建议。
```

## 常见错误

- 一次 review 整个仓库，结果会很泛。
- 只问“有没有问题”，AI 容易输出空泛建议。
- 不运行测试就合并 AI 修改，容易引入回归。
