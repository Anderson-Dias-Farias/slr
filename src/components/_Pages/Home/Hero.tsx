"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations();

  // Animação para mobile (só opacidade)
  const mobileAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8 },
  };

  // Animação para desktop (opacidade + movimento do eixo X)
  const desktopAnimation = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
  };

  return (
    <div>
      <div className="relative w-full h-full min-h-[95vh] lg:min-h-[100dvh] z-10">
        <Image
          src="/hero-home.png"
          alt="Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />

        {/* Conteúdo Principal */}
        <div className="absolute inset-0 flex items-center flex-col justify-center px-4">
          <div className="max-w-7xl px-4 sm:px-6 lg:px-8 h-full e w-full flex flex-col lg:items-start items-center justify-center pt-20 gap-10 text-white lg:gap-10 text-center lg:text-left ">
            {/* Título Principal */}
            <motion.h1
              className="text-white xs:text-5xl text-4xl font-semibold max-w-[600px]"
              style={{ wordSpacing: "-0.1em" }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t("hero.title")}
            </motion.h1>

            {/* Subtítulo e Descrição */}
            <div className="flex lg:flex-col flex-col-reverse gap-10 w-auto items-center lg:items-start">
              <motion.div
                className="md:text-md text-[12px] uppercase font-semibold rounded-full bg-white text-black pl-6 pr-2 py-2 flex items-center gap-2 max-w-[370px]"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {t("hero.subtitle")}
                <div className="md:p-2 p-1 md:w-8 md:h-8 w-6 h-6 rounded-full bg-yellow-600 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>

              <motion.p
                className="text-white text-sm xl:text-base max-w-[480px]"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {t("hero.description")}
              </motion.p>
            </div>
          </div>

          {/* Estatísticas */}
          <div className="flex items-start justify-between gap-4 max-w-7xl mx-auto left-0  w-full sm:pb-10 pb-15 md:px-8 px-2">
            {[
              { number: "7+", text: t("hero.years") },
              { number: "1.000+", text: t("hero.projects") },
              { number: "5+", text: t("hero.countries") },
              { number: "+300Mil", text: t("hero.m2") },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 flex-col justify-center text-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
              >
                <p className="text-white md:text-4xl sm:text-3xl text-base font-semibold">
                  {stat.number}
                </p>
                <p className="text-white md:text-xl text-[10px]">{stat.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Linhas de borda */}
          <motion.div
            className="w-full absolute bottom-20 left-0"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          />
          <motion.div
            className="w-full pb-22  max-w-7xl mx-auto border-white"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          />
        </div>
      </div>
    </div>
  );
}
