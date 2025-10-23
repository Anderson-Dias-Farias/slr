"use client";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Depoimentos() {
  const t = useTranslations("depoimentos");
  const [currentSlide, setCurrentSlide] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2,
    margin: "0px",
  });

  const depoimentos = [
    {
      name: t("depoimento1.name"),
      empresa: t("depoimento1.empresa"),
      description: t("depoimento1.description"),
    },
    {
      name: t("depoimento2.name"),
      empresa: t("depoimento2.empresa"),
      description: t("depoimento2.description"),
    },
    {
      name: t("depoimento3.name"),
      empresa: t("depoimento3.empresa"),
      description: t("depoimento3.description"),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % depoimentos.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + depoimentos.length) % depoimentos.length
    );
  };

  return (
    <section
      ref={ref}
      className="w-full h-full overflow-hidden px-4 py-20 bg-gray-50 border-b-4 border-gray-500"
    >
      <div className="w-full h-full max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-normal text-gray-400 mb-4">
            {t("title")}
            <span className="text-black">{t("subtitle")}</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
            >
              {depoimentos.map((depoimento, index) => (
                <motion.div
                  key={index}
                  className="lg:w-1/3 w-1/2 flex-shrink-0 px-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[480px] flex flex-col md:grayscale-100 grayscale-0 hover:grayscale-0 transition-all duration-500">
                    <div className="relative h-72 flex-shrink-0">
                      <Image
                        src="/depoimento1.png"
                        alt="Depoimento"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-4 left-4 right-4 text-center">
                        <h4 className="font-semibold text-white text-lg drop-shadow-lg">
                          {depoimento.name}
                        </h4>
                        <p className="text-white font-medium drop-shadow-lg">
                          {depoimento.empresa}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 p-6 flex flex-col border-l-2  border-gray-500">
                      <p className="text-gray-600 text-justify leading-relaxed flex-1 sm:text-sm text-xs">
                        &apos;{depoimento.description}&apos;
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navegação */}
          <div className="flex items-center justify-center mt-8 gap-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            {/* Indicadores */}
            <div className="flex space-x-2">
              {depoimentos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-amber-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
