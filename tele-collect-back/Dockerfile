FROM node:18.15.0-alpine3.17 AS builder

WORKDIR /api
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .

RUN yarn build

# Install production dependecies to reduce image size
FROM node:18.15.0-alpine3.17 AS production-deps
WORKDIR /api
COPY package.json yarn.lock tsconfig.json ./
RUN yarn install --production --frozen-lockfile

# Prodution image
FROM node:18.15.0-alpine3.17 AS runner

WORKDIR /api

COPY --from=builder /api/dist ./dist
COPY --from=production-deps /api/node_modules ./node_modules
COPY --from=builder /api/package.json ./package.json
COPY --from=builder /api/tsconfig.json ./tsconfig.json

CMD yarn start:prod