import { routing } from "@/i18n/routing";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  // Static for now, we'll change this later
  let locale: string | undefined = await requestLocale;

  if (!locale || !routing.locales.includes(locale as "pt-br" | "en" | "es")) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
