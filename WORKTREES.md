# Page Worktrees

Each page module has its own Git worktree under `E:\project\ai-nav-worktrees`.

| Module | Worktree | Branch | Routes | Main files |
|---|---|---|---|---|
| Home | `E:\project\ai-nav-worktrees\home` | `page-home` | `/` | `app/pages/index.vue` |
| Free tools | `E:\project\ai-nav-worktrees\free-tools` | `page-free-tools` | `/tools/free`, `/free-ai-tools` | `app/pages/tools/free.vue`, `app/pages/free-ai-tools.vue` |
| Category | `E:\project\ai-nav-worktrees\category` | `page-category` | `/category`, `/category/[slug]` | `app/pages/category/index.vue`, `app/pages/category/[slug].vue` |
| Tutorial | `E:\project\ai-nav-worktrees\tutorial` | `page-tutorial` | `/tutorial`, `/tutorial/[slug]` | `app/pages/tutorial/index.vue`, `app/pages/tutorial/[slug].vue` |
| Prompts | `E:\project\ai-nav-worktrees\prompts` | `page-prompts` | `/prompts`, `/prompts/[slug]` | `app/pages/prompts/index.vue`, `app/pages/prompts/[slug].vue` |
| Compare | `E:\project\ai-nav-worktrees\compare` | `page-compare` | `/compare`, `/compare/[slug]` | `app/pages/compare/index.vue`, `app/pages/compare/[slug].vue` |
| Rankings | `E:\project\ai-nav-worktrees\rankings` | `page-rankings` | `/rankings`, `/rankings/[slug]` | `app/pages/rankings/index.vue`, `app/pages/rankings/[slug].vue` |
| Submit | `E:\project\ai-nav-worktrees\submit` | `page-submit` | `/submit` | `app/pages/submit.vue` |

Run page-specific work from the matching worktree, then commit on that branch and merge back into `master` from the main worktree.
