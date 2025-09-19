import createMiddleware from "next-intl/middleware";
import { routing } from "./src/i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: ["/", "/(pt-br|en|es)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
