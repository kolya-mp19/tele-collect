$backProjectRoot = Join-Path $PSScriptRoot ./tele-collect-back  

docker-compose down

git fetch
git pull

docker-compose up -d

Push-Location $backProjectRoot
yarn migration:run
Pop-Location