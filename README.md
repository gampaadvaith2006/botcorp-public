# BotCorp for ExampleSite — free local maintenance

Start with Node.js 22 or newer: open a terminal in this folder, run `npm ci --ignore-scripts`, then `npm start`. Open http://127.0.0.1:8899. Keep the installed Ollama app running for local AI proposals using `qwen2.5:3b`. No AI key, advertising budget or paid API is used. Internet access and your computer's ordinary running costs still apply. The server binds only to your own computer. See GITHUB-INTEGRATIONS.md for the exact repositories, capabilities and remaining connection requirements.

All twelve original bot identities are retained. Each switch now executes the task explicitly described on its card. Enabled jobs repeat every six hours while the process runs. Restarting restores enabled switches; the next scheduled run is six hours after startup. Turning off prevents future runs; an already running task can finish. Failures appear as errors instead of invented activity. Completed files are downloadable from each card and stored under `data/`. Local history is capped at 120 entries; downloaded artifacts remain on disk and may be removed manually when no longer needed.

Mia fetches ExampleSite's real home page, checks title, description, canonical link and H1, and creates an SEO report, sitemap, robots file and a factual promotion draft. These files do not change the live website. Sitemap and robots files need review and deployment through the existing ExampleSite release process. Merge with any existing sitemap/robots rules rather than overwriting them. An SEO audit or draft does not guarantee search indexing or traffic.

Other tasks are deliberately bounded: health checks, link inventories, a promotion SVG, a shopping-guide draft, FAQ draft, community-message draft, response timing, security-header inspection, a local-tool budget report, task planning and operations summaries. Each role also requests an AI proposal through local Ollama. Model proposals do not execute actions. No live customer support, external marketing campaign, autonomous coding/deployment, invoicing, payment processing, security blocking or backups are implemented. No account credentials are requested or stored.

The BotCorp dashboard has not been attached to ExampleSite's production admin UI. This package is a working local first step; it is not a claim that the full company is automated. A production integration must use ExampleSite's verified-admin authorization, persistent job storage and its deployment process. Do not host this local server publicly.

Run verification: `npm test`.
