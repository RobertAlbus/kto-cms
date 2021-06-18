FROM node:16.3-alpine3.11 AS build

COPY package.json .
RUN yarn install --production=true --non-interactive

COPY  . .
RUN yarn run build
RUN rm -rf src

EXPOSE 3000
ENTRYPOINT ["npm", "run", "serve"]
