#!/bin/bash
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
[ -f "$DIR/.env.secrets" ] && . "$DIR/.env.secrets"
DOMAIN="themasteradio"
: "${DUCKDNS_TOKEN:?set DUCKDNS_TOKEN in environment or ops/.env.secrets}"
curl -s "https://www.duckdns.org/update?domains=${DOMAIN}&token=${DUCKDNS_TOKEN}&ip="
echo
