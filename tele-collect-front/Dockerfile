FROM node:lts-alpine

RUN yarn global add http-server

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn run build

EXPOSE 3000
CMD [ "http-server", "-p", "3000", "dist" ]