"use client";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Cases() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = useTranslations("cases");
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2, // 20% da seção visível
    margin: "0px",
  });

  const cases = [
    {
      title: t("case1.title"),
      description: t("case1.description"),
      description2: t("case1.description2"),
      img: t("case1.img"),
    },
    {
      title: t("case2.title"),
      description: t("case2.description"),
      description2: t("case2.description2"),
      img: t("case2.img"),
    },
  ];

  const logo = [
    {
      title: "V4 Company",
      img: "/v4-logo.png",
    },
    {
      title: "Levis",
      img: "/levis-logo.png",
    },
    {
      title: "EuroFarma",
      img: "/euro-logo.png",
    },
    {
      title: "Iplace",
      img: "/iplace-logo.png",
    },
    {
      title: "hm",
      img: "/hm-logo.png",
    },
    {
      title: "Tegra",
      img: "/tegra-logo.png",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cases.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cases.length) % cases.length);
  };

  return (
    <section ref={ref} className="w-full h-full overflow-hidden px-4  ">
      <div className="w-full h-full max-w-7xl mx-auto flex items-center justify-center relative md:min-h-[700px]  min-h-[600px] mb-10 md:mb-0  ">
        <div className="w-full h-full flex flex-col items-start justify-center gap-6 max-w-[600px] lg:mt-0 mt-10 sm:py-20  absolute top-0 left-0 z-10 ">
          <motion.h1
            className="sm:text-lg text-base font-normal text-gray-500 w-auto text-center rounded-full px-6 py-2 border-1 border-gray-400 "
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            {t("title")}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="sm:text-5xl text-3xl font-normal text-gray-500 lg:max-w-[550px] sm:max-w-[450px] xs:max-w-[400px]    max-w-[250px]  "
          >
            {t("subtitle")}{" "}
            <span className="text-gray-800">{t("subtitle2")}</span>
          </motion.h2>
          <motion.p
            className="text-gray-800 md:text-base text-sm text-justify lg:max-w-[550px] sm:max-w-[400px] xs:max-w-[350px] mt-10 xs:mt-20 sm:mt-0 bg-white sm:bg-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            {t("description")}
          </motion.p>
          <Link
            href="/cases"
            className="text-black uppercase rounded-full px-4 py-2 border-1  bg-[#FFBE00] hover:bg-yellow-700 transition-all duration-300 font-semibold w-full text-center sm:max-w-[440px]"
          >
            {t("cta")}
          </Link>
        </div>
        <div className="w-full h-full md:max-w-[700px] max-w-[500px] md:min-h-[700px] sm:max-h-[500px] xs:max-h-[450px] max-h-[360px] min-h-[200px] lg:min-w-1/2  absolute top-0 bottom-0  right-0 ">
          <Image
            src="/map-location.png"
            alt="Map Location"
            fill
            className="sm:object-cover object-contain  scale-100  sm:scale-110  object-top   md:scale-100 translate-x-[20%] md:translate-x-0 "
          />
        </div>
      </div>
      <div className="w-full h-full max-w-7xl mx-auto flex flex-col items-center justify-center bg-[#EFEFEF] shadow-2xl ">
        <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center">
          <motion.div
            key={`image-${currentSlide}`}
            className="w-full h-full lg:max-w-1/2 max-w-full relative lg:min-h-[640px] md:min-h-[450px] sm:min-h-[400px] xs:min-h-[350px] min-h-[300px] "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={cases[currentSlide].img}
              alt={cases[currentSlide].title}
              fill
              className="object-cover grayscale-100 rounded-lg lg:rounded-none"
            />
          </motion.div>
          <div className="w-full h-full  flex lg:hidden flex-col  items-start justify-start max-w-7xl mx-auto">
            {/* Navegação */}
            <div className="flex items-center justify-between mt-6  w-full ">
              <button
                onClick={() => {
                  prevSlide();
                }}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>

              {/* Indicadores */}
              <div className="flex space-x-2">
                {cases.map((_, index) => (
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
                  nextSlide();
                }}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-600 font-bold" />
              </button>
            </div>
          </div>
          <div className="w-full h-full flex flex-col items-start justify-center py-10 lg:gap-8 gap-4 lg:px-16 px-4 lg:max-w-1/2 max-w-full">
            <h2 className="lg:text-4xl sm:text-3xl text-2xl font-normal text-gray-500 mb-4 lg:max-w-md max-w-full">
              {t("title2")}
            </h2>
            <motion.p
              key={`description-${currentSlide}`}
              className="text-gray-600 text-justify lg:max-w-md max-w-full sm:text-base text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              dangerouslySetInnerHTML={{
                __html: cases[currentSlide].description.replace(
                  cases[currentSlide].title,
                  `<span class="font-bold text-black">${cases[currentSlide].title}</span>`
                ),
              }}
            />
            <motion.p
              key={`description2-${currentSlide}`}
              className="text-gray-600 text-justify mt-2 sm:text-base text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              dangerouslySetInnerHTML={{
                __html: cases[currentSlide].description2.replace(
                  cases[currentSlide].title,
                  `<span class="font-bold text-black">${cases[currentSlide].title}</span>`
                ),
              }}
            />

            <Link
              href="/cases"
              className="bg-[#2C2C2C] w-full mx-auto text-yellow-500 hover:text-yellow-600 transition-all duration-300 mt-2 px-4 py-4 rounded-full   uppercase text-center lg:text-base md:text-sm text-xs "
            >
              {t("cta2")}
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-full  lg:flex hidden  items-start justify-start max-w-7xl mx-auto">
        {/* Navegação */}
        <div className="flex items-center justify-between mt-6 max-w-1/2 w-full ">
          <button
            onClick={() => {
              prevSlide();
            }}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          {/* Indicadores */}
          <div className="flex space-x-2">
            {cases.map((_, index) => (
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
              nextSlide();
            }}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 font-bold" />
          </button>
        </div>
      </div>
      <div className="w-full h-full max-w-7xl mx-auto grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 py-10">
        {logo.map((item, index) => (
          <Link
            key={index}
            href={`/cases?company=${item.title.toLowerCase()}`}
            className="p-6 border-1 border-gray-400 rounded-lg grayscale-100 hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105 flex items-center justify-center"
          >
            <div className="max-w-[180px] min-h-[100px] flex items-center justify-center">
              <Image
                src={item.img}
                alt={item.title}
                width={180}
                height={100}
                className="object-contain md:w-[180px] md:h-[100px] w-[100px] h-[50px]"
              />
            </div>
          </Link>
        ))}
        {logo.map((item, index) => (
          <Link
            key={index}
            href={`/cases?company=${item.title.toLowerCase()}`}
            className="p-6 border-1 border-gray-400 rounded-lg grayscale-100 hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105"
          >
            <div className="max-w-[180px] min-h-[100px] relative">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
