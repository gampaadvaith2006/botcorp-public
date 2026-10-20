# BotCorp departments and 384 workers

Each of the 12 existing department heads has exactly 32 workers: 3 managers, 4 team leaders, 10 quality analysts and 15 members. Total worker roles: 384; the original department heads are additional. These are separate persisted role sessions on the same existing local Ollama model, not 384 independent models or human employees.

Use **Team monitor · 32 workers** under a bot, or open its View work page. The team panel shows every worker, reporting relationship, status, stage output, live event history, candidate ranking and selected proposal. Its lower section summarizes all twelve departments. Each worker row expands to show its actual output.

Use **Start full team** for one department, or **Start all 384 workers** on the dashboard. A department performs 65 model-backed job steps:

1. Three managers independently prepare objective/acceptance briefs.
2. Four team leaders prepare plans, reporting to the managers.
3. Fifteen members develop proposals under distinct review perspectives.
4. Each member critiques two other proposals in a circular peer debate. Every proposal receives two critiques.
5. Each member revises its proposal using the received critiques.
6. Ten quality analysts each assess three revised proposals with numeric scores and reasons. Every revised proposal receives two quality reviews.
7. The three managers select from the three highest-scoring candidates and explain their decisions.

Selection uses highest mean quality score. Manager votes break ties, followed by numeric member ID. The winner remains an unexecuted proposal requiring review; the score is not proof that it is correct or the best possible solution. Other candidates, debate text, scores and selection rationale remain visible.

The queue uses [p-queue](https://github.com/sindresorhus/p-queue). Only one model call runs at a time across ordinary bot plans and department teams. Whole departments are queued sequentially to fit the existing local computer. All twelve teams therefore require 780 model calls and can take substantial time. Queued workers are labelled queued rather than online or completed. No paid model or cloud fallback is configured.

Each job is validated and checkpointed to `data/teams/`. Invalid output or model failure marks the session failed, retains its evidence and completed work, and produces no winner. **Resume incomplete work** reuses the completed checkpoints and retries incomplete steps. After an application restart, unfinished sessions show interrupted and require resume. **Stop after current task** prevents subsequent steps; an in-flight model request can finish. **Stop all teams** requests this for every active or queued department.

Starting a new completed session archives the previous one locally. The UI shows the latest session for each department. Bot-tool activity history remains separate. This feature does not add new production website permissions, social account access or payment authority. Existing website edits still require their explicit local approval workflow.

Tests use controlled model fixtures to verify all 384 assignments, all 65 steps of a complete department, two-review coverage, winner selection, failure handling and checkpoint resume. Live model verification is separate from these controlled tests. Keep the local server and Ollama running for long sessions.
