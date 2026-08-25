param(
  [string]$CookiesFile = ""
)

$ErrorActionPreference = "Continue"
$exe = "C:\Users\PC\AppData\Local\Microsoft\WinGet\Packages\yt-dlp.yt-dlp_Microsoft.Winget.Source_8wekyb3d8bbwe\yt-dlp.exe"
$root = "$env:USERPROFILE\Music\station-music"

$map = @{
  "all-eyes-on-me-mix" = "hiphop"
  "beware-of-my-crew-mix" = "hiphop"
  "hiphop-mixxxx" = "hiphop"
  "hiphop-you-raised-me" = "hiphop"
  "i-do-it-for-hiphop" = "hiphop"
  "if-heads-only-knew" = "hiphop"
  "imixwhatilike" = "hiphop"
  "memories-dont-live-like-people-tbt" = "hiphop"
  "real-hiphop-is-not-on-radio" = "hiphop"
  "real-hiphop-lives-on" = "hiphop"
  "state-of-hip-hop-2004-2011-part-1" = "hiphop"
  "straightouta90s" = "hiphop"
  "that-sunday-hiphop-mix" = "hiphop"
  "deep-house-mix-november-2020" = "house"
  "deep-plantation-sessions" = "house"
  "house-mix-december-2020" = "house"
  "houseizafeeling" = "house"
  "majestic-soul-deep-mix-2012-04-0611h58m05" = "house"
  "majestic-soul-live-at-bar9-midrand-13-jan-2012-" = "house"
  "majestic-soul-or-nothing" = "house"
  "shaguma-day-2-16-december-2020" = "house"
  "shaguma-mix-kv5" = "house"
  "mzansidjs-001" = "house"
  "mzansidjs-presents-p-cappello-bloemfonteinsouth-africa-05-may-2012" = "house"
  "30-years-of-soul" = "disco"
  "igotsoul-1" = "disco"
  "the-master-disco-mix" = "disco"
  "the-master-june-1976" = "disco"
  "the-master-shanty-town-disco-mix" = "disco"
  "the-master-something-jazzydiscofunk" = "disco"
  "the-master-something-jdk-vol2" = "disco"
  "20-min-of-old-skool-mix" = "general"
  "old-is-old-school" = "general"
  "34-minutes-mix" = "_unsorted"
  "afterworkthingz-sessions-baescafe-midrand" = "_unsorted"
  "april-is-a-fool" = "_unsorted"
  "let-me-practice" = "_unsorted"
  "majestic-mix-on-18-january-2012" = "_unsorted"
  "majestic-on-nippyfridays-cappello-parktown-30-november-2012" = "_unsorted"
  "may-mix" = "_unsorted"
  "mix-on-25-nov" = "_unsorted"
  "my-birthday-mix" = "_unsorted"
  "sat-mix-20-jan" = "_unsorted"
  "stupid-105-mix" = "_unsorted"
  "the-baescafe-preparty-sessions" = "_unsorted"
  "the-kltv-presents-the-master-simz" = "_unsorted"
  "the-last-supper" = "_unsorted"
  "the-master-breaking-barriers-mix" = "_unsorted"
  "the-master-breaking-barriers-mix-2" = "_unsorted"
}

$cookieArgs = @()
if ($CookiesFile -ne "" -and (Test-Path $CookiesFile)) {
  $cookieArgs = @("--cookies", $CookiesFile)
}

$done = Get-ChildItem $root -Recurse -Include *.mp3,*.wav,*.m4a,*.flac,*.opus | ForEach-Object { $_.BaseName }
$i = 0
foreach ($slug in ($map.Keys | Sort-Object)) {
  $i++
  $folder = $map[$slug]
  if ($done | Where-Object { $_ -like "*$slug*" }) { Write-Output "[$i] SKIP (exists): $slug"; continue }
  $url = "https://hearthis.at/themasterdj/$slug/"
  Write-Output "[$i/$($map.Count)] downloading: $slug -> $folder"
  & $exe @cookieArgs -f "mp3-0/bestaudio/best" --no-playlist --retries 3 --fragment-retries 3 -o "$root\$folder\$slug.%(ext)s" $url 2>&1 | Select-Object -Last 2
}
Write-Output "BATCH COMPLETE"
