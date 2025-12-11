import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./src/i18n/routing";

// Lista de padrões suspeitos para bloquear
const SUSPICIOUS_PATTERNS = [
  /base64/i,
  /eval\(/i,
  /exec\(/i,
  /spawn\(/i,
  /child_process/i,
  /\.sh$/i,
  /\.bash$/i,
  /curl.*bash/i,
  /wget.*bash/i,
  /ping.*bash/i,
  /c3pool/i,
  /xmrig/i,
  /miner/i,
  /requestrepo\.com/i,
  /\.0ql/i,
];

// Função para verificar se a requisição é suspeita
function isSuspiciousRequest(request: NextRequest): boolean {
  const url = request.url;
  const pathname = request.nextUrl.pathname;
  const searchParams = request.nextUrl.searchParams.toString();
  const userAgent = request.headers.get("user-agent") || "";

  const fullPath = `${pathname}${searchParams ? `?${searchParams}` : ""}`;

  // Verificar padrões suspeitos
  for (const pattern of SUSPICIOUS_PATTERNS) {
    if (
      pattern.test(url) ||
      pattern.test(pathname) ||
      pattern.test(searchParams) ||
      pattern.test(userAgent) ||
      pattern.test(fullPath)
    ) {
      console.warn(`[SECURITY] Bloqueada requisição suspeita: ${fullPath}`, {
        url,
        userAgent,
        ip:
          request.headers.get("x-forwarded-for") ||
          request.headers.get("x-real-ip") ||
          "unknown",
      });
      return true;
    }
  }

  return false;
}

// Middleware de segurança
export function securityMiddleware(request: NextRequest) {
  // Bloquear requisições suspeitas
  if (isSuspiciousRequest(request)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  return null;
}

// Criar middleware do next-intl
const intlMiddleware = createMiddleware(routing);

// Middleware principal
export default function middleware(request: NextRequest) {
  // Aplicar segurança primeiro
  const securityResponse = securityMiddleware(request);
  if (securityResponse) {
    return securityResponse;
  }

  // Aplicar middleware de internacionalização
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    "/",

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    "/(pt-br|en|es)/:path*",

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    // Exclude API routes, static files, and Next.js internals
    "/((?!_next|_vercel|api|.*\\..*).*)",
  ],
};
