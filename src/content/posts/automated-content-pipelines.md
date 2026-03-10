---
title: "Building Zero-Touch Content Pipelines"
date: 2026-03-10
type: note
tags: ["automation", "ai", "content", "fanmeter"]
---

Spent the weekend building a fully automated content pipeline for FanMeter. The goal: generate 5 movie collections daily with zero human involvement.

The technical challenge wasn't the AI part. Gemini Vision handles frame quality analysis well. The hard part was YouTube metadata extraction without API quotas.

Ended up using yt-dlp with the --print flag for metadata-only extraction. No format resolution, no download simulation, just ID/title/duration. Simple once you read the docs carefully.

The real insight: automation requirements are binary. "Mostly automated with manual approval" isn't automation, it's a queue that grows until someone clears it. Either commit to zero-touch or accept manual curation as part of your workflow.

We chose zero-touch. GitHub Actions runs daily, AI judges frame quality, collections auto-publish if they hit 8.0/10. No approval queue, no review step, no human in the loop.

Will it ship some mediocre content? Probably. But it will also ship 5 collections every single day, which beats shipping 0 collections because the manual queue is too long.

Consistency over perfection.
