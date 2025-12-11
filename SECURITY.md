# Medidas de Segurança Implementadas

## Problemas Identificados

1. **Erro no Dockerfile**: O comando `pnpm` não estava sendo encontrado corretamente
2. **Ataques de Minerador**: Tentativas de execução de código malicioso (xmrig, c3pool)
3. **Falta de Validação**: Requisições maliciosas não estavam sendo bloqueadas

## Correções Aplicadas

### 1. Dockerfile (`Dockerfile`)
- ✅ Corrigido comando para usar `npx pnpm start` em vez de `pnpm start`
- ✅ Adicionado usuário não-root (`nextjs`) para execução segura
- ✅ Adicionado `libc6-compat` para compatibilidade no Alpine
- ✅ Definido `NODE_ENV=production` e desabilitado telemetria

### 2. Middleware de Segurança (`middleware.ts`)
- ✅ Adicionada validação de padrões suspeitos:
  - `base64`, `eval()`, `exec()`, `spawn()`, `child_process`
  - Arquivos `.sh`, `.bash`
  - Comandos `curl`, `wget`, `ping` com `bash`
  - Mineradores: `c3pool`, `xmrig`, `miner`
  - Domínios suspeitos: `requestrepo.com`, `.0ql`
- ✅ Bloqueio automático de requisições suspeitas (403 Forbidden)
- ✅ Logging de tentativas de ataque

### 3. Headers de Segurança (`next.config.ts`)
- ✅ `Strict-Transport-Security`: Força HTTPS
- ✅ `X-Frame-Options`: Previne clickjacking
- ✅ `X-Content-Type-Options`: Previne MIME sniffing
- ✅ `X-XSS-Protection`: Proteção XSS
- ✅ `Content-Security-Policy`: Política de segurança de conteúdo
- ✅ `Referrer-Policy`: Controle de referrer
- ✅ `Permissions-Policy`: Limita permissões do navegador

## Recomendações Adicionais

### No Servidor EasyPanel

1. **Firewall**:
   ```bash
   # Bloquear portas desnecessárias
   # Permitir apenas 80, 443, 22 (SSH)
   ```

2. **Monitoramento**:
   - Verificar logs regularmente
   - Monitorar uso de CPU/RAM
   - Alertas para processos suspeitos

3. **Atualizações**:
   - Manter Docker e imagens atualizadas
   - Aplicar patches de segurança regularmente

4. **Backup**:
   - Fazer backup regular do código
   - Manter backups em local seguro

### No Ambiente Local

1. **Git**:
   - Não commitar credenciais
   - Revisar commits antes de push
   - Usar `.env` para variáveis sensíveis

2. **Dependências**:
   - Revisar `package.json` regularmente
   - Usar `pnpm audit` para verificar vulnerabilidades
   - Atualizar dependências com segurança

3. **Deploy**:
   - Sempre fazer build local antes de deploy
   - Verificar logs após deploy
   - Testar em ambiente de staging primeiro

## Comandos Úteis

### Verificar Vulnerabilidades
```bash
pnpm audit
```

### Verificar Processos Suspeitos (no servidor)
```bash
ps aux | grep -E "xmrig|c3pool|miner"
netstat -tulnp | grep -E "666|4444|8080"
```

### Limpar Cache e Rebuild
```bash
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

## Contato

Em caso de novos ataques ou vulnerabilidades, documentar:
- Data/hora do ataque
- Logs do servidor
- Padrões identificados
- Ações tomadas

