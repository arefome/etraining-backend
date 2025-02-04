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

EXPOSE 5000

CMD ["pnpm", "run", "start:prod"]