import Cases from "@/components/_Pages/Home/Cases";
import Depoimentos from "@/components/_Pages/Home/Depoimentos";
import Hero from "@/components/_Pages/Home/Hero";
import NossoValores from "@/components/_Pages/Home/Nosso-Valores";
import QuemSomos from "@/components/_Pages/Home/Quem-Somos";
import FormContato from "@/components/Form-Contato/index";

export default function Home() {
  return (
    <main>
      <Hero />
      <QuemSomos />
      <NossoValores />
      <Cases />
      <Depoimentos />
      <FormContato />
    </main>
  );
}
