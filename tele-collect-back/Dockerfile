FROM node:18.15.0-alpine3.17

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

EXPOSE 3001
CMD ["yarn", "start"]

