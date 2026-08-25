# is*hosting "Hosting for Good" — Application Package

Target form: https://ishosting.com/en/for-good → REQUEST free hosting
(HubSpot form; fields listed verbatim below). Program terms: free VPS/dedicated,
12 months renewable annually while the project stays active.

## Step 0 — Prerequisites before submitting (owner decisions)

| # | Item | Status |
| --- | --- | --- |
| 1 | Confirm publishing the platform code (`web/`, ops scripts) under the **MIT license** in a public GitHub repo. This is what qualifies us under "OSI-approved license"; the Jul 2026 program update also names independent media organizations, which we cite as secondary framing. | ☐ owner confirms |
| 2 | Create the public repo (suggested name `themasteradio`) and push the existing code. | ☐ owner pushes |
| 3 | Supply the contact email to submit with the form. | ☐ owner provides |
| 4 | Owner submits the form (identity belongs to the owner, not the agent). | ☐ |

## Form answers (paste-ready)

### Project name*
```
The Master Radio
```

### Project URL*
```
https://github.com/<owner>/themasteradio
```
(plus supporting proof of active audience: https://hearthis.at/themasterdj/ — 49 published mixes)

### What it does*
```
The Master Radio is a free, non-commercial community internet radio station from
South Africa ("Mzansi") broadcasting old-school hip hop, house, disco, soul and
lounge 24/7. It serves Mzansi listeners and the diaspora with DJ-mixed programming
(49 published mixes, weekly on-air schedule). The platform code is fully open
source (MIT): a Next.js front-end that layers over AzuraCast, the open-source
radio broadcast suite, plus operational scripts for DNS updates, backups and
deployment. The whole stack is self-hostable by any community station.
```

### Infrastructure needs*
```
1x VPS (KVM virtualization required for Docker), dedicated IPv4, root/SSH access,
Ubuntu 24.04 LTS.

Specs requested:
- CPU: 2 vCPU
- RAM: 4 GB
- Storage: 40-50 GB NVMe
- Bandwidth: 1 TB+/month unmetered if possible

Workload: AzuraCast (official Docker Compose deployment) running a single station
- web UI (nginx), MariaDB, Redis, Liquidsoap AutoDJ, Icecast stream output
- expected listener peak 50-150 concurrent at 128-192 kbps
- ports needed: 22 (SSH), 80/443 (web), one Icecast port (e.g. 8000) or all
  public traffic reverse-proxied through 443

Preferred location: Europe (Frankfurt / Amsterdam / London) or any location with
good routes to South Africa; flexible.
Use case: continuous 24/7 internet audio streaming (Icecast). Please confirm your
AUP permits continuous audio streaming at this scale.
```

### Team size*
```
Just me (1 person)
```
(select the equivalent option)

### Your Email*
```
<owner to provide>
```

### Anything else?
```
This is a zero-budget passion project: R0 forever by design. The station has been
building its library and audience on hearthis.at (49 mixes) and is moving to full
self-hosting on open-source infrastructure (AzuraCast). We chose to apply here
because of Hosting for Good's support of OpenSSL/curl/Coolify and independent
media. Happy to credit is*hosting on the station website footer and in show notes
if approved. We keep full off-site backups and will follow your AUP strictly.
```

## Post-submission validation checklist (before deploying anything)

Per docs/HOSTING-EVALUATION.md rule — all boxes must pass:
- ☐ Written confirmation that continuous Icecast/AzuraCast streaming is AUP-permitted
- ☐ VPS provisioned; dedicated IPv4 received
- ☐ SSH root login works with our key (`C:\Users\PC\.ssh\themasterradio.pub`)
- ☐ Docker + Docker Compose install cleanly (KVM verified)
- ☐ Actual vs advertised resources verified inside the VM (nproc/free/df)
- ☐ Bandwidth shape tested
- ☐ AzuraCast installed via official `docker.sh`; all containers healthy
- ☐ Web UI reachable externally over HTTPS
- ☐ Test station created; AutoDJ playing; Icecast mount live
- ☐ External device connects to the public stream URL
- ☐ DuckDNS repointed to new IP; Caddy TLS issued
- ☐ Secrets (AzuraCast admin, DB, API keys) stored VM-side only; none committed

## Rollback safety

Oracle tenancy remains untouched (VCN/subnet/scripts intact) until the new server
has been proven operational. Nothing migrates before the checklist above passes.
