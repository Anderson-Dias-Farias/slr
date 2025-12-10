# Builder
FROM node:20-alpine AS builder
WORKDIR /app

# Copia arquivos essenciais
COPY package.json pnpm-lock.yaml ./

# Instala pnpm
RUN npm install -g pnpm

# Instala dependências
RUN pnpm install --frozen-lockfile

# Copia restante do projeto
COPY . .

# Build do Next
RUN pnpm build

# Runner
FROM node:20-alpine AS runner
WORKDIR /app

# Copiar apenas o build e node_modules necessários
COPY --from=builder /app ./

EXPOSE 3000
CMD ["pnpm", "start"]
