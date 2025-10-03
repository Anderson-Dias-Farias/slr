"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Carrocel from "./Carrocel";

export default function Cases() {
  const searchParams = useSearchParams();
  const company = searchParams.get("company");
  const service = searchParams.get("service");
  const [tab, setTab] = useState("corporativo");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);
  const t = useTranslations("cases-page");
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: false,
    amount: 0.2,
    margin: "0px",
  });

  // Valores traduzidos para comparação
  const corporativoValue = t("badge1").toLowerCase();
  const varejoValue = t("badge2").toLowerCase();

  // Inicializar tab baseada no service traduzido
  useEffect(() => {
    if (service) {
      const serviceLower = service.toLowerCase();
      if (serviceLower === corporativoValue) {
        setTab("corporativo");
      } else if (serviceLower === varejoValue) {
        setTab("varejo");
      }
    }
  }, [service, corporativoValue, varejoValue]);

  const itensCases = Array.from({ length: 23 }, (_, index) => {
    const itemNumber = index + 1;
    return {
      id: `item${itemNumber}`,
      company: t(`itens.item${itemNumber}.company`),
      type: t(`itens.item${itemNumber}.type`),
      description: t(`itens.item${itemNumber}.description`),
      img: {
        img: t(`itens.item${itemNumber}.img.img`),
        img2: t(`itens.item${itemNumber}.img.img2`),
        img3: t(`itens.item${itemNumber}.img.img3`),
      },
      logo: t(`itens.item${itemNumber}.logo`),
      list: {
        localizacao: {
          title: t(`itens.item${itemNumber}.list.localizacao.title`),
          description: t(
            `itens.item${itemNumber}.list.localizacao.description`
          ),
        },
        frente: {
          title: t(`itens.item${itemNumber}.list.frente.title`),
          description: t(`itens.item${itemNumber}.list.frente.description`),
        },
        nicho: {
          title: t(`itens.item${itemNumber}.list.nicho.title`),
          description: t(`itens.item${itemNumber}.list.nicho.description`),
        },
        area: {
          title: t(`itens.item${itemNumber}.list.area.title`),
          description: t(`itens.item${itemNumber}.list.area.description`),
        },
      },
    };
  });

  const itensCorporativo = itensCases.filter(
    (item) => item.type === t("badge1")
  );
  const itensVarejo = itensCases.filter((item) => item.type === t("badge2"));

  const scrollToTop = () => {
    const isMobile = window.innerWidth < 768;
    const scrollPosition = isMobile ? 40 : 150;
    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
  };

  const nextSlide = (values: number) => {
    console.log(
      "nextSlide chamado, values:",
      values,
      "currentSlide:",
      currentSlide
    );
    setCurrentSlide((prev) => {
      const newSlide = (prev + 1) % values;
      console.log("nextSlide: prev =", prev, "newSlide =", newSlide);
      return newSlide;
    });
    scrollToTop();
  };

  const prevSlide = (values: number) => {
    console.log(
      "prevSlide chamado, values:",
      values,
      "currentSlide:",
      currentSlide
    );
    setCurrentSlide((prev) => {
      const newSlide = (prev - 1 + values) % values;
      console.log("prevSlide: prev =", prev, "newSlide =", newSlide);
      return newSlide;
    });
    scrollToTop();
  };

  // Arrays completos para navegação
  const currentCorporativo = itensCorporativo;
  const currentVarejo = itensVarejo;

  // Inicializar apenas uma vez quando company muda
  useEffect(() => {
    if (company && !isInitialized) {
      // Procurar a empresa em todos os itens
      const foundItem = itensCases.find((item) => {
        const normalizedCompany = item.company
          .toLowerCase()
          .replace(/\s+/g, "-");
        const normalizedParam = company.toLowerCase();
        return normalizedCompany === normalizedParam;
      });

      if (foundItem) {
        // Encontrar o índice no array da tab correta
        const targetTab =
          foundItem.type === t("badge1") ? "corporativo" : "varejo";
        const targetArray =
          targetTab === "corporativo" ? currentCorporativo : currentVarejo;
        const foundIndex = targetArray.findIndex(
          (item) => item.id === foundItem.id
        );
        if (foundIndex !== -1) {
          setCurrentSlide(foundIndex);
          setTab(targetTab);
        }
      }
      setIsInitialized(true);
    }
  }, [
    company,
    isInitialized,
    itensCases,
    currentCorporativo,
    currentVarejo,
    t,
  ]);

  return (
    <Tabs
      value={tab}
      onValueChange={(value) => {
        setTab(value);
        setCurrentSlide(0);
        scrollToTop();
      }}
      className="bg-white pb-20"
    >
      <TabsList
        ref={ref}
        className="w-full h-full  md:py-20 py-00 flex flex-col gap-2 bg-white overflow-hidden items-center justify-center"
      >
        <div className="w-full h-full max-w-7xl mx-auto flex  gap-10 items-center justify-between pt-20 pb-2 px-4 md:mt-20 mt-10">
          <motion.h1
            className="md:text-6xl sm:text-4xl text-2xl font-semibold text-gray-800 w-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            {t("title")}
          </motion.h1>
          <div className="flex  gap-4">
            <motion.h2
              className={`md:text-lg sm:text-base text-sm font-normal ${
                tab !== "corporativo"
                  ? "text-gray-500 bg-white"
                  : "text-yellow-500 bg-[#414141]"
              } w-auto text-center rounded-full md:px-6 sm:px-4 px-2  border-1 border-gray-300`}
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
                className="md:text-lg sm:text-base text-sm font-normal"
              >
                <span className="md:text-lg sm:text-base text-[12px]  font-normal">
                  {t("badge1")}
                </span>
              </TabsTrigger>
            </motion.h2>
            <motion.h2
              className={`md:text-lg sm:text-base text-sm font-normal ${
                tab !== "varejo"
                  ? "text-gray-500 bg-white"
                  : "text-yellow-500 bg-[#414141]"
              } w-auto text-center rounded-full md:px-6 sm:px-4 px-2  border-1 border-gray-300`}
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
                <span className="md:text-lg sm:text-base text-[12px]  font-normal">
                  {t("badge2")}
                </span>
              </TabsTrigger>
            </motion.h2>
          </div>
        </div>
        <div className="border-b-2 border-gray-300 w-full h-full relative z-1 mb-6 md:mb-0"></div>
      </TabsList>
      <TabsContent value="corporativo">
        <div className="w-full h-full max-w-7xl mx-auto flex flex-col items-center justify-center">
          <Carrocel item={currentCorporativo[currentSlide]} />
          <div className="flex items-center justify-between w-full px-4">
            <button
              onClick={() => {
                prevSlide(currentCorporativo.length);
              }}
              className="p-2 cursor-pointer flex items-center justify-center gap-2"
            >
              <span className="sm:block hidden">{t("badge3")}</span>
              <ChevronLeft className="md:w-8 md:h-8 w-5 h-5 text-gray-600" />
            </button>

            {/* Indicadores */}
            <div className="flex space-x-2">
              {currentCorporativo.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    scrollToTop();
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? "bg-yellow-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => {
                nextSlide(currentCorporativo.length);
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
          <Carrocel item={currentVarejo[currentSlide]} />
          <div className="flex items-center justify-between w-full px-4">
            <button
              onClick={() => {
                prevSlide(currentVarejo.length);
              }}
              className="p-2 cursor-pointer flex items-center justify-center gap-2"
            >
              <span className="sm:block hidden">{t("badge3")}</span>
              <ChevronLeft className="md:w-8 md:h-8 w-5 h-5 text-gray-600" />
            </button>

            {/* Indicadores */}
            <div className="flex space-x-2">
              {currentVarejo.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    scrollToTop();
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? "bg-yellow-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => {
                nextSlide(currentVarejo.length);
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
