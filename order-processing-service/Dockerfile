FROM node:16 as development
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY ./src ./src
EXPOSE 3000
CMD [ "npm", "run", "start:dev" ]

FROM development as builder
WORKDIR /usr/src/app
RUN rm -rf node_modules
RUN npm ci --only=production
EXPOSE 3000
CMD [ "npm", "start" ]

FROM alpine:latest as production
RUN apk --no-cache add nodejs ca-certificates
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app ./
CMD [ "node", "src/index.js" ]