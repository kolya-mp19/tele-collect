docker-compose down

git fetch
git pull

docker-compose up -d

docker exec -it tele-collect-back yarn migration:run