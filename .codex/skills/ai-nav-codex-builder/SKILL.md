---
name: ai-nav-codex-builder
description: Engineering rules for Codex development tasks on the AI tools directory site. Use when implementing, debugging, refactoring, testing, or building features in the Astro/Vue/Tailwind project, especially before modifying files under ai-tools-directory.
---

# AI Nav Codex Builder

Use this skill for development work in `ai-tools-directory`.

## Project Shape

- Framework: Astro with Vue islands and Tailwind CSS.
- Main pages live under `src/pages`.
- Shared layouts live under `src/layouts`.
- Components live under `src/components`.
- Structured data lives under `src/data`.
- Markdown tutorial content lives under `src/content/tutorials`.

## Engineering Rules

- Inspect existing patterns before editing.
- Keep changes scoped to the requested behavior.
- Prefer existing data files and component structures over new abstractions.
- Do not edit generated `dist` output unless the user explicitly asks.
- Do not touch `node_modules`.
- Use `rg` for search and `npm run build` for verification when feasible.

## Astro/Vue Rules

- Use Astro pages and layouts for static content and SEO-heavy routes.
- Use Vue only where client interactivity is needed, such as filters or explorers.
- Keep props and data shapes explicit and small.
- Avoid duplicating tool/category/ranking data in component files when it belongs in `src/data`.

## Data Rules

- Keep tool, category, and ranking data structured and reusable.
- When adding fields, update all consumers that assume the old shape.
- Preserve slug stability unless the user explicitly wants URL changes.
- When adding a new AI tool, also add its official site to `data/tool-official-sites.ts`.
- After adding or changing tool slugs, run `npm run icons:fetch` so the local icon is downloaded into `public/brand-icons/` and `data/brand-icon-paths.ts` is refreshed.
- Tool cards should load local icon paths first. Do not hotlink external brand images in page rendering.
- If the official icon fetch fails, use a clearly self-made local placeholder SVG in `public/brand-icons/` and document that it is not an official mark.

## Verification

After meaningful code changes:

1. Run `npm run build` from `ai-tools-directory` when dependencies are installed.
2. If UI changed, start the dev server and inspect affected pages in a browser when practical.
3. Summarize changed files and verification result clearly.
