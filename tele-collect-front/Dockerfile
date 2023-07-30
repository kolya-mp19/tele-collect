FROM node:lts-alpine

RUN yarn install -g http-server

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn run build
EXPOSE 3000
CMD [ "http-server", "dist" ]