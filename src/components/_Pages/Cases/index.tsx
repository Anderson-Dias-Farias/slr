"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Carrocel from "./Carrocel";

export default function Cases() {
  const searchParams = useSearchParams();
  const company = searchParams.get("company");
  const service = searchParams.get("service");
  const [tab, setTab] = useState("corporativo");
  const [currentSlide, setCurrentSlide] = useState(0);
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
    {
      company: t("itens.item2.company"),
      logo: t("itens.item2.logo"),
      type: t("itens.item2.type"),
      description: t("itens.item2.description"),
      img: {
        img: t("itens.item2.img.img"),
        img2: t("itens.item2.img.img2"),
        img3: t("itens.item2.img.img3"),
      },
      list: {
        localizacao: {
          title: t("itens.item2.list.localizacao.title"),
          description: t("itens.item2.list.localizacao.description"),
        },
        frente: {
          title: "Frente",
          description: t("itens.item2.list.frente.description"),
        },
        nicho: {
          title: "Nicho",
          description: t("itens.item2.list.nicho.description"),
        },
      },
    },
    {
      company: t("itens.item3.company"),
      logo: t("itens.item3.logo"),
      type: t("itens.item3.type"),
      description: t("itens.item3.description"),
      img: {
        img: t("itens.item3.img.img"),
        img2: t("itens.item3.img.img2"),
        img3: t("itens.item3.img.img3"),
      },
      list: {
        localizacao: {
          title: t("itens.item3.list.localizacao.title"),
          description: t("itens.item3.list.localizacao.description"),
        },
        frente: {
          title: "Frente",
          description: t("itens.item3.list.frente.description"),
        },
        nicho: {
          title: "Nicho",
          description: t("itens.item3.list.nicho.description"),
        },
      },
    },
    {
      company: t("itens.item4.company"),
      logo: t("itens.item4.logo"),
      type: t("itens.item4.type"),
      description: t("itens.item4.description"),
      img: {
        img: t("itens.item4.img.img"),
        img2: t("itens.item4.img.img2"),
        img3: t("itens.item4.img.img3"),
      },
      list: {
        localizacao: {
          title: t("itens.item4.list.localizacao.title"),
          description: t("itens.item4.list.localizacao.description"),
        },
        frente: {
          title: "Frente",
          description: t("itens.item4.list.frente.description"),
        },
        nicho: {
          title: "Nicho",
          description: t("itens.item4.list.nicho.description"),
        },
      },
    },
    {
      company: t("itens.item5.company"),
      logo: t("itens.item5.logo"),
      type: t("itens.item5.type"),
      description: t("itens.item5.description"),
      img: {
        img: t("itens.item5.img.img"),
        img2: t("itens.item5.img.img2"),
        img3: t("itens.item5.img.img3"),
      },
      list: {
        localizacao: {
          title: t("itens.item5.list.localizacao.title"),
          description: t("itens.item5.list.localizacao.description"),
        },
        frente: {
          title: "Frente",
          description: t("itens.item5.list.frente.description"),
        },
        nicho: {
          title: "Nicho",
          description: t("itens.item5.list.nicho.description"),
        },
      },
    },
    {
      company: t("itens.item6.company"),
      logo: t("itens.item6.logo"),
      type: t("itens.item6.type"),
      description: t("itens.item6.description"),
      img: {
        img: t("itens.item6.img.img"),
        img2: t("itens.item6.img.img2"),
        img3: t("itens.item6.img.img3"),
      },
      list: {
        localizacao: {
          title: t("itens.item6.list.localizacao.title"),
          description: t("itens.item6.list.localizacao.description"),
        },
        frente: {
          title: "Frente",
          description: t("itens.item6.list.frente.description"),
        },
        nicho: {
          title: "Nicho",
          description: t("itens.item6.list.nicho.description"),
        },
      },
    },
    {
      company: t("itens.item7.company"),
      logo: t("itens.item7.logo"),
      type: t("itens.item7.type"),
      description: t("itens.item7.description"),
      img: {
        img: t("itens.item7.img.img"),
        img2: t("itens.item7.img.img2"),
        img3: t("itens.item7.img.img3"),
      },
      list: {
        localizacao: {
          title: t("itens.item7.list.localizacao.title"),
          description: t("itens.item7.list.localizacao.description"),
        },
        frente: {
          title: "Frente",
          description: t("itens.item7.list.frente.description"),
        },
        nicho: {
          title: "Nicho",
          description: t("itens.item7.list.nicho.description"),
        },
      },
    },
    {
      company: t("itens.item8.company"),
      logo: t("itens.item8.logo"),
      type: t("itens.item8.type"),
      description: t("itens.item8.description"),
      img: {
        img: t("itens.item8.img.img"),
        img2: t("itens.item8.img.img2"),
        img3: t("itens.item8.img.img3"),
      },
      list: {
        localizacao: {
          title: t("itens.item8.list.localizacao.title"),
          description: t("itens.item8.list.localizacao.description"),
        },
        frente: {
          title: "Frente",
          description: t("itens.item8.list.frente.description"),
        },
        nicho: {
          title: "Nicho",
          description: t("itens.item8.list.nicho.description"),
        },
      },
    },
    {
      company: t("itens.item9.company"),
      logo: t("itens.item9.logo"),
      type: t("itens.item9.type"),
      description: t("itens.item9.description"),
      img: {
        img: t("itens.item9.img.img"),
        img2: t("itens.item9.img.img2"),
        img3: t("itens.item9.img.img3"),
      },
      list: {
        localizacao: {
          title: t("itens.item9.list.localizacao.title"),
          description: t("itens.item9.list.localizacao.description"),
        },
        frente: {
          title: "Frente",
          description: t("itens.item9.list.frente.description"),
        },
        nicho: {
          title: "Nicho",
          description: t("itens.item9.list.nicho.description"),
        },
      },
    },
    {
      company: t("itens.item10.company"),
      logo: t("itens.item10.logo"),
      type: t("itens.item10.type"),
      description: t("itens.item10.description"),
      img: {
        img: t("itens.item10.img.img"),
        img2: t("itens.item10.img.img2"),
        img3: t("itens.item10.img.img3"),
      },
      list: {
        localizacao: {
          title: t("itens.item10.list.localizacao.title"),
          description: t("itens.item10.list.localizacao.description"),
        },
        frente: {
          title: "Frente",
          description: t("itens.item10.list.frente.description"),
        },
        nicho: {
          title: "Nicho",
          description: t("itens.item10.list.nicho.description"),
        },
      },
    },
    {
      company: t("itens.item11.company"),
      logo: t("itens.item11.logo"),
      type: t("itens.item11.type"),
      description: t("itens.item11.description"),
      img: {
        img: t("itens.item11.img.img"),
        img2: t("itens.item11.img.img2"),
        img3: t("itens.item11.img.img3"),
      },
      list: {
        localizacao: {
          title: t("itens.item11.list.localizacao.title"),
          description: t("itens.item11.list.localizacao.description"),
        },
        frente: {
          title: "Frente",
          description: t("itens.item11.list.frente.description"),
        },
        nicho: {
          title: "Nicho",
          description: t("itens.item11.list.nicho.description"),
        },
      },
    },
    {
      company: t("itens.item12.company"),
      logo: t("itens.item12.logo"),
      type: t("itens.item12.type"),
      description: t("itens.item12.description"),
      img: {
        img: t("itens.item12.img.img"),
        img2: t("itens.item12.img.img2"),
        img3: t("itens.item12.img.img3"),
      },
      list: {
        localizacao: {
          title: t("itens.item12.list.localizacao.title"),
          description: t("itens.item12.list.localizacao.description"),
        },
        frente: {
          title: "Frente",
          description: t("itens.item12.list.frente.description"),
        },
        nicho: {
          title: "Nicho",
          description: t("itens.item12.list.nicho.description"),
        },
      },
    },
    {
      company: t("itens.item13.company"),
      logo: t("itens.item13.logo"),
      type: t("itens.item13.type"),
      description: t("itens.item13.description"),
      img: {
        img: t("itens.item13.img.img"),
        img2: t("itens.item13.img.img2"),
        img3: t("itens.item13.img.img3"),
      },
      list: {
        localizacao: {
          title: t("itens.item13.list.localizacao.title"),
          description: t("itens.item13.list.localizacao.description"),
        },
        frente: {
          title: "Frente",
          description: t("itens.item13.list.frente.description"),
        },
        nicho: {
          title: "Nicho",
          description: t("itens.item13.list.nicho.description"),
        },
      },
    },
    {
      company: t("itens.item14.company"),
      logo: t("itens.item14.logo"),
      type: t("itens.item14.type"),
      description: t("itens.item14.description"),
      img: {
        img: t("itens.item14.img.img"),
        img2: t("itens.item14.img.img2"),
        img3: t("itens.item14.img.img3"),
      },
      list: {
        localizacao: {
          title: t("itens.item14.list.localizacao.title"),
          description: t("itens.item14.list.localizacao.description"),
        },
        frente: {
          title: "Frente",
          description: t("itens.item14.list.frente.description"),
        },
        nicho: {
          title: "Nicho",
          description: t("itens.item14.list.nicho.description"),
        },
      },
    },
    {
      company: t("itens.item15.company"),
      logo: t("itens.item15.logo"),
      type: t("itens.item15.type"),
      description: t("itens.item15.description"),
      img: {
        img: t("itens.item15.img.img"),
        img2: t("itens.item15.img.img2"),
        img3: t("itens.item15.img.img3"),
      },
      list: {
        localizacao: {
          title: t("itens.item15.list.localizacao.title"),
          description: t("itens.item15.list.localizacao.description"),
        },
        frente: {
          title: "Frente",
          description: t("itens.item15.list.frente.description"),
        },
        nicho: {
          title: "Nicho",
          description: t("itens.item15.list.nicho.description"),
        },
      },
    },
    {
      company: t("itens.item16.company"),
      logo: t("itens.item16.logo"),
      type: t("itens.item16.type"),
      description: t("itens.item16.description"),
      img: {
        img: t("itens.item16.img.img"),
        img2: t("itens.item16.img.img2"),
        img3: t("itens.item16.img.img3"),
      },
      list: {
        localizacao: {
          title: t("itens.item16.list.localizacao.title"),
          description: t("itens.item16.list.localizacao.description"),
        },
        frente: {
          title: "Frente",
          description: t("itens.item16.list.frente.description"),
        },
        nicho: {
          title: "Nicho",
          description: t("itens.item16.list.nicho.description"),
        },
      },
    },
  ];

  const itensVarejo = [
    {
      company: t("itens.item17.company"),
      logo: t("itens.item17.logo"),
      type: t("itens.item17.type"),
      description: t("itens.item17.description"),
      img: {
        img: t("itens.item17.img.img"),
        img2: t("itens.item17.img.img2"),
        img3: t("itens.item17.img.img3"),
      },
      list: {
        localizacao: {
          title: t("itens.item17.list.localizacao.title"),
          description: t("itens.item17.list.localizacao.description"),
        },
        frente: {
          title: "Frente",
          description: t("itens.item17.list.frente.description"),
        },
        nicho: {
          title: "Nicho",
          description: t("itens.item17.list.nicho.description"),
        },
      },
    },
    {
      company: t("itens.item18.company"),
      logo: t("itens.item18.logo"),
      type: t("itens.item18.type"),
      description: t("itens.item18.description"),
      img: {
        img: t("itens.item18.img.img"),
        img2: t("itens.item18.img.img2"),
        img3: t("itens.item18.img.img3"),
      },
      list: {
        localizacao: {
          title: t("itens.item18.list.localizacao.title"),
          description: t("itens.item18.list.localizacao.description"),
        },
        frente: {
          title: "Frente",
          description: t("itens.item18.list.frente.description"),
        },
        nicho: {
          title: "Nicho",
          description: t("itens.item18.list.nicho.description"),
        },
      },
    },
    {
      company: t("itens.item19.company"),
      logo: t("itens.item19.logo"),
      type: t("itens.item19.type"),
      description: t("itens.item19.description"),
      img: {
        img: t("itens.item19.img.img"),
        img2: t("itens.item19.img.img2"),
        img3: t("itens.item19.img.img3"),
      },
      list: {
        localizacao: {
          title: t("itens.item19.list.localizacao.title"),
          description: t("itens.item19.list.localizacao.description"),
        },
        frente: {
          title: "Frente",
          description: t("itens.item19.list.frente.description"),
        },
        nicho: {
          title: "Nicho",
          description: t("itens.item19.list.nicho.description"),
        },
      },
    },
    {
      company: t("itens.item20.company"),
      logo: t("itens.item20.logo"),
      type: t("itens.item20.type"),
      description: t("itens.item20.description"),
      img: {
        img: t("itens.item20.img.img"),
        img2: t("itens.item20.img.img2"),
        img3: t("itens.item20.img.img3"),
      },
      list: {
        localizacao: {
          title: t("itens.item20.list.localizacao.title"),
          description: t("itens.item20.list.localizacao.description"),
        },
        frente: {
          title: "Frente",
          description: t("itens.item20.list.frente.description"),
        },
        nicho: {
          title: "Nicho",
          description: t("itens.item20.list.nicho.description"),
        },
      },
    },
    {
      company: t("itens.item21.company"),
      logo: t("itens.item21.logo"),
      type: t("itens.item21.type"),
      description: t("itens.item21.description"),
      img: {
        img: t("itens.item21.img.img"),
        img2: t("itens.item21.img.img2"),
        img3: t("itens.item21.img.img3"),
      },
      list: {
        localizacao: {
          title: t("itens.item21.list.localizacao.title"),
          description: t("itens.item21.list.localizacao.description"),
        },
        frente: {
          title: "Frente",
          description: t("itens.item21.list.frente.description"),
        },
        nicho: {
          title: "Nicho",
          description: t("itens.item21.list.nicho.description"),
        },
      },
    },
    {
      company: t("itens.item22.company"),
      logo: t("itens.item22.logo"),
      type: t("itens.item22.type"),
      description: t("itens.item22.description"),
      img: {
        img: t("itens.item22.img.img"),
        img2: t("itens.item22.img.img2"),
        img3: t("itens.item22.img.img3"),
      },
      list: {
        localizacao: {
          title: t("itens.item22.list.localizacao.title"),
          description: t("itens.item22.list.localizacao.description"),
        },
        frente: {
          title: "Frente",
          description: t("itens.item22.list.frente.description"),
        },
        nicho: {
          title: "Nicho",
          description: t("itens.item22.list.nicho.description"),
        },
      },
    },
    {
      company: t("itens.item23.company"),
      logo: t("itens.item23.logo"),
      type: t("itens.item23.type"),
      description: t("itens.item23.description"),
      img: {
        img: t("itens.item23.img.img"),
        img2: t("itens.item23.img.img2"),
        img3: t("itens.item23.img.img3"),
      },
      list: {
        localizacao: {
          title: t("itens.item23.list.localizacao.title"),
          description: t("itens.item23.list.localizacao.description"),
        },
        frente: {
          title: "Frente",
          description: t("itens.item23.list.frente.description"),
        },
        nicho: {
          title: "Nicho",
          description: t("itens.item23.list.nicho.description"),
        },
      },
    },
  ];
  const scrollToTop = () => {
    const isMobile = window.innerWidth < 768;
    const scrollPosition = isMobile ? 100 : 250;
    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
  };

  const nextSlide = (values: number) => {
    setCurrentSlide((prev) => (prev + 1) % values);
    scrollToTop();
  };

  const prevSlide = (values: number) => {
    setCurrentSlide((prev) => (prev - 1 + values) % values);
    scrollToTop();
  };
  const pathname = usePathname();

  // Filtrar casos baseado na company se fornecida
  const filteredCorporativo = company
    ? itensCorporativo.filter(
        (item) =>
          item.company.toLowerCase().replace(/\s+/g, "-") ===
          company.toLowerCase()
      )
    : itensCorporativo;

  const filteredVarejo = company
    ? itensVarejo.filter(
        (item) =>
          item.company.toLowerCase().replace(/\s+/g, "-") ===
          company.toLowerCase()
      )
    : itensVarejo;

  // Usar os arrays filtrados
  const currentCorporativo =
    filteredCorporativo.length > 0 ? filteredCorporativo : itensCorporativo;
  const currentVarejo =
    filteredVarejo.length > 0 ? filteredVarejo : itensVarejo;

  // Ajustar slide inicial se uma empresa específica foi encontrada
  useEffect(() => {
    if (company) {
      const currentArray =
        tab === "corporativo" ? currentCorporativo : currentVarejo;
      const foundIndex = currentArray.findIndex(
        (item) =>
          item.company.toLowerCase().replace(/\s+/g, "-") ===
          company.toLowerCase()
      );
      if (foundIndex !== -1) {
        setCurrentSlide(foundIndex);
      }
    }
  }, [company, tab, currentCorporativo, currentVarejo]);

  console.log(pathname, { company, service });

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
