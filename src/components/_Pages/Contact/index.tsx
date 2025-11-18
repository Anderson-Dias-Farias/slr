"use client";
import FormContato from "@/components/Form-Contato/index";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Contact() {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let hasScrolled = false;
    let animationFrameId: number | null = null;

    // Função de scroll suave customizada com velocidade controlada
    const smoothScrollTo = (targetPosition: number, duration: number = 500) => {
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      let startTime: number | null = null;

      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easedProgress = easeInOutCubic(progress);

        window.scrollTo(0, startPosition + distance * easedProgress);

        if (timeElapsed < duration) {
          animationFrameId = requestAnimationFrame(animation);
        } else {
          animationFrameId = null;
        }
      };

      animationFrameId = requestAnimationFrame(animation);
    };

    // Aguarda a página carregar completamente e então rola até o formulário
    const scrollToForm = () => {
      if (hasScrolled || !formRef.current) return;

      hasScrolled = true;
      const elementPosition = formRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 100; // 100px de offset do topo

      smoothScrollTo(offsetPosition, 1800); // 1.8 segundos para rolar de forma fluida
    };

    // Aguarda um pouco para garantir que tudo está renderizado
    const timer = setTimeout(() => {
      scrollToForm();
    }, 600);

    return () => {
      clearTimeout(timer);
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="w-full h-full overflow-hidden flex flex-col md:gap-10 gap-0 items-center justify-center">
      <section className="w-full h-full overflow-hidden md:min-h-[100vh] relative text-white">
        <Image
          src="/contact.jpg"
          alt="Contact"
          width={1920}
          height={1080}
          priority
          className="object-cover w-full h-full max-h-[100vh] "
        />
      </section>
      <div ref={formRef}>
        <FormContato />
      </div>
    </div>
  );
}
