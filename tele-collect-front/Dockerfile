# Используем официальный образ Node.js версии 18.15.0 на базе Alpine Linux
FROM node:18.15.0-alpine3.17

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и yarn.lock в рабочую директорию
COPY package*.json yarn.lock ./

# Устанавливаем зависимости приложения
RUN yarn install

# Копируем все файлы проекта в контейнер
COPY . .

# Собираем приложение
RUN yarn build

# Команда, которая будет запущена при запуске контейнера
CMD [ "yarn", "start" ]
