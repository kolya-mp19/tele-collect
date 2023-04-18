# Используем официальный образ Node.js версии 18.15.0 на базе Alpine Linux
FROM node:18.15.0-alpine3.17

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Устанавливаем зависимости приложения
RUN yarn install

# Собираем приложение
RUN yarn build

# Expose port 3001 for the frontend
EXPOSE 3001

# Команда, которая будет запущена при запуске контейнера
CMD [ "yarn", "start" ]
