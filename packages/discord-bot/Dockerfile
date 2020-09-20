FROM node:lps-alpine as builder

WORKDIR /src

COPY . .

RUN npm i
RUN ./node_modules/.bin/lerna bootstrap --no-progress --force-local --concurrency 2
RUN npm run build:discord-bot

FROM node:lps-alpine

WORKDIR /src

COPY --from=builder src/packages/discord-bot/dist .

ENTRYPOINT ["node"]

CMD ["index.js"]