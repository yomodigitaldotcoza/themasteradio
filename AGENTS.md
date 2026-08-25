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
python scripts/launch_retry.py                    # VM capacity hunt (socket-lock on 127.0.0.1:39157)
powershell -File scripts/download-hearthis.ps1 -CookiesFile C:\Users\PC\.hearthis-cookies.txt
bash scripts/duckdns-update.sh                    # needs DUCKDNS_TOKEN (auto-sources scripts/.env.secrets)
```

## Rules

- Never commit secrets: `.env*`, `*.pem`, `*cookies*`, `.playwright-mcp/` are gitignored — keep it that way.
- Do not edit `listen.html` (frozen design reference) or `mock up.png`.
- Styling: semantic classes live in `web/src/app/globals.css` (ported verbatim from the
  approved prototype). Tailwind tokens exist for new components; do not rewrite the
  ported CSS into utilities.
- Schedule rules live only in `web/src/lib/schedule.ts`.
- AzuraCast data is read-only from the app layer; see `docs/ARCHITECTURE.md`.
