FROM debian:12

# Atualiza sistema
RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y curl wget nano htop && \
    apt-get clean

# Remove qualquer arquivo suspeito como xmrig
RUN find / -name "xmrig" 2>/dev/null -exec rm -f {} \; || true

# Pasta da aplicação
WORKDIR /app

# Copia seu código (se houver)
COPY . .

# Porta exposta
EXPOSE 3000

# Comando padrão
CMD ["bash"]
