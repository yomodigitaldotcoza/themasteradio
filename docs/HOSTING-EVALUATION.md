# Hosting Evaluation Log

Running record of infrastructure candidates evaluated for the 24/7 AzuraCast host.
Rule: nothing gets deployed until DNS → ownership → ToS/AUP → IPv4 → provisioning →
hardware → bandwidth → streaming-permission are all validated.

## Rejected

| Candidate | Date | Verdict | Evidence |
| --- | --- | --- | --- |
| FreeVPS.it.com | 2026-08-25 | **Does not exist** | NXDOMAIN on local resolver + Google 8.8.8.8 + Cloudflare 1.1.1.1; no NS delegation under healthy `it.com` zone; zero Wayback snapshots ever; zero independent web footprint |
| "Free forever" VPS sites generally (freevps.edu.pl 2.2/5 TP, gratisvps.net 1.9/5 TP, vpswala $0 tier 1 ARM vCPU/500 MB too small) | 2026-08-25 | **Do not trust** | Trustpilot review patterns describe ad-click activation loops where VPS never provisions |

## Closed

| Candidate | Date | Verdict | Evidence |
| --- | --- | --- | --- |
| Oracle Cloud Always Free (current tenancy) | 2026-08-25 | **Region-locked, unusable** | API (`list_region_subscriptions`): single subscription `af-johannesburg-1`, `is_home_region: true`. Oracle docs: home region "not changeable after your tenancy is provisioned"; Always Free compute "must be created in your home region". JHB A1 capacity exhausted (HTTP 500 Out of host capacity, all ADs). NOTE: since 2026-06-14 Always Free A1 = 2 OCPU/12 GB max (was 4/24); `scripts/launch_retry.py` updated accordingly |

## Under consideration (require owner decision)

### is*hosting "Hosting for Good" — best lead
- https://ishosting.com/en/for-good
- Real Estonian hosting company (since 2005, 40+ DCs, Trustpilot/HostAdvice presence),
  sponsors OpenSSL Foundation, curl, Coolify (press-verified Jul 2026).
- Offer: **free VPS or dedicated server, 12 months, renewable annually** for
  OSI-licensed open-source projects or registered non-profits; Jul 2026 press release
  also names **independent media organizations** as eligible for assistance.
- Gaps before applying: The Master Radio is neither OSI-licensed nor a registered
  non-profit today. Options: publish the `web/` platform under an OSI license,
  or qualify as independent/community media. Specs, location, and AUP stance on
  continuous audio streaming must be confirmed with them pre-commitment.

### POSF (Pyro Open Source Foundation) — weak
- https://pyro.host · github.com/posf-git (domain-verified org)
- Free Docker/VPS/cluster grants for popular open-source projects.
- Concerns: tiny footprint (14 followers, 2 repos, dormant since Apr 2025), no
  verifiable hosted-project list, no public members. Eligibility bar (broadly used,
  actively maintained OSS) does not match a personal radio station. Vet via their
  Discord before considering.

### DigitalOcean OSS sponsorship / NLnet & similar grants — poor fit
- Require established OSS projects or fund development work, not hosting for a
  community radio station.
