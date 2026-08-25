# THE MASTER RADIO — Agent Notes

Freeze doc: `docs/ARCHITECTURE.md` (read before changing architecture or data ownership).

## Commands

Web app (in `web/`):

```
npm run dev        # dev server
npm run build      # production build
npm run typecheck  # tsc --noEmit
npm start -- -p 3100
```

Ops (repo root):

```
powershell -File ops/download-hearthis.ps1 -CookiesFile C:\Users\PC\.hearthis-cookies.txt
bash ops/duckdns-update.sh                        # needs DUCKDNS_TOKEN (auto-sources ops/.env.secrets)
python private/launch_retry.py                    # Oracle VM capacity hunt (local-only, not published)
```

## Rules

- Never commit secrets: `.env*`, `*.pem`, `*cookies*`, `.playwright-mcp/`, `private/` are gitignored — keep it that way.
- This repo is published under MIT: everything tracked must be safe to be public.
- Do not edit `listen.html` (frozen design reference) or `mock up.png`.
- Styling: semantic classes live in `web/src/app/globals.css` (ported verbatim from the
  approved prototype). Tailwind tokens exist for new components; do not rewrite the
  ported CSS into utilities.
- Schedule rules live only in `web/src/lib/schedule.ts`.
- AzuraCast data is read-only from the app layer; see `docs/ARCHITECTURE.md`.
