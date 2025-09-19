import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function RootPage() {
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language") || "";

  // Detect language from Accept-Language header
  let locale = "pt-br"; // default

  if (acceptLanguage.includes("en")) {
    locale = "en";
  } else if (acceptLanguage.includes("es")) {
    locale = "es";
  }

  redirect(`/${locale}`);
}








