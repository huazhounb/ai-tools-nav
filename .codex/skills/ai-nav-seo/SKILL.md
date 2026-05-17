---
name: ai-nav-seo
description: Maintain SEO page matrix, title and description patterns, structured data, and internal linking rules for the AI tools directory site. Use when adding or editing SEO pages, metadata, category pages, tool details, tutorials, rankings, schema.org JSON-LD, sitemap-related structure, canonical behavior, or internal links.
---

# AI Nav SEO

Use this skill for SEO architecture and metadata work in `ai-tools-directory`.

## Responsibilities

- Keep the SEO matrix coherent across homepage, tool index, tool details, categories, rankings, tutorials, submit, and cooperation pages.
- Maintain unique titles and descriptions with clear search intent.
- Add structured data only where it reflects real page content.
- Strengthen internal links without creating spammy or circular link blocks.

## Page Matrix

- Homepage: brand/category intent for discovering AI tools.
- Tool index: broad directory intent with category and filter entry points.
- Tool detail: tool-name intent, alternatives intent, and practical evaluation intent.
- Category pages: "best/free/use-case AI tools" intent for a coherent category.
- Rankings: comparison intent with clear criteria.
- Tutorials: task workflow intent, such as writing, slides, video, research, or student use cases.

## Metadata Rules

- Every indexable page needs a unique `title` and `description`.
- Titles should put the primary entity or query first.
- Descriptions should explain what the visitor can decide or accomplish on the page.
- Avoid vague adjectives, duplicated boilerplate, and keyword stuffing.

## Structured Data Rules

- Use JSON-LD only for content actually present on the page.
- Prefer `WebSite`, `CollectionPage`, `ItemList`, `Article`, `BreadcrumbList`, and product/tool-like schema only when the data is complete enough.
- Keep schema generation close to the relevant Astro page or layout pattern already used in the codebase.

## Internal Linking Rules

- Tool pages should link to their category, related rankings, relevant tutorials, and alternatives when available.
- Tutorials should link to tools used in the workflow and related tutorials.
- Rankings should link to tool pages and explain why listed tools belong there.
- Avoid large unrelated link dumps.

## Before Editing

1. Inspect `src/layouts`, `src/pages`, `src/data`, and `src/content`.
2. Identify the page type and search intent.
3. Preserve existing metadata APIs and layout props.
4. Verify build output for affected routes when feasible.
