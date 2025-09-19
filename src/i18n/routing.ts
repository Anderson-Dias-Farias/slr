import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["pt-br", "en", "es"],

  // Used when no locale matches
  defaultLocale: "pt-br",

  // URL pathnames with translations
  pathnames: {
    "/": "/",
    "/about": {
      "pt-br": "/quem-somos",
      en: "/about-us",
      es: "/quienes-somos",
    },
    "/services": {
      "pt-br": "/area-de-atuacao",
      en: "/services",
      es: "/area-de-actuacion",
    },
    "/cases": {
      "pt-br": "/cases",
      en: "/cases",
      es: "/casos",
    },
    "/contact": {
      "pt-br": "/contato",
      en: "/contact",
      es: "/contacto",
    },
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
