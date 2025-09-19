"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import Carrocel from "./Carrocel";

export default function Cases() {
  const [tab, setTab] = useState("corporativo");
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = useTranslations("cases-page");
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2,
    margin: "0px",
  });

  const itensCorporativo = [
    {
      company: t("itens.item1.company"),
      logo: t("itens.item1.logo"),
      type: t("itens.item1.type"),
      description: t("itens.item1.description"),
      img: {
        img: t("itens.item1.img.img"),
        img2: t("itens.item1.img.img2"),
        img3: t("itens.item1.img.img3"),
      },
      list: {
        localizacao: {
          title: t("itens.item1.list.localizacao.title"),
          description: t("itens.item1.list.localizacao.description"),
        },
        frente: {
          title: "Frente",
          description: t("itens.item1.list.frente.description"),
        },
        nicho: {
          title: "Nicho",
          description: t("itens.item1.list.nicho.description"),
        },
      },
    },
  ];

  const itensVarejo = [
    {
      company: t("itens.item1.company"),
      logo: t("itens.item1.logo"),
      type: t("itens.item1.type"),
      description: t("itens.item1.description"),
      img: {
        img: t("itens.item1.img.img"),
        img2: t("itens.item1.img.img2"),
        img3: t("itens.item1.img.img3"),
      },
      list: {
        localizacao: {
          title: t("itens.item1.list.localizacao.title"),
          description: t("itens.item1.list.localizacao.description"),
        },
        frente: {
          title: "Frente",
          description: t("itens.item1.list.frente.description"),
        },
        nicho: {
          title: "Nicho",
          description: t("itens.item1.list.nicho.description"),
        },
      },
    },
  ];
  const nextSlide = (values: number) => {
    setCurrentSlide((prev) => (prev + 1) % values);
  };

  const prevSlide = (values: number) => {
    setCurrentSlide((prev) => (prev - 1 + values) % values);
  };

  return (
    <Tabs value={tab} onValueChange={setTab} className="bg-white pb-20">
      <TabsList
        ref={ref}
        className="w-full h-full  py-20 flex flex-col gap-2 bg-white overflow-hidden items-center justify-center"
      >
        <div className="w-full h-full max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center justify-between pt-20 pb-2 px-4 mt-20">
          <motion.h1
            className="sm:text-6xl text-3xl font-semibold text-gray-800 w-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            {t("title")}
          </motion.h1>
          <div className="flex  gap-4">
            <motion.h2
              className={`sm:text-lg text-base font-normal ${
                tab !== "corporativo"
                  ? "text-gray-500 bg-white"
                  : "text-yellow-500 bg-[#414141]"
              } w-auto text-center rounded-full px-6  border-1 border-gray-300`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <TabsTrigger
                value="corporativo"
                style={{
                  backgroundColor: `${
                    tab === "corporativo" ? "#414141" : "#ffffff"
                  }`,
                  color: `${tab === "corporativo" ? "#FFBE00" : "#414141"}`,
                }}
              >
                {t("badge1")}
              </TabsTrigger>
            </motion.h2>
            <motion.h2
              className={`sm:text-lg text-base font-normal ${
                tab !== "varejo"
                  ? "text-gray-500 bg-white"
                  : "text-yellow-500 bg-[#414141]"
              } w-auto text-center rounded-full px-6  border-1 border-gray-300`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <TabsTrigger
                value="varejo"
                style={{
                  backgroundColor: `${
                    tab === "varejo" ? "#414141" : "#ffffff"
                  }`,
                  color: `${tab === "varejo" ? "#FFBE00" : "#414141"}`,
                }}
              >
                {t("badge2")}
              </TabsTrigger>
            </motion.h2>
          </div>
        </div>
        <div className="border-b-2 border-gray-300 w-full h-full relative z-1"></div>
      </TabsList>
      <TabsContent value="corporativo">
        <div className="w-full h-full max-w-7xl mx-auto flex flex-col items-center justify-center">
          <Carrocel item={itensCorporativo[0]} />
          <div className="flex items-center justify-between w-full">
            <button
              onClick={() => {
                prevSlide(itensCorporativo.length);
              }}
              className="p-2 cursor-pointer flex items-center justify-center gap-2"
            >
              <span className="sm:block hidden">{t("badge3")}</span>
              <ChevronLeft className="md:w-8 md:h-8 w-5 h-5 text-gray-600" />
            </button>

            {/* Indicadores */}
            <div className="flex space-x-2">
              {itensCorporativo.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? "bg-yellow-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => {
                nextSlide(itensCorporativo.length);
              }}
              className="p-2 cursor-pointer flex items-center justify-center gap-2"
            >
              <ChevronRight className="md:w-8 md:h-8 w-5 h-5 text-gray-600" />
              <span className="sm:block hidden">{t("badge4")}</span>
            </button>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="varejo">
        <div className="w-full h-full max-w-7xl mx-auto flex flex-col items-center justify-center">
          <Carrocel item={itensVarejo[0]} />
          <div className="flex items-center justify-between  w-full">
            <button
              onClick={() => {
                prevSlide(itensVarejo.length);
              }}
              className="p-2 cursor-pointer flex items-center justify-center gap-2"
            >
              <span className="sm:block hidden">{t("badge3")}</span>
              <ChevronLeft className="md:w-8 md:h-8 w-5 h-5 text-gray-600" />
            </button>

            {/* Indicadores */}
            <div className="flex space-x-2">
              {itensVarejo.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? "bg-yellow-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => {
                nextSlide(itensVarejo.length);
              }}
              className="p-2 cursor-pointer flex items-center justify-center gap-2"
            >
              <ChevronRight className="md:w-8 md:h-8 w-5 h-5 text-gray-600" />
              <span className="sm:block hidden">{t("badge4")}</span>
            </button>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
