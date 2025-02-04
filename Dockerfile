# 🔹 Etapa 1: Construcción
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json pnpm-lock.yaml ./
RUN apk add --no-cache npm && npm install -g pnpm
RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm dlx prisma generate
RUN pnpm run build

# 🔹 Etapa 2: Producción
FROM node:20-alpine AS runner

WORKDIR /app

RUN apk add --no-cache npm && npm install -g pnpm

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json

ARG NODE_ENV
ARG TURSO_DATABASE_URL
ARG TURSO_AUTH_TOKEN
ARG JWT_SECRET

ENV NODE_ENV=${NODE_ENV}
ENV TURSO_DATABASE_URL=${TURSO_DATABASE_URL}
ENV TURSO_AUTH_TOKEN=${TURSO_AUTH_TOKEN}
ENV JWT_SECRET=${JWT_SECRET}

EXPOSE 5000

CMD ["pnpm", "run", "start:prod"]