# ----------------------------
# Base
# ----------------------------
FROM node:22.14.0 AS base
WORKDIR /app

RUN npm install -g pnpm@10.1.0

# ----------------------------
# Dependencies + Build
# ----------------------------
FROM base AS builder

# Copy only dependency files first (enables Docker cache)
COPY package.json pnpm-lock.yaml ./

# Use local pnpm store (critical for Docker performance)
RUN pnpm config set store-dir /app/.pnpm-store

# Install deps (DO NOT ignore scripts for Next.js)
RUN pnpm install --frozen-lockfile --reporter=append-only

# Copy the rest of the source
COPY . .

# Build Next.js
RUN pnpm build

# ----------------------------
# Production runtime
# ----------------------------
FROM node:22.14.0-alpine AS prod
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Create non-root user
RUN addgroup --system --gid 1001 nodejs \
    && adduser  --system --uid 1001 nextjs

# Copy standalone output (Next.js recommended)
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/.env* ./

# Permissions
RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
