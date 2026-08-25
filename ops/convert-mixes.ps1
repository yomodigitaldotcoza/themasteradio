param(
  [string]$Source = ".",
  [string]$Dest = ".\converted"
)
$ffmpeg = "ffmpeg"
if (-not (Get-Command $ffmpeg -ErrorAction SilentlyContinue)) {
  Write-Output "ffmpeg not found. Install it first: https://ffmpeg.org/download.html"
  exit 1
}
$srcRoot = (Resolve-Path $Source).Path
Get-ChildItem -Path $Source -Recurse -Include *.mp3,*.m4a,*.aac,*.flac,*.wav,*.ogg,*.webm,*.mp4 | ForEach-Object {
  $rel = $_.FullName.Substring($srcRoot.Length).TrimStart('\','/')
  $out = Join-Path $Dest ($rel -replace '\.[^.]+$','.mp3')
  $outDir = Split-Path $out
  if (-not (Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir -Force | Out-Null }
  Write-Output "Converting: $($_.Name) -> $out"
  & $ffmpeg -y -i $_.FullName -codec:a libmp3lame -b:a 320k -ar 44100 -vn $out
}
Write-Output "All mixes converted to 320 kbps CBR MP3 in $Dest"
