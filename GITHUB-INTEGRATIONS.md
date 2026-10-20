# Free open-source integrations

This package integrates these projects through pinned npm packages or a local API. It does not copy unrelated agent repositories or require paid hosting.

| Project | Integration | Version / runtime |
|---|---|---|
| [Cheerio](https://github.com/cheeriojs/cheerio) | Parse actual SEO metadata; prepare a canonical-link correction in a downloadable home page preview | 1.2.0, MIT |
| [Marked](https://github.com/markedjs/marked) | Convert local AI Markdown plans to HTML previews | 18.1.1, MIT |
| [sanitize-html](https://github.com/apostrophecms/sanitize-html) | Remove scripts, unsafe URL schemes and event handlers from previews | 2.18.1, MIT; original repo points to successor monorepo |
| [Ollama](https://github.com/ollama/ollama) | Generate role-specific proposals using the already installed `qwen2.5:3b` model, through `127.0.0.1:11434` only | Existing local installation; no cloud or paid fallback |
| [FFmpeg](https://github.com/FFmpeg/FFmpeg) | Render an original vertical 15-second text-graphics shopping-tips clip and caption for Instagram/YouTube | Existing local installation; no binary redistributed |

Dependencies are pinned in package-lock.json. Their complete licenses are included in installed package directories. The Ollama software license and model licenses are separate; this tool uses the user's existing local model installation. A dependency audit at implementation time reported zero known vulnerabilities. This is not a permanent security guarantee.

The original twelve bot roles remain. Each executes its listed maintenance/preparation task, then requests a local AI proposal grounded in that task's recorded evidence. Plans are marked as proposals; the model cannot call a shell, use credentials, alter source, publish, transfer money or send messages. Generated plans can still be incorrect and require review.

| Role | Working local tools | Missing connection for the broader role |
|---|---|---|
| CEO | Recorded operations summary and local AI priorities | Budget authority / production workflow |
| Manager | Task plan and local AI assignment recommendations | Production task execution |
| Team Lead | Link inventory and proposed release checks | Repository release pipeline |
| Developer | Public page health and fix recommendations | Repository edits / deployment |
| Designer | SVG promotion card and design recommendations | Asset publishing |
| Marketing | Live SEO audit, canonical correction preview, sitemap, robots file, promotion and organic marketing plan | Production publishing / owned social channels |
| Content | HTML shopping guide and local AI content proposal | Content publishing |
| Community | Welcome draft and moderation recommendations | Discord / Telegram / other channel |
| Support | FAQ draft and response recommendations | Live customer inbox |
| Analytics | Measured public page response time and interpretation | Traffic / conversion data |
| Security | Public header checks and remediation recommendations | Backups / threat monitoring |
| Finance | Tool budget report and bookkeeping input recommendations | Ledger / payment data |

These integrations do not make all company responsibilities autonomous. Connection gaps appear on each dashboard card. A successful local run means its stated task completed, not that an ad, reply, payment or deployment occurred.

## Run

Use Node.js 22 or newer. Run `npm ci --ignore-scripts`, ensure the already installed Ollama application is running, then `npm start`. Open http://127.0.0.1:8899. No model is downloaded automatically. Requests are queued to avoid concurrent model loading. Model failure appears separately from the underlying maintenance result. Local inference uses this computer's CPU/RAM and electricity.

Run `npm test` for dashboard, parser, sanitization, role-contract and failure-handling tests. Mocked model tests verify every role prompt, not real AI quality. Live model verification is reported separately.
