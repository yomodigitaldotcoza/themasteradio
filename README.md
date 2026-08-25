# The Master Radio Platform

An open-source, self-hostable digital radio platform, built around
[The Master Radio](https://hearthis.at/themasterdj/) — an independent South
African internet station streaming old-school hip hop, house, disco, soul and
lounge 24/7. The station is the live reference implementation; the code is for
everyone.

Licensed under the [MIT License](LICENSE).

## Architecture

```
Next.js web  ─┐
              ├─► AzuraCast API ─► Icecast / Liquidsoap ─► radio stream
Node.js API ──┘        │
        PostgreSQL ◄────┘ (application data only)
```

AzuraCast remains the broadcast engine (audio, playlists, AutoDJ, Icecast).
This platform layers the product experience on top. See
[docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for the frozen data-ownership model.

## Repository layout

| Path | Purpose |
| --- | --- |
| `web/` | Next.js 14 + TypeScript + Tailwind front-end (pixel-faithful port of the approved design in `listen.html`) |
| `ops/` | Operational scripts: DuckDNS updater, library fetcher, audio converter, backups |
| `deployment/` | Server deployment references (reverse proxy, firewall, AzuraCast install) |
| `docs/` | Architecture decisions |

Private materials (credentials, tenancy-specific automation, business files)
are intentionally **not** part of this repository.

## Quick start

```bash
cd web
npm ci
npm run dev       # http://localhost:3000
```

Production:

```bash
npm run build && npm start
```

## Ops scripts

```bash
bash ops/duckdns-update.sh                        # update DuckDNS A record (needs DUCKDNS_TOKEN env or untracked .env.secrets)
powershell -File ops/download-hearthis.ps1        # batch-download a hearthis.at track list with genre sorting
powershell -File ops/convert-mixes.ps1            # normalize library to 320 kbps MP3 via ffmpeg
bash ops/backup.sh                                # AzuraCast backups (target server only)
```

## Deployment

See [deployment/DEPLOY.md](deployment/DEPLOY.md) — Docker-based AzuraCast
install behind a Caddy reverse proxy with automatic TLS.

## License & content

Platform code: MIT. Station audio, artwork and the The Master Radio brand
remain the property of the station; they are not part of this license.

## Credits

Infrastructure-independent by design — runs on any KVM VPS with Docker.
