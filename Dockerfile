# STAGE 1 — Builder
FROM node:20-alpine AS builder
WORKDIR /app

# Copiar configs de dependências
COPY package.json pnpm-lock.yaml ./

# Instalar pnpm globalmente
RUN npm install -g pnpm

# Instalar dependências
RUN pnpm install --frozen-lockfile

# Copia o resto do projeto
COPY . .

# Build do Next.js
RUN pnpm build


# STAGE 2 — Runner
FROM node:20-alpine AS runner
WORKDIR /app

# Instalar pnpm também no runner (evita erro "Cannot find module '/app/pnpm'")
RUN npm install -g pnpm

# Copiar build final
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Porta padrão
EXPOSE 3000

# Comando de execução
CMD ["pnpm", "start"]
