# THE MASTER RADIO — Frozen Architecture

Status: **LOCKED** (2026-08-25). Changes require explicit approval.

## Principle

AzuraCast remains the radio engine. The Next.js/Node layer is the product/application
layer on top of it. Nothing in the app layer reimplements audio, playlists, rotation,
scheduling of playback, streaming, or listener stats.

## Data ownership (non-negotiable)

| AzuraCast owns | PostgreSQL owns (later phases) |
| --- | --- |
| audio, playlists, rotation | users, presenters |
| broadcast schedule execution | editorial content |
| stream endpoints | track requests, moderation |
| listener statistics | notifications, admin |
| song history | future subscriptions/payments |

The app DB never mirrors AzuraCast playback data. AzuraCast data is read live (with
short-TTL cache) through a server-only module `lib/azuracast`.

## Stack

- **Web:** Next.js 14 App Router, TypeScript (strict), Tailwind tokens + ported
  semantic CSS layer (`web/src/app/globals.css`, ported verbatim from the approved
  `listen.html` prototype for pixel fidelity).
- **API (Phase 6+):** Fastify, added only when a real server-side need exists.
- **Radio engine:** AzuraCast (Docker) on Oracle Cloud Always Free VM.
- **Edge/TLS:** Caddy in front of Next.js and AzuraCast.
- **DNS:** DuckDNS `themasteradio.duckdns.org` (token in untracked `ops/.env.secrets`).

## Execution tracks

- **Track A — Infrastructure:** Oracle VM (capacity retry loop running), AzuraCast
  install, music library (49 mixes), DuckDNS, Caddy, backups.
- **Track B — Product:** this `web/` app. Pixel-perfect port of the approved
  `listen.html`. No API integration, no fake data plumbing — static snapshot values
  (listener counts, now-playing) stay exactly as approved until Track C wires them.
- **Track C — Integration (after AzuraCast is live):** Now Playing, Recent Plays,
  Schedule, listener count, real stream in player, requests. Implemented via
  server-only `lib/azuracast` (getNowPlaying, getRecentTracks, getSchedule,
  getStationStatus, getStreamInformation, submitRadioRequest) with cache + circuit
  breaker.

## Schedule source of truth

`web/src/lib/schedule.ts` is the single definition of the programme grid
(Sat house, Sun lounge, Mon–Fri 18:00–22:00 hip hop, Fri 22:00–24:00 disco,
otherwise Master Rotation). UI derives from it; no duplicated rule arrays.

## Security posture

- No secrets in git: `.env*`, `*.pem`, `*cookies*`, `.playwright-mcp/`, `*.part`,
  `private/`, `kilo.json` are gitignored. DuckDNS token lives in
  `ops/.env.secrets` (untracked).
- AzuraCast admin/API keys will live in VM-only env files, never in the repo.

## Known placeholders

- WhatsApp number `27000000000` (real number pending).
- Listener/play counts are static approved-design values until Track C.
- Player buttons are inert until the real stream URL exists.
