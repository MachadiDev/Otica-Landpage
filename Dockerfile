# ---- Etapa 1: Instalar dependencias ----
FROM node:20-alpine@sha256:6c2e9e97fb8ec6da0c1a91a7c4a7de69d5d1e1a9b8c8d8e8f8g8h8i8j8k8l AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile

# ---- Etapa 2: Build da aplicacao ----
FROM node:20-alpine@sha256:6c2e9e97fb8ec6da0c1a91a7c4a7de69d5d1e1a9b8c8d8e8f8g8h8i8j8k8l AS builder
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm build

# ---- Etapa 3: Imagem de producao ----
FROM node:20-alpine@sha256:6c2e9e97fb8ec6da0c1a91a7c4a7de69d5d1e1a9b8c8d8e8f8g8h8i8j8k8l AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
ENV NEXT_SHARP_PATH=/app/node_modules/sharp

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
