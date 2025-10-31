import Atuacao from "@/components/_Pages/Atuacao";
import Cases from "@/components/_Pages/Cases";
import Contact from "@/components/_Pages/Contact";
import QuemSomos from "@/components/_Pages/Quem-Somos";
import { getLocale } from "next-intl/server";

export default async function Page({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  const { slug } = await params;
  const locale = await getLocale();

  const url = slug[0];
  console.log("esta sendo exibido: ", url);

  // Mapeamento das rotas curtas para as rotas longas
  const routeMap: Record<string, Record<string, string>> = {
    abt: {
      "pt-br": "quem-somos",
      en: "about-us",
      es: "quienes-somos",
    },
    services: {
      "pt-br": "area-de-atuacao",
      en: "services",
      es: "area-de-actuacion",
    },
    contact: {
      "pt-br": "contato",
      en: "contact",
      es: "contacto",
    },
  };

  // Traduz a URL curta para a URL longa se necessário
  const finalUrl = routeMap[url]?.[locale] || url;

  // Páginas de "Quem Somos" / "About Us" / "Quienes Somos"
  if (
    finalUrl === "quem-somos" ||
    finalUrl === "about-us" ||
    finalUrl === "quienes-somos"
  ) {
    return (
      <main>
        <QuemSomos />
      </main>
    );
  }

  // Páginas de "Área de Atuação" / "Services" / "Área de Actuación"
  if (
    finalUrl === "area-de-atuacao" ||
    finalUrl === "services" ||
    finalUrl === "area-de-actuacion"
  ) {
    return (
      <main>
        <Atuacao />
      </main>
    );
  }

  // Páginas de "Cases" / "Casos"
  if (finalUrl === "cases" || finalUrl === "casos") {
    return (
      <main>
        <Cases />
      </main>
    );
  }

  // Páginas de "Contato" / "Contact" / "Contacto"
  if (
    finalUrl === "contato" ||
    finalUrl === "contact" ||
    finalUrl === "contacto"
  ) {
    return (
      <main>
        <Contact />
      </main>
    );
  }
}
