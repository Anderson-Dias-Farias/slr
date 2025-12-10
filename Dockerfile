# ---------- STAGE 1: Build ----------
    FROM node:20-alpine AS builder

    WORKDIR /app
    
    COPY package*.json ./
    COPY pnpm-lock.yaml ./
    COPY .npmrc ./
    
    RUN npm install -g pnpm
    
    RUN pnpm install --frozen-lockfile
    
    COPY . .
    
    RUN pnpm build
    
    # ---------- STAGE 2: Production ----------
    FROM node:20-alpine AS runner
    
    WORKDIR /app
    
    ENV NODE_ENV=production
    
    COPY --from=builder /app/package*.json ./
    COPY --from=builder /app/.next ./.next
    COPY --from=builder /app/public ./public
    COPY --from=builder /app/node_modules ./node_modules
    
    EXPOSE 3000
    
    CMD ["pnpm", "start"]
    