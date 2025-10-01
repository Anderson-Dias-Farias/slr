"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Missao() {
  const t = useTranslations("about-us");
  const tAdress = useTranslations("adress");
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref2Mobile = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const isInView = useInView(ref, {
    once: false,
    amount: 0.2, // 20% da seção visível
    margin: "0px",
  });

  const isInView2 = useInView(ref2, {
    once: false,
    amount: 0.2,
    margin: "200px 0px",
  });

  const isInView3 = useInView(ref3, {
    once: false,
    amount: 0.2,
    margin: "0px",
  });

  const isInView4 = useInView(ref4, {
    once: false,
    amount: 0.2,
    margin: "0px",
  });

  const isInView2Mobile = useInView(ref2Mobile, {
    once: false,
    amount: 0.2,
    margin: "200px 0px",
  });
  const [value, setValue] = useState("visao");

  return (
    <section
      ref={ref}
      className="w-full h-full overflow-hidden px-4 py-20 gap-10 flex flex-col items-center justify-center"
    >
      <div className="w-full h-full max-w-7xl mx-auto flex flex-col gap-10 items-center justify-center">
        <div className="w-full h-full flex flex-col-reverse md:flex-row items-start justify-start gap-10 border-b border-gray-400 pb-20">
          <Link
            href="/quem-somos"
            className="text-gray-500 text-base w-full md:text-left text-center block md:hidden"
          >
            <Button className="w-full lg:max-w-[400px] bg-amber-400 text-black">
              {t("link")}
            </Button>
          </Link>
          <motion.div
            className="w-full h-full relative md:min-h-[650px] min-h-[400px] md:max-w-[610px]"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/missao.jpg"
              alt="Missao"
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="w-full h-full flex flex-col gap-8 items-center justify-center md:items-start md:justify-start md:max-w-[610px] text-center md:text-left px-4">
            <motion.h1
              className="lg:text-5xl text-4xl font-normal w-full text-gray-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              {t("title")} <br />{" "}
              <span className="text-gray-800">{t("title2")}</span>
            </motion.h1>
            <motion.p
              className="text-gray-500 text-base w-full md:text-left text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              {t("description")}
            </motion.p>
            <motion.p
              className="text-gray-500 text-base w-full md:text-left text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              {t("description2")}
            </motion.p>
            <motion.p
              className="text-gray-500 text-base w-full md:text-left text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              {t("description3")}
            </motion.p>
            <motion.p
              className="text-gray-600 text-base font-bold w-full md:text-left text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              {t("why-choose")}
            </motion.p>
            <div className="flex flex-col gap-2">
              <motion.p
                className="text-gray-500 text-base w-full md:text-left text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8 }}
              >
                <span className="font-bold text-gray-600">
                  {t("benefits.benefit1.title")}:
                </span>{" "}
                {t("benefits.benefit1.description")}
              </motion.p>
              <motion.p
                className="text-gray-500 text-base w-full md:text-left text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8 }}
              >
                <span className="font-bold text-gray-600">
                  {t("benefits.benefit2.title")}:
                </span>{" "}
                {t("benefits.benefit2.description")}
              </motion.p>
              <motion.p
                className="text-gray-500 text-base w-full md:text-left text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8 }}
              >
                <span className="font-bold text-gray-600">
                  {t("benefits.benefit3.title")}:
                </span>{" "}
                {t("benefits.benefit3.description")}
              </motion.p>
            </div>

            <Link
              href="/contact"
              className="text-gray-500 text-base w-full md:text-left text-center hidden md:block"
            >
              <Button className="w-full lg:max-w-[400px] bg-[#FFBE00] hover:bg-[#2C2C2C] hover:text-[#FFBE00] cursor-pointer  transition-all duration-300 text-black">
                {t("link")}
              </Button>
            </Link>
          </div>
        </div>
        {/* Nova seção de Missão, Visão e Valores - Design Moderno */}
        <div ref={ref2} className="w-full h-full md:mt-20 sm:mt-10 mt-5">
          {/* Desktop - Design com Cards */}
          <div className="md:block hidden">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-3 gap-8 mb-8"
            >
              {/* Visão Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.05 }}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  value === "visao" ? "scale-105" : "hover:scale-102"
                }`}
                onClick={() => setValue("visao")}
              >
                <div
                  className={`relative overflow-hidden rounded-2xl p-8  flex flex-col justify-start items-start transition-all duration-500 ${
                    value === "visao"
                      ? "bg-gradient-to-br from-[#FFBE00]/1 to-[#FFD700]/20 shadow-2xl"
                      : "bg-white border-2 border-gray-200 hover:border-[#FFBE00] shadow-lg hover:shadow-xl"
                  }`}
                >
                  <div>
                    <div
                      className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-4 transition-colors duration-300 border border-gray-300 bg-white text-[#2C2C2C]`}
                    >
                      {t("badge-visao")}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 justify-between w-full">
                    <h3
                      className={`text-3xl font-bold transition-colors duration-300 ${
                        value === "visao" ? "text-[#2C2C2C]" : "text-gray-700"
                      }`}
                    >
                      {t("visao")}
                    </h3>
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        value === "visao"
                          ? "bg-[#2C2C2C] text-[#FFBE00]"
                          : "bg-[#FFBE00] text-[#2C2C2C] group-hover:scale-110"
                      }`}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Missão Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  value === "missao" ? "scale-105" : "hover:scale-102"
                }`}
                onClick={() => setValue("missao")}
              >
                <div
                  className={`relative overflow-hidden rounded-2xl p-8  flex flex-col justify-start items-start transition-all duration-500 ${
                    value === "missao"
                      ? "bg-gradient-to-br from-[#FFBE00]/1 to-[#FFD700]/20 shadow-2xl"
                      : "bg-white border-2 border-gray-200 hover:border-[#FFBE00] shadow-lg hover:shadow-xl"
                  }`}
                >
                  <div>
                    <div
                      className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-4 transition-colors duration-300 border border-gray-300 bg-white text-[#2C2C2C] `}
                    >
                      {t("badge-missao")}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 justify-between w-full">
                    <h3
                      className={`text-3xl font-bold transition-colors duration-300 ${
                        value === "missao" ? "text-[#2C2C2C]" : "text-gray-700"
                      }`}
                    >
                      {t("missao")}
                    </h3>
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        value === "missao"
                          ? "bg-[#2C2C2C] text-[#FFBE00]"
                          : "bg-[#FFBE00] text-[#2C2C2C] group-hover:scale-110"
                      }`}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Valores Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.15 }}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  value === "valores" ? "scale-105" : "hover:scale-102"
                }`}
                onClick={() => setValue("valores")}
              >
                <div
                  className={`relative overflow-hidden rounded-2xl p-8  flex flex-col justify-start items-start transition-all duration-500 ${
                    value === "valores"
                      ? "bg-gradient-to-br from-[#FFBE00]/1 to-[#FFD700]/20 shadow-2xl"
                      : "bg-white border-2 border-gray-200 hover:border-[#FFBE00] shadow-lg hover:shadow-xl"
                  }`}
                >
                  <div>
                    <div
                      className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-4 transition-colors duration-300 border border-gray-300 bg-white text-[#2C2C2C]`}
                    >
                      {t("badge-valores")}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 justify-between w-full">
                    <h3
                      className={`text-3xl font-bold transition-colors duration-300 ${
                        value === "valores" ? "text-[#2C2C2C]" : "text-gray-700"
                      }`}
                    >
                      {t("valores")}
                    </h3>
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        value === "valores"
                          ? "bg-[#2C2C2C] text-[#FFBE00]"
                          : "bg-[#FFBE00] text-[#2C2C2C] group-hover:scale-110"
                      }`}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Conteúdo dinâmico */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <Card
                className={`rounded-2xl p-12 transition-all duration-500  shadow-xl`}
              >
                <div className="max-w-4xl mx-auto text-center">
                  <h4 className="text-2xl font-bold mb-6">
                    {value === "visao" && t("visao")}
                    {value === "missao" && t("missao")}
                    {value === "valores" && t("valores")}
                  </h4>
                  <p className="text-lg leading-relaxed">
                    {value === "visao" && t("visao-description")}
                    {value === "missao" && t("missao-description")}
                    {value === "valores" && t("valores-description")}
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
          {/* Mobile - Design com Cards Stack */}
          <div className="md:hidden flex flex-col gap-6" ref={ref2Mobile}>
            {/* Visão Card Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView2Mobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5, delay: 0.05 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-[#FFBE00]/1 to-[#FFD700]/20 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white text-[#2C2C2C] px-3 py-1 rounded-full text-sm font-semibold border border-gray-300">
                    {t("badge-visao")}
                  </div>
                </div>
                <div className="flex items-center gap-4 justify-start">
                  <h3 className="text-2xl font-bold text-[#2C2C2C] ">
                    {t("visao")}
                  </h3>
                  <div className="w-10 h-10 bg-[#2C2C2C] rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#FFBE00]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-[#2C2C2C] text-base leading-relaxed mt-2">
                  {t("visao-description")}
                </p>
              </div>
            </motion.div>

            {/* Missão Card Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView2Mobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-[#FFBE00]/1 to-[#FFD700]/20   rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white text-[#2C2C2C] px-3 py-1 rounded-full text-sm font-semibold border border-gray-300">
                    {t("badge-missao")}
                  </div>
                </div>
                <div className="flex items-center gap-4 justify-start">
                  <h3 className="text-2xl font-bold text-[#2C2C2C] ">
                    {t("missao")}
                  </h3>
                  <div className="w-10 h-10 bg-[#2C2C2C] rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#FFBE00]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-[#2C2C2C] text-base leading-relaxed mt-2">
                  {t("missao-description")}
                </p>
              </div>
            </motion.div>

            {/* Valores Card Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView2Mobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-[#FFBE00]/1 to-[#FFD700]/20 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white text-[#2C2C2C] px-3 py-1 rounded-full text-sm font-semibold border border-gray-300">
                    {t("badge-valores")}
                  </div>
                </div>
                <div className="flex items-center gap-4 justify-start">
                  <h3 className="text-2xl font-bold text-[#2C2C2C] ">
                    {t("valores")}
                  </h3>
                  <div className="w-10 h-10 bg-[#2C2C2C] rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#FFBE00]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-[#2C2C2C] text-base leading-relaxed mt-2">
                  {t("valores-description")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <motion.h2
          ref={ref2}
          className="text-4xl font-normal text-gray-600 mb-0 mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {t("title3")}
        </motion.h2>
      </div>
      <div ref={ref3} className="w-full h-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            isInView3 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
          }
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/quem-somos2.jpg"
            alt="Time"
            width={3000}
            height={2000}
            className="w-full h-full object-cover max-h-[600px]"
          />
        </motion.div>
        <div
          ref={ref4}
          className="w-full h-full flex flex-col gap-20 items-center justify-center max-w-7xl mx-auto border-b border-gray-400 py-20"
        >
          <motion.p
            className="text-gray-600 text-base"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t("description4")}
          </motion.p>
          <motion.div
            className="w-full h-full flex items-center justify-start gap-4 flex-col md:flex-row"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="w-full bg-gray-300 rounded-full px-8 py-4 gap-4 text-center items-center justify-between flex "
              initial={{ opacity: 0, x: -30 }}
              animate={
                isInView4 ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
              }
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <MapPin className="w-6 h-6 text-gray-600" />{" "}
              <p className="text-gray-600 text-base w-full text-center">
                {tAdress("description")}
              </p>
            </motion.div>
            <motion.div
              className="w-full bg-gray-300 rounded-full px-8 py-4 gap-4 text-center items-center justify-between flex"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView4 ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <MapPin className="w-6 h-6 text-gray-600" />{" "}
              <p className="text-gray-600 text-base w-full text-center">
                {tAdress("description2")}
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            className="w-full flex items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Link href="/cases" className="w-full sm:max-w-[600px]  pb-10">
              <Button className="bg-amber-500 hover:bg-[#2C2C2C] hover:text-[#FFBE00] cursor-pointer  transition-all duration-300 text-black uppercase rounded-full w-full py-6 font-semibold">
                {t("cta3")}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
