# Deployment reference

Target: any KVM VPS with root SSH, 2+ vCPU, 2 GB+ RAM (4 GB comfortable),
30 GB+ NVMe, Ubuntu 24.04 LTS, Docker preinstalled or installable.

## 1. Base hardening (summary)

```bash
adduser --disabled-password --gecos "" station
usermod -aG sudo,docker station
rsync --archive --chmod=go-rwx ~/.ssh /home/station/.ssh   # deploy key
ufw allow OpenSSH && uw allow 80,443/tcp && ufw --force enable
```

## 2. AzuraCast (official installer)

```bash
cd ~ && curl -fsSL https://raw.githubusercontent.com/AzuraCast/AzuraCast/main/docker.sh -o docker.sh
chmod +x docker.sh && ./docker.sh install
```

Follow the prompts; note the generated admin credentials. Web UI defaults to
port 8080 (HTTP) / 8443 (HTTPS) bound locally behind the reverse proxy.

## 3. Reverse proxy (Caddy)

```bash
sudo apt install -y caddy
sudo cp Caddyfile.example /etc/caddy/Caddyfile   # edit domain first
sudo systemctl reload caddy                      # automatic Let's Encrypt TLS
```

## 4. Application (this repo)

```bash
git clone <public-repo-url> && cd themasteradio/web
npm ci && npm run build
# run under a process manager (systemd unit or pm2) listening on 127.0.0.1:3000
```

## 5. Firewall matrix

| Port | Exposure | Service |
| --- | --- | --- |
| 22 | public | SSH (key-only) |
| 80/443 | public | Caddy -> Next.js + Icecast mount |
| 8000+ | loopback only | Icecast raw (proxied instead) |
| 8080/8443 | loopback only | AzuraCast admin UI |

## 6. Backups

```bash
bash ../ops/backup.sh    # cron nightly; keep off-site copies
```
