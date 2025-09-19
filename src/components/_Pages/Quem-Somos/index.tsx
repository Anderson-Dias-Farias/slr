"use client";
import FormContato from "@/components/Form-Contato/index";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef } from "react";
import Missao from "./Missao";

export default function QuemSomos() {
  const t = useTranslations("about-us");
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2, // 20% da seção visível
    margin: "0px",
  });

  return (
    <>
      <section
        ref={ref}
        className="w-full h-full overflow-hidden px-4 py-20 min-h-[100dvh] relative text-white"
      >
        <div className="w-full h-full max-w-7xl mx-auto flex flex-col gap-10 items-start justify-start">
          <motion.h1
            className="lg:text-6xl md:text-4xl sm:text-3xl text-2xl font-normal absolute md:bottom-10 bottom-40 left-0 z-10 right-0 w-full text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            {t("hero")} <span className="font-bold">{t("hero2")}</span>
          </motion.h1>
        </div>
        <div className="w-full bg-black/50 absolute inset-0 z-1"></div>
        <Image
          src="/quem-somos.jpg"
          alt="Quem Somos"
          fill
          className="object-cover absolute inset-0 object-center z-0"
          priority
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: "cover",
            objectPosition: "20% 54%",
          }}
        />
      </section>
      <Missao />
      <FormContato />
    </>
  );
}
