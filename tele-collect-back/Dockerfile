# Используем официальный образ Node.js
FROM node:18.15.0-alpine3.17

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Устанавливаем зависимости приложения
RUN yarn install

# Expose port 3000 for the API
EXPOSE 3000

# Start Nest.js server
CMD ["npm", "start"]

