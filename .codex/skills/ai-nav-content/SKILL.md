---
name: ai-nav-content
description: Maintain content templates for tutorials, prompts, rankings, and AI tool detail pages in the AI tools directory site. Use when drafting or editing Markdown tutorials, prompt collections, ranking copy, tool descriptions, comparison sections, category blurbs, or repeatable content templates.
---

# AI Nav Content

Use this skill for content structure and editorial consistency in `ai-tools-directory`.

## Responsibilities

- Keep tutorials practical, workflow-driven, and easy to act on.
- Keep tool detail content comparable across tools.
- Keep rankings transparent and useful rather than promotional.
- Keep prompt content specific, testable, and tied to real scenarios.

## Tool Detail Template

Include the most useful fields when data is available:

- Tool name and one-sentence value proposition.
- Primary use cases.
- Best-fit users.
- Key features.
- Pricing or free-plan note.
- Strengths and limitations.
- Alternatives or related tools.
- Practical getting-started suggestion.

## Tutorial Template

Tutorials should include:

- Clear task promise in the opening.
- Who the guide is for.
- Required tools or prerequisites.
- Step-by-step workflow.
- Example prompts or inputs when useful.
- Common mistakes and fixes.
- Related tools and next guides.

## Ranking Template

Rankings should include:

- Ranking criteria.
- Short summary of each listed tool.
- Best-for label for each item.
- Tradeoffs, not only benefits.
- Links to relevant tool pages or tutorials.

## Editorial Rules

- Prefer concrete workflows over abstract AI commentary.
- Avoid exaggerated claims and generic filler.
- Keep Chinese copy natural and concise.
- When claims may change, mark data source or date and verify current facts before publishing.

## New AI Tool Checklist

When adding a new AI tool, update content and brand assets together:

- Add a stable `slug`, official URL, category, pricing/free note, Chinese support, audience, platform, tags, updated date, SEO title, and SEO description.
- Add the official site to `data/tool-official-sites.ts`.
- Run `npm run icons:fetch` so the favicon/apple-touch-icon/manifest icon is downloaded into `public/brand-icons/` and `data/brand-icon-paths.ts` is refreshed.
- Render only local icon files in pages. Do not hotlink external brand images.
- If official icon fetching fails, create a self-made local placeholder SVG and do not call it official.
- Check homepage, free tools, category pages, rankings, and identity-based entries after adding the tool.
