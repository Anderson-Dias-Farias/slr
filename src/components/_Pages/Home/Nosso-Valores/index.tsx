"use client";
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
    }, 5000); // Muda slide a cada 3 segundos

    return () => clearInterval(interval);
  }, [isPlaying, values.length]);

  // Pausar autoplay quando o usuário interage
  const handleSlideChange = (newSlide: number) => {
    setCurrentSlide(newSlide);
    setIsPlaying(false);
  };

  const handleManualNavigation = () => {
    setIsPlaying(false);
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
              src="/superhero 1.svg"
              alt="Values"
              width={80}
              height={80}
              className="object-cover 2xl:max-w-[75px] sm:max-w-[70px] xs:max-w-[50px] xss:max-w-[40px]  max-w-[30px] 2xl:max-h-[75px] sm:max-h-[70px] xs:max-h-[50px] xss:max-h-[40px] max-h-[30px] absolute sm:top-36 top-[32%] 2xl:left-24 sm:left-16 xs:left-[16%] left-[18%] transition-all duration-500 hover:scale-110"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6, delay: 0.4 }}
            />
            <motion.img
              src="/teamwork 1.svg"
              alt="Values"
              width={80}
              height={80}
              className="object-cover 2xl:max-w-[75px] sm:max-w-[70px] xs:max-w-[50px] xss:max-w-[40px]  max-w-[30px] 2xl:max-h-[75px] sm:max-h-[70px] xs:max-h-[50px] xss:max-h-[40px] max-h-[30px] absolute 2lx:top-84 sm:top-80 xs:top-70 top-[65%]  xs:left-[16%] left-[20%] 2xl:left-24 transition-all duration-500 hover:scale-110"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6, delay: 0.5 }}
            />
            <motion.img
              src="/warning.svg"
              alt="Values"
              width={80}
              height={80}
              className="object-cover 2xl:max-w-[75px] sm:max-w-[70px] xs:max-w-[50px] xss:max-w-[40px]  max-w-[30px] 2xl:max-h-[75px] sm:max-h-[70px] xs:max-h-[50px] xss:max-h-[40px] max-h-[30px] absolute 2lx:top-84 sm:top-80 xs:top-70 top-[65%] xs:right-[16%] right-[20%] 2xl:right-24  transition-all duration-500 hover:scale-110"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6, delay: 0.6 }}
            />
            <motion.img
              src="/passion.svg"
              alt="Values"
              width={80}
              height={80}
              className="object-cover 2xl:max-w-[75px] sm:max-w-[70px] xs:max-w-[50px] xss:max-w-[40px]  max-w-[30px] 2xl:max-h-[75px] sm:max-h-[70px] xs:max-h-[50px] xss:max-h-[40px] max-h-[30px] absolute sm:top-36 top-[32%] 2xl:right-24 sm:right-16 xs:right-[16%] right-[20%] transition-all duration-500 hover:scale-110"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6, delay: 0.7 }}
            />
            <motion.img
              src="/intelligence-quotient.svg"
              alt="Values"
              width={80}
              height={80}
              className="object-cover 2xl:max-w-[75px] sm:max-w-[70px] xs:max-w-[50px] xss:max-w-[40px]  max-w-[30px] 2xl:max-h-[75px] sm:max-h-[70px] xs:max-h-[50px] xss:max-h-[40px] max-h-[30px] absolute 2lx:top-14 sm:top-16 xs:top-[12%] top-[16%] 2xl:left-66 sm:left-54 left-[45%] transition-all duration-500 hover:scale-110"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6, delay: 0.8 }}
            />
          </div>
          <motion.div
            className="hidden md:flex w-full h-full  items-center justify-center flex-col text-center absolute 2xl:-top-75 -top-70 left-1/2 -translate-x-1/2 max-w-[350px] gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <h2 className="xl:text-2xl text-xl font-medium">
              {values[0].title}
            </h2>
            <p className="text-gray-500 text-xs xl:text-sm">
              {values[0].description}
            </p>
          </motion.div>
          <motion.div
            className="hidden md:flex w-full h-auto items-center justify-center flex-col text-center absolute top-12 xl:-right-36 lg:-right-30 -right-20 translate-x-1/2 xl:max-w-[320px] lg:max-w-[280px] max-w-[200px]  gap-2 lg:gap-4"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h2 className="text-lg  xl:text-2xl font-medium">
              {values[1].title}
            </h2>
            <p className="text-gray-500 text-xs xl:text-sm">
              {values[1].description}
            </p>
          </motion.div>
          <motion.div
            className="hidden md:flex w-full items-center justify-center flex-col text-center absolute lg:bottom-16 bottom-10  xl:-right-42 lg:-right-30 -right-20 translate-x-1/2 xl:max-w-[360px] lg:max-w-[300px] max-w-[200px] h-auto gap-2 lg:gap-4"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <h2 className="text-lg xl:text-2xl font-medium">
              {values[2].title}
            </h2>
            <p className="text-gray-500 text-xs xl:text-sm">
              {values[2].description}
            </p>
          </motion.div>
          <motion.div
            className="hidden md:flex w-full h-auto items-center justify-center flex-col text-center absolute lg:bottom-12 bottom-10  xl:-left-36 lg:-left-30 -left-20 -translate-x-1/2 lg:max-w-[280px] max-w-[200px]   gap-2 lg:gap-4"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h2 className="text-lg xl:text-2xl font-medium">
              {values[3].title}
            </h2>
            <p className="text-gray-500 text-xs xl:text-sm">
              {values[3].description}
            </p>
          </motion.div>
          <motion.div
            className="hidden md:flex w-full h-auto items-center justify-center flex-col text-center absolute lg:top-16 top-10  xl:-left-46 lg:-left-30 -left-20 -translate-x-1/2 xl:max-w-[430px] lg:max-w-[300px] max-w-[200px] gap-2 lg:gap-4"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 1.3 }}
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
          <div className="bg-white rounded-lg shadow-lg p-6 text-center min-h-[250px]">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {values[currentSlide].title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
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
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-center md:gap-4 gap-15">
          <div className="w-full h-full flex flex-col items-center justify-center">
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
              className="w-full h-full flex items-center justify-center lg:min-h-[300px] sm:min-h-[250px] min-h-[200px] min-w-1/2 relative shadow-2xl"
            >
              <Image
                src="/varejo.png"
                alt="Varejo"
                fill
                className="object-cover shadow-2xl grayscale-100 opacity-90 rounded-xl md:rounded-none"
              />
            </motion.div>
          </div>
          <div className="w-full h-full flex flex-col items-center justify-center">
            <motion.h2
              className="text-gray-500 text-lg font-semibold w-auto mb-2 text-center max-w-[420px]"
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
              className="w-full h-full flex items-center justify-center lg:min-h-[300px] sm:min-h-[250px] min-h-[200px] min-w-1/2 relative shadow-2xl"
            >
              <Image
                src="/corporativo.png"
                alt="Corporativo"
                fill
                className="object-cover shadow-2xl grayscale-100 opacity-60 rounded-xl md:rounded-none"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
