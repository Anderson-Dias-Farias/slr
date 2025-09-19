import Atuacao from "@/components/_Pages/Atuacao";
import Cases from "@/components/_Pages/Cases";
import Contact from "@/components/_Pages/Contact";
import QuemSomos from "@/components/_Pages/Quem-Somos";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  const { slug } = await params;

  const url = slug[0];

  // Páginas de "Quem Somos" / "About Us" / "Quienes Somos"
  if (url === "quem-somos" || url === "about-us" || url === "quienes-somos") {
    return (
      <main>
        <QuemSomos />
      </main>
    );
  }

  // Páginas de "Área de Atuação" / "Services" / "Área de Actuación"
  if (
    url === "area-de-atuacao" ||
    url === "services" ||
    url === "area-de-actuacion"
  ) {
    return (
      <main>
        <Atuacao />
      </main>
    );
  }

  // Páginas de "Cases" / "Casos"
  if (url === "cases" || url === "casos") {
    return (
      <main>
        <Cases />
      </main>
    );
  }

  // Páginas de "Contato" / "Contact" / "Contacto"
  if (url === "contato" || url === "contact" || url === "contacto") {
    return (
      <main>
        <Contact />
      </main>
    );
  }

  return notFound();
}
