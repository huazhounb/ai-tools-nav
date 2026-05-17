# Brand Icon Management

The project now uses the official icon URLs supplied by the project owner for the core AI tools listed below. The previous remote SVG wrapper files are not used by runtime data because wrappers can break when they embed remote .ico assets.

## Current Rules

1. Use the official favicon, app icon, manifest icon, or parent-brand icon URL from the supplied icon source folder.
2. Do not use remote SVG wrapper files that embed external images.
3. Do not use generated placeholder logos, screenshot crops, or non-official third-party logos for these tools.
4. These icons identify their corresponding products only; they do not imply partnership or endorsement.
5. If full local hosting is required later, download these official URLs into real local PNG/SVG files and update the same mapping files.

## Official URL Mapping

| Tool | slug | Icon URL |
| --- | --- | --- |
| ChatGPT | `chatgpt` | https://chatgpt.com/favicon.ico |
| Gemini | `gemini` | https://gemini.google.com/favicon.ico |
| Grok | `grok` | https://grok.com/favicon.ico |
| Poe | `poe` | https://poe.com/favicon.ico |
| Monica | `monica` | https://monica.im/favicon.ico |
| Pi | `pi` | https://pi.ai/favicon.ico |
| GitHub Copilot | `github-copilot` | https://github.githubassets.com/favicons/favicon.svg |
| Perplexity | `perplexity` | https://www.perplexity.ai/favicon.ico |
| Felo | `felo` | https://felo.ai/favicon.ico |
| You.com | `you-com` | https://you.com/favicon.ico |
| Phind | `phind` | https://www.phind.com/favicon.ico |
| Consensus | `consensus` | https://consensus.app/favicon.ico |
| Midjourney | `midjourney` | https://www.midjourney.com/favicon.ico |
| Leonardo AI | `leonardo-ai` | https://leonardo.ai/favicon.ico |
| Ideogram | `ideogram` | https://ideogram.ai/favicon.ico |
| Magnific AI | `magnific-ai` | https://magnific.ai/favicon.ico |
| Pika | `pika` | https://pika.art/favicon.ico |
| Synthesia | `synthesia` | https://www.synthesia.io/favicon.ico |
| Veo | `veo` | https://deepmind.google/favicon.ico |
| Sora | `sora` | https://sora.com/favicon.ico |
| Gamma | `gamma` | https://gamma.app/favicon.ico |
| Tome | `tome` | https://tome.app/favicon.ico |
| Elicit | `elicit` | https://elicit.com/favicon.ico |
| Scite | `scite` | https://scite.ai/favicon.ico |
| ResearchRabbit | `research-rabbit` | https://www.researchrabbit.ai/favicon.ico |
| ChatPDF | `chatpdf` | https://www.chatpdf.com/favicon.ico |
| Suno | `suno` | https://suno.com/favicon.ico |
| ElevenLabs | `elevenlabs` | https://elevenlabs.io/favicon.ico |
| Whisper | `whisper` | https://openai.com/favicon.ico |
| PromptPerfect | `promptperfect` | https://promptperfect.jina.ai/favicon.ico |
| FlowGPT | `flowgpt` | https://flowgpt.com/favicon.ico |
| Make | `make-ai` | https://www.make.com/favicon.ico |
| LangChain | `langchain` | https://www.langchain.com/favicon.ico |
| AutoGen | `autogen` | https://microsoft.github.io/autogen/stable/_static/favicon.ico |
| Grammarly | `grammarly` | https://www.grammarly.com/favicon.ico |
| Jasper | `jasper` | https://www.jasper.ai/favicon.ico |
| PhotoRoom | `photoroom` | https://www.photoroom.com/favicon.ico |
| OpusClip | `opusclip` | https://www.opus.pro/favicon.ico |
| Descript | `descript` | https://www.descript.com/favicon.ico |
| TableauGPT | `tableau-gpt` | https://www.tableau.com/favicon.ico |

## Files Updated

- data/mock-tools.ts
- data/brand-icon-paths.ts
- data/brand-icons-manifest.ts
- app/utils/tool-icons.ts
- supabase/seed.sql

## Maintenance

When adding a new AI tool, first confirm an official icon source from the product site. Update tool data and brand icon mapping together so every page resolves the same icon for the same slug.
