# 🔹 Etapa 1: Construcción
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json package-lock.json ./ 
RUN apk add --no-cache npm
RUN npm install

COPY . .

RUN npx prisma generate
RUN npm run build

# 🔹 Etapa 2: Producción
FROM node:20-alpine AS runner

WORKDIR /app

RUN apk add --no-cache npm

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json

ARG NODE_ENV
ARG TURSO_DATABASE_URL
ARG TURSO_AUTH_TOKEN

ENV NODE_ENV=${NODE_ENV}
ENV TURSO_DATABASE_URL=${TURSO_DATABASE_URL}
ENV TURSO_AUTH_TOKEN=${TURSO_AUTH_TOKEN}

EXPOSE 5000

CMD ["npm", "run", "start:prod"]