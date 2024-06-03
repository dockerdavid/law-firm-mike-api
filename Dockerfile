FROM node:21-alpine3.19 AS dev-dependencies

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

FROM node:21-alpine3.19 AS build

WORKDIR /usr/src/app

COPY --from=dev-dependencies /usr/src/app ./

COPY . .

RUN npm run build

FROM node:21-alpine3.19 AS production

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install --omit=dev

COPY --from=build /usr/src/app/dist ./dist

ENV TZ=America/Bogota

ENV NODE_ENV=production

CMD ["node", "dist/main.js"]