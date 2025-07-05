FROM node:18.18.2-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

FROM node:18.18.2-alpine

WORKDIR /app

COPY --from=build /app /app

USER appuser

EXPOSE 3000

CMD ["node", "app.js"]
