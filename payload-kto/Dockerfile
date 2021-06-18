FROM node:16.3-alpine3.11 AS build

COPY package.json .
RUN yarn install --non-interactive

COPY  . .

EXPOSE 3000
ENTRYPOINT ["yarn", "dev"]
