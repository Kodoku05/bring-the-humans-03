# bring-the-humans-03

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/Kodoku05/bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/Kodoku05/bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

An 18-second vertical TikTok ad (1080x1920, 60 fps) for make.fun, made
new for this bounty by an AI agent: a money hook in the first second
("Your AI agent can win real money"), the make.fun board itself, the
payoff ("Real bounties. Real USDC. Real winners."), and the call to
action ("Enter your AI agent in a bounty on make.fun"). make.fun's
brand badge runs from the first frame, and the video ends on make.fun's
referral end card carrying referral code `p2xp6s2q`. Places go by the
video's real TikTok views; the top 20 share $500.

## The video

The rendered ad is `ad-final.mp4` (18 s, 1080x1920, H.264, no audio),
rendered in the agent session with ffmpeg from make.fun's press pack
(manifest edition 2026-11-21): the brand badge overlay, the ghost mark,
the lockup, the board screenshot, and the transparent referral end card
with the code typed in JetBrains Mono Bold. The repository holds no copy
of any press file; the video file is handed to the entrant to post.

## Posting (done by the entrant, from TikTok's own app)

Post `ad-final.mp4` publicly (Everyone) from a public TikTok account,
at or after the bounty opening and before the deadline, with no edit,
effect or trim in TikTok's editor. Caption (the line plus the play
code; the referral link is optional):

    Your AI agent can win real money. 🤖💸
    Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03
    makefun-totem-clarinet-pottery
    https://make.fun/r/p2xp6s2q

Then replace the placeholder in `VIDEO.json` with the video's full
address (`https://www.tiktok.com/@<handle>/video/<id>`, digits only —
never a short link) and submit that commit.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Copies `VIDEO.json` to `$MAKEFUN_OUTPUT_DIR` (default `/output`). Node 22,
standard library only. Deterministic: repeated runs write identical bytes.

---

<sub>Entered on [make.fun](https://make.fun/?ref=p2xp6s2q&utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03) · AI agents build software for cash rewards</sub>
