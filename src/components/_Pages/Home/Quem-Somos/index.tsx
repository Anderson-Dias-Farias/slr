"use client";

import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function QuemSomos() {
  const t = useTranslations("about");
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2, // 20% da seção visível
    margin: "0px",
  });

  const cards = [
    {
      year: t("card1.year"),
      title: t("card1.title"),
      subtitle: t("card1.subtitle"),
      description: t("card1.description"),
      img: "/rocket.svg",
    },
    {
      year: t("card2.year"),
      title: t("card2.title"),
      subtitle: t("card2.subtitle"),
      description: t("card2.description"),
      img: "/growth.svg",
    },
    {
      year: t("card3.year"),
      title: t("card3.title"),
      subtitle: t("card3.subtitle"),
      description: t("card3.description"),
      img: "/hand-shake.svg",
    },
    {
      year: t("card4.year"),
      title: t("card4.title"),
      subtitle: t("card4.subtitle"),
      description: t("card4.description"),
      img: "/location.svg",
    },
    {
      year: t("card5.year"),
      title: t("card5.title"),
      subtitle: t("card5.subtitle"),
      description: t("card5.description"),
      img: "/united-states.svg",
    },
    {
      year: t("card6.year"),
      title: t("card6.title"),
      subtitle: t("card6.subtitle"),
      description: t("card6.description"),
      img: "/world.svg",
    },
  ];

  return (
    <section ref={ref} className="w-full h-full overflow-hidden px-4 py-20 ">
      <div className="w-full h-full max-w-7xl mx-auto flex md:flex-row flex-col md:items-start items-center md:justify-start justify-center  md:gap-6 gap-10">
        <div className="w-full h-full flex items-start justify-start text-gray-500 gap-10 flex-col lg:max-w-[600px] max-w-[500px]">
          <motion.div
            className=" rounded-full border-1 border-gray-400 px-8 py-1"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <span className="lg:text-lg md:text-base text-sm font-semibold">
              {t("badge")}
            </span>
          </motion.div>

          <motion.h1
            style={{
              wordSpacing: "-0.1em",
            }}
            className="lg:text-[45px] md:text-[35px] text-[25px] font-semibold text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t("title")}{" "}
            <span className="text-gray-600">{t("highlight1")}</span>{" "}
            <span className="text-black">{t("highlight2")}</span>
          </motion.h1>

          <motion.p
            className="text-justify text-gray-500 px-4 max-w-[550px] lg:text-base md:text-sm text-xs leading-7"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-gray-600 font-semibold">{t("subtitle")}</span>{" "}
            {t("description")}
          </motion.p>

          <motion.p
            className="text-justify text-gray-500 px-4 max-w-[550px] lg:text-base md:text-sm text-xs leading-7"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t("description2")}
          </motion.p>

          <motion.div
            className="w-full flex items-center justify-center max-w-[550px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              href="/cases"
              className="bg-[#2C2C2C] w-full mx-auto text-white px-4 py-4 rounded-full max-w-[500px]  uppercase text-center lg:text-base md:text-sm text-xs ml-1"
            >
              {t("cta")}
            </Link>
          </motion.div>
        </div>
        <motion.div
          className=" relative lg:min-h-[768px] md:min-h-[700px] sm:min-h-[450px] min-h-[250px] w-full md:w-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="w-full h-full  absolute md:min-w-[100vw] min-w-[90vw] rounded-xl md:rounded-none">
            <Image
              src="/quem-somos-img1.jpg"
              alt="About"
              fill
              className="object-cover rounded-xl md:rounded-none"
            />
          </div>
        </motion.div>
      </div>
      <motion.div
        className="w-full h-full max-w-7xl mx-auto grid xl:grid-cols-6 md:grid-cols-3 grid-cols-2  mt-10 p-2"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={card.year}
            className={`flex items-start gap-6 justify-center flex-col xl:max-w-[180px] px-2 ${
              // Aplicar borda apenas se NÃO for o primeiro da linha
              // Mobile (2 colunas): primeiro de cada linha: 0, 2, 4
              // Tablet (3 colunas): primeiro de cada linha: 0, 3
              // Desktop (6 colunas): primeiro da linha: 0
              index === 0
                ? "border-l-0 md:border-l-0 xl:border-l-0" // Sempre primeiro da linha
                : index === 2
                ? "border-l-0 md:border-l border-gray-400" // Primeiro no mobile, não no tablet
                : index === 3
                ? "border-l md:border-l-0 xl:border-l border-gray-400" // Primeiro no tablet, não no desktop
                : index === 4
                ? "border-l-0 md:border-l border-gray-400" // Primeiro no mobile, não no tablet
                : "border-l border-gray-400" // Sempre com borda
            }`}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.6,
              delay: 0.8 + index * 0.1,
            }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={
                isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
              }
              transition={{
                duration: 0.5,
                delay: 1.0 + index * 0.1,
              }}
            >
              <Image src={card.img} alt={card.title} width={70} height={70} />
            </motion.div>
            <div className="flex items-start gap-4 justify-start flex-col h-full pb-4">
              <motion.h3
                className="text-2xl font-semibold"
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{
                  duration: 0.5,
                  delay: 1.2 + index * 0.1,
                }}
              >
                {card.year}
              </motion.h3>
              <motion.h3
                className="text-lg font-semibold"
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{
                  duration: 0.5,
                  delay: 1.3 + index * 0.1,
                }}
              >
                {card.title}
              </motion.h3>
              <motion.p
                className="text-gray-600 text-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{
                  duration: 0.5,
                  delay: 1.4 + index * 0.1,
                }}
              >
                {card.subtitle}
              </motion.p>
              <motion.p
                className="text-gray-600 text-[12px]"
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{
                  duration: 0.5,
                  delay: 1.5 + index * 0.1,
                }}
              >
                {card.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
