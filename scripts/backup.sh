#!/bin/bash
set -e
AZURACAST_DIR="$HOME/azuracast"
STATION="<STATION_NAME>"
DATE=$(date +%F)
DBPASS=$(grep DB_PASSWORD "$AZURACAST_DIR/azuracast.env" | cut -d= -f2)
tar czf "$HOME/backup-media-$DATE.tgz" -C "$AZURACAST_DIR/stations/$STATION" media
docker exec azuracast_db mysqldump -uazuracast -p"$DBPASS" azuracast > "$HOME/azuracast-db-$DATE.sql"
echo "Backup done: $DATE (media tarball + db sql in $HOME)"
