---
name: ai-nav-ui
description: Maintain frontend UI style, color system, component conventions, and homepage structure for the AI tools directory site. Use when editing visual design, Astro/Vue components, Tailwind classes, layout density, cards, filters, rankings UI, tutorial lists, or homepage presentation.
---

# AI Nav UI

Use this skill for UI and frontend presentation work in `ai-tools-directory`.

## Responsibilities

- Keep the interface clear, practical, and directory-first.
- Maintain consistent colors, spacing, typography, card styles, filters, badges, and list layouts.
- Make homepage structure useful immediately rather than marketing-heavy.
- Preserve the existing Astro + Vue + Tailwind style unless there is a concrete reason to change it.

## UI Rules

- Use restrained, scannable layouts for tools, categories, rankings, and tutorials.
- Keep cards compact and information-dense: name, category, short value, tags, pricing or availability signals, and action.
- Use consistent category badges and status labels across tool cards, rankings, and detail pages.
- Avoid decorative UI that hides real tool information.
- Make mobile layouts stable: filters, cards, and ranking rows must not overflow.
- Do not add visible explanatory text about how the UI works unless it is necessary for the user workflow.

## Homepage Structure

- First viewport should communicate the product: AI tools directory and practical guides.
- Provide direct entry points to categories, popular tools, rankings, and tutorials.
- Keep sections ordered by user intent: search/discover, categories, featured or ranked tools, tutorials, submission/cooperation.

## Implementation Checklist

1. Inspect existing components in `src/components`, pages in `src/pages`, and global styles in `src/styles/global.css`.
2. Reuse existing Tailwind tokens and component patterns.
3. Check responsive behavior for homepage, tool list, ranking page, and tutorial index when affected.
4. Run the project build after frontend changes when feasible.
