"use client";
import { Link } from "@/i18n/routing";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function NossoValores() {
  const t = useTranslations("values");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2, // 20% da seção visível
    margin: "0px",
  });

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, {
    once: false,
    amount: 0.2, // 20% da seção visível
    margin: "0px",
  });

  // Função para obter a imagem colorida baseada na cor
  const getColoredImage = (color: string) => {
    switch (color) {
      case "blue":
        return "/superhero-1-blue.png";
      case "green":
        return "/teamwork-1-green.png";
      case "orange":
        return "/warning-orange.png";
      case "purple":
        return "/passion-purple.png";
      case "yellow":
        return "/intelligence-quotient-yellow.png";
      default:
        return "/superhero-1.svg";
    }
  };

  const values = [
    {
      title: t("intelligence-quotient.title"),
      description: t("intelligence-quotient.description"),
      img: "/intelligence-quotient.svg",
    },
    {
      title: t("passion.title"),
      description: t("passion.description"),
      img: "/passion.svg",
    },
    {
      title: t("warning.title"),
      description: t("warning.description"),
      img: "/warning.svg",
    },
    {
      title: t("teamwork.title"),
      description: t("teamwork.description"),
      img: "/teamwork.svg",
    },
    {
      title: t("superhero.title"),
      description: t("superhero.description"),
      img: "/superhero.svg",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % values.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + values.length) % values.length);
  };

  // Autoplay effect
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % values.length);
    }, 5000); // Muda slide a cada 5 segundos

    return () => clearInterval(interval);
  }, [isPlaying, values.length]);

  const [activeId, setActiveId] = useState("");
  const [isMobileMode, setIsMobileMode] = useState(false);

  // Reset autoplay quando usuário interage
  useEffect(() => {
    if (activeId) {
      setIsPlaying(false); // Pausar autoplay quando há interação

      // Reiniciar autoplay após 10 segundos de inatividade
      const timeout = setTimeout(() => {
        setIsPlaying(true);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [activeId]);

  // Detectar se estamos no mobile
  useEffect(() => {
    const checkMobile = () => {
      const isMobile = window.innerWidth < 768; // md breakpoint
      setIsMobileMode(isMobile);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Sincronização: currentSlide → activeId (apenas para mobile)
  useEffect(() => {
    if (isMobileMode) {
      const newActiveId = getActiveIdFromSlide(currentSlide);
      setActiveId(newActiveId);
    }
  }, [currentSlide, isMobileMode]);

  // Pausar autoplay quando o usuário interage
  const handleSlideChange = (newSlide: number) => {
    setCurrentSlide(newSlide);
    setIsPlaying(false);

    // Reiniciar autoplay após 10 segundos de inatividade
    setTimeout(() => {
      setIsPlaying(true);
    }, 10000);
  };

  const handleManualNavigation = () => {
    setIsPlaying(false);

    // Reiniciar autoplay após 10 segundos de inatividade
    setTimeout(() => {
      setIsPlaying(true);
    }, 10000);
  };

  // Função de mapeamento: currentSlide → activeId
  const getActiveIdFromSlide = (slide: number) => {
    switch (slide) {
      case 0:
        return "intelligence-quotient-yellow";
      case 1:
        return "passion-purple";
      case 2:
        return "warning-orange";
      case 3:
        return "teamwork-1-green";
      case 4:
        return "superhero-1-blue";
      default:
        return "";
    }
  };

  return (
    <section
      ref={ref}
      className="w-full h-full overflow-hidden px-4 py-20 bg-[#EFEFEF] shadow-2xl"
    >
      <div className="w-full h-full max-w-7xl mx-auto flex  flex-col  items-center justify-center  md:gap-6 sm:gap-2 gap-0">
        <motion.h1
          className="sm:text-4xl text-3xl font-semibold text-gray-800 w-full md:text-left text-center -mb-4 sm:-mb-0"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {t("title")}
        </motion.h1>
        <motion.div
          className="w-full h-full 2xl:max-w-[600px] max-w-[500px] 2xl:min-h-[520px] sm:min-h-[500px] xs:min-h-[420px] xss:min-h-[360px] min-h-[300px] flex items-center justify-center relative md:mt-26"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-full h-full 2xl:max-w-[600px] max-w-[500px] 2xl:min-h-[520px] sm:min-h-[500px] xs:min-h-[420px] xss:min-h-[360px] min-h-[300px] relative  ">
            <Image
              src="/logo-opcion.png"
              alt="Values"
              fill
              className="xs:object-cover object-contain "
            />
            <motion.img
              src={getColoredImage("blue")}
              alt="Values"
              width={80}
              height={80}
              className="object-cover  2xl:max-w-[75px] sm:max-w-[70px] xs:max-w-[50px] xss:max-w-[40px]  max-w-[30px] 2xl:max-h-[75px] sm:max-h-[70px] xs:max-h-[50px] xss:max-h-[40px] max-h-[30px] absolute sm:top-36 top-[32%] 2xl:left-24 sm:left-16 xs:left-[16%] left-[18%] transition-all duration-300 hover:scale-110 cursor-pointer"
              style={{
                filter:
                  activeId === "superhero-1-blue"
                    ? "grayscale(0%) brightness(1.3) saturate(1.5) drop-shadow(0 4px 8px rgba(0,0,0,0.3))"
                    : "grayscale(100%) brightness(0.6) contrast(0.0)",
                zIndex: 10,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter =
                  "grayscale(0%) brightness(1.3) saturate(1.5) drop-shadow(0 4px 8px rgba(0,0,0,0.3))";
                setActiveId("superhero-1-blue");
                setCurrentSlide(4); // Sincronizar com carrossel
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter =
                  "grayscale(100%) brightness(0.6) contrast(0.0)";
                setActiveId("");
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6, delay: 0.4 }}
            />
            <motion.img
              src={getColoredImage("green")}
              alt="Values"
              width={80}
              height={80}
              className="object-cover 2xl:max-w-[75px] sm:max-w-[70px] xs:max-w-[50px] xss:max-w-[40px]  max-w-[30px] 2xl:max-h-[75px] sm:max-h-[70px] xs:max-h-[50px] xss:max-h-[40px] max-h-[30px] absolute 2lx:top-84 sm:top-80 xs:top-70 top-[65%]  xs:left-[16%] left-[20%] 2xl:left-24 transition-all duration-300 hover:scale-110 cursor-pointer"
              style={{
                filter:
                  activeId === "teamwork-1-green"
                    ? "grayscale(0%) brightness(1.3) saturate(1.5) drop-shadow(0 4px 8px rgba(0,0,0,0.3))"
                    : "grayscale(100%) brightness(0.6) contrast(0.0)",
                zIndex: 10,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter =
                  "grayscale(0%) brightness(1.3) saturate(1.5) drop-shadow(0 4px 8px rgba(0,0,0,0.3))";
                setActiveId("teamwork-1-green");
                setCurrentSlide(3); // Sincronizar com carrossel
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter =
                  "grayscale(100%) brightness(0.6) contrast(0.0)";
                setActiveId("");
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6, delay: 0.5 }}
            />
            <motion.img
              src={getColoredImage("orange")}
              alt="Values"
              width={80}
              height={80}
              className="object-cover 2xl:max-w-[75px] sm:max-w-[70px] xs:max-w-[50px] xss:max-w-[40px]  max-w-[30px] 2xl:max-h-[75px] sm:max-h-[70px] xs:max-h-[50px] xss:max-h-[40px] max-h-[30px] absolute 2lx:top-84 sm:top-80 xs:top-70 top-[65%] xs:right-[16%] right-[20%] 2xl:right-24 transition-all duration-300 hover:scale-110 cursor-pointer"
              style={{
                filter:
                  activeId === "warning-orange"
                    ? "grayscale(0%) brightness(1.3) saturate(1.5) drop-shadow(0 4px 8px rgba(0,0,0,0.3))"
                    : "grayscale(100%) brightness(0.6) contrast(0.0)",
                zIndex: 10,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter =
                  "grayscale(0%) brightness(1.3) saturate(1.5) drop-shadow(0 4px 8px rgba(0,0,0,0.3))";
                setActiveId("warning-orange");
                setCurrentSlide(2); // Sincronizar com carrossel
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter =
                  "grayscale(100%) brightness(0.6) contrast(0.0)";
                setActiveId("");
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6, delay: 0.6 }}
            />
            <motion.img
              src={getColoredImage("purple")}
              alt="Values"
              width={80}
              height={80}
              className="object-cover 2xl:max-w-[75px] sm:max-w-[70px] xs:max-w-[50px] xss:max-w-[40px]  max-w-[30px] 2xl:max-h-[75px] sm:max-h-[70px] xs:max-h-[50px] xss:max-h-[40px] max-h-[30px] absolute sm:top-36 top-[32%] 2xl:right-24 sm:right-16 xs:right-[16%] right-[20%] transition-all duration-300 hover:scale-110 cursor-pointer"
              style={{
                filter:
                  activeId === "passion-purple"
                    ? "grayscale(0%) brightness(1.3) saturate(1.5) drop-shadow(0 4px 8px rgba(0,0,0,0.3))"
                    : "grayscale(100%) brightness(0.6) contrast(0.0)",
                zIndex: 10,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter =
                  "grayscale(0%) brightness(1.3) saturate(1.5) drop-shadow(0 4px 8px rgba(0,0,0,0.3))";
                setActiveId("passion-purple");
                setCurrentSlide(1); // Sincronizar com carrossel
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter =
                  "grayscale(100%) brightness(0.6) contrast(0.0)";
                setActiveId("");
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6, delay: 0.7 }}
            />
            <motion.img
              src={getColoredImage("yellow")}
              alt="Values"
              width={80}
              height={80}
              className="object-cover 2xl:max-w-[75px] sm:max-w-[70px] xs:max-w-[50px] xss:max-w-[40px]  max-w-[30px] 2xl:max-h-[75px] sm:max-h-[70px] xs:max-h-[50px] xss:max-h-[40px] max-h-[30px] absolute 2lx:top-14 sm:top-16 xs:top-[12%] top-[16%] 2xl:left-66 sm:left-54 left-[45%] transition-all duration-300 hover:scale-110 cursor-pointer"
              style={{
                filter:
                  activeId === "intelligence-quotient-yellow"
                    ? "grayscale(0%) brightness(1.3) saturate(1.5) drop-shadow(0 4px 8px rgba(0,0,0,0.3))"
                    : "grayscale(100%) brightness(0.6) contrast(0.0)",
                zIndex: 10,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter =
                  "grayscale(0%) brightness(1.3) saturate(1.5) drop-shadow(0 4px 8px rgba(0,0,0,0.3))";
                setActiveId("intelligence-quotient-yellow");
                setCurrentSlide(0); // Sincronizar com carrossel
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter =
                  "grayscale(100%) brightness(0.6) contrast(0.0)";
                setActiveId("");
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6, delay: 0.8 }}
            />
          </div>
          <motion.div
            className={`${
              activeId === "intelligence-quotient-yellow"
                ? "shadow-2xl shadow-yellow-300 bg-white scale-105"
                : ""
            }  hidden md:flex w-full h-auto p-4 rounded-lg transition-all duration-300  items-center justify-center flex-col text-center absolute xl:-top-25 -top-15 left-1/2 -translate-x-1/2 max-w-[400px] gap-4`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            style={{
              boxShadow:
                activeId === "intelligence-quotient-yellow"
                  ? "0 0 10px 0 rgba(255, 215, 0, 0.5)"
                  : "",
            }}
          >
            <h2 className="xl:text-2xl text-xl font-medium">
              {values[0].title}
            </h2>
            <p className="text-gray-500 text-xs xl:text-sm">
              {values[0].description}
            </p>
          </motion.div>
          <motion.div
            className={`${
              activeId === "passion-purple"
                ? "bg-white shadow-2xl shadow-purple-500 scale-105"
                : ""
            } hidden md:flex w-full md:p-4 p-2 rounded-lg h-auto items-center justify-center flex-col text-center absolute top-12 xl:-right-36 lg:-right-30 -right-20 translate-x-1/2 xl:max-w-[350px] lg:max-w-[280px] max-w-[200px]  gap-2 lg:gap-4`}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            style={{
              boxShadow:
                activeId === "passion-purple"
                  ? "0 0 50px 0 rgba(129, 52, 175, 0.5)"
                  : "",
            }}
          >
            <h2 className="text-lg  xl:text-2xl font-medium">
              {values[1].title}
            </h2>
            <p className="text-gray-500 text-xs xl:text-sm">
              {values[1].description}
            </p>
          </motion.div>
          <motion.div
            className={`${
              activeId === "warning-orange"
                ? "bg-white shadow-2xl shadow-yellow-500 scale-105"
                : ""
            } hidden md:flex w-full items-center md:p-4 p-2 rounded-lg justify-center flex-col text-center absolute xl:bottom-4 lg:bottom-10 bottom-2  xl:-right-42 lg:-right-30 -right-20 translate-x-1/2 2xl:max-w-[400px] xl:max-w-[350px] lg:max-w-[300px] max-w-[200px] h-auto gap-2 lg:gap-4`}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            style={{
              boxShadow:
                activeId === "warning-orange"
                  ? "0 0 50px 0 rgba(255, 215, 0, 0.5)"
                  : "",
            }}
          >
            <h2 className="text-lg xl:text-2xl font-medium">
              {values[2].title}
            </h2>
            <p className="text-gray-500 text-xs xl:text-sm">
              {values[2].description}
            </p>
          </motion.div>
          <motion.div
            className={`${
              activeId === "teamwork-1-green"
                ? "bg-white shadow-2xl shadow-green-500 scale-105"
                : ""
            } hidden md:flex w-full h-auto md:p-4 p-2 rounded-lg items-center justify-center flex-col text-center absolute xl:bottom-8 lg:bottom-12 bottom-4  xl:-left-36 lg:-left-30 -left-20 -translate-x-1/2 lg:max-w-[350px] max-w-[200px]   gap-2 lg:gap-4`}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            style={{
              boxShadow:
                activeId === "teamwork-1-green"
                  ? "0 0 50px 0 rgba(16, 185, 129, 0.5)"
                  : "",
            }}
          >
            <h2 className="text-lg xl:text-2xl font-medium">
              {values[3].title}
            </h2>
            <p className="text-gray-500 text-xs xl:text-sm">
              {values[3].description}
            </p>
          </motion.div>
          <motion.div
            className={`${
              activeId === "superhero-1-blue"
                ? "bg-white shadow-2xl shadow-blue-500 scale-105"
                : ""
            } hidden md:flex w-full h-auto md:p-4 p-2 rounded-lg items-center justify-center flex-col text-center absolute lg:top-16 -top-1  xl:-left-46 lg:-left-30 -left-20 -translate-x-1/2 2xl:max-w-[500px] xl:max-w-[430px] lg:max-w-[300px] max-w-[220px] gap-2 lg:gap-4`}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            style={{
              boxShadow:
                activeId === "superhero-1-blue"
                  ? "0 0 50px 0 rgba(59, 130, 246, 0.5)"
                  : "",
            }}
          >
            <h2 className="text-lg xl:text-2xl font-medium">
              {values[4].title}
            </h2>
            <p className="text-gray-500 text-xs xl:text-sm">
              {values[4].description}
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Carrossel para mobile */}
      <motion.div
        className="md:hidden sm:mt-8 mt-0"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="relative max-w-sm mx-auto">
          {/* Card atual */}
          <div
            className={`${
              activeId ? "bg-white scale-105" : "bg-white"
            } rounded-lg shadow-lg sm:p-6 p-4 text-center min-h-[180px] transition-all duration-300`}
            style={{
              boxShadow: (() => {
                let shadow = "";
                if (activeId === "intelligence-quotient-yellow") {
                  shadow = "0 0 10px 0 rgba(255, 215, 0, 0.5)";
                } else if (activeId === "passion-purple") {
                  shadow = "0 0 50px 0 rgba(129, 52, 175, 0.5)";
                } else if (activeId === "warning-orange") {
                  shadow = "0 0 50px 0 rgba(255, 215, 0, 0.5)";
                } else if (activeId === "teamwork-1-green") {
                  shadow = "0 0 50px 0 rgba(16, 185, 129, 0.5)";
                } else if (activeId === "superhero-1-blue") {
                  shadow = "0 0 50px 0 rgba(59, 130, 246, 0.5)";
                }
                return shadow;
              })(),
            }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {values[currentSlide].title}
            </h3>
            <p className="text-gray-600 sm:text-sm text-[12px] leading-relaxed">
              {values[currentSlide].description}
            </p>
          </div>

          {/* Navegação */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={() => {
                prevSlide();
                handleManualNavigation();
              }}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            {/* Indicadores */}
            <div className="flex space-x-2">
              {values.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? "bg-yellow-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => {
                nextSlide();
                handleManualNavigation();
              }}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </motion.div>

      <div
        ref={ref2}
        className="w-full h-full max-w-7xl mx-auto flex flex-col items-center  justify-center  md:gap-6 gap-10 py-20"
      >
        <motion.h1
          className="sm:text-lg text-base font-normal text-gray-500 w-auto text-center rounded-full px-6 py-2 border-1 border-gray-400"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {t("title2")}
        </motion.h1>
        <motion.h2
          className="sm:text-4xl text-2xl font-semibold text-gray-500 w-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {t("subtitle2")}
        </motion.h2>
        <motion.p
          className="text-gray-500 text-sm w-auto text-center max-w-[420px]"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {t("description2")}
        </motion.p>
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-center md:gap-4 gap-15 mt-5">
          <Link
            href={{
              pathname: "/cases",
              query: {
                service: t("seguimento1"),
              },
            }}
            className="w-full h-full flex flex-col items-center justify-center cursor-pointer"
          >
            <motion.h2
              className="text-gray-500 text-lg w-auto mb-2 text-center max-w-[420px]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              {t("seguimento1")}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={
                isInView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
              }
              transition={{ duration: 0.8 }}
              className="w-full h-full flex items-center justify-center lg:min-h-[450px] sm:min-h-[350px] min-h-[300px] min-w-1/2 relative shadow-2xl"
            >
              <Image
                src="/varejo.png"
                alt="Varejo"
                fill
                className="object-cover shadow-2xl md:grayscale-100 grayscale-0  hover:grayscale-0 transition-all duration-300 rounded-xl md:rounded-none"
              />
            </motion.div>
          </Link>
          <Link
            href={{
              pathname: "/cases",
              query: {
                service: t("seguimento2"),
              },
            }}
            className="w-full h-full flex flex-col items-center justify-center cursor-pointer"
          >
            <motion.h2
              className="text-gray-500 text-lg font-semibold w-auto mb-2 text-center max-w-[420px] "
              initial={{ opacity: 0, y: 30 }}
              animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              {t("seguimento2")}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full flex items-center justify-center lg:min-h-[450px] sm:min-h-[350px] min-h-[300px] min-w-1/2 relative shadow-2xl"
            >
              <Image
                src="/corporativo.png"
                alt="Corporativo"
                fill
                className="object-cover shadow-2xl md:grayscale-100 grayscale-0  hover:grayscale-0 transition-all duration-300 rounded-xl md:rounded-none"
              />
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}
