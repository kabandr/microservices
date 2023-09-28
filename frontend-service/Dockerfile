FROM node:16-alpine AS builder
WORKDIR /app
COPY package.json package.json ./
RUN npm install -g typescript && npm install --omit=dev
RUN npm install --save-dev @types/react @types/react-dom
COPY . .
RUN npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=builder /app/dist .
EXPOSE 5173

ENTRYPOINT ["nginx", "-g", "daemon off;"]
