"use client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useInView } from "framer-motion";
import { MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Missao() {
  const t = useTranslations("about-us");
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
    margin: "0px",
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
    margin: "0px",
  });
  const [value, setValue] = useState("visao");

  console.log(value);

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

            <Link
              href="/quem-somos"
              className="text-gray-500 text-base w-full md:text-left text-center hidden md:block"
            >
              <Button className="w-full lg:max-w-[400px] bg-amber-400 text-black">
                {t("link")}
              </Button>
            </Link>
          </div>
        </div>
        <div ref={ref2} className="w-full h-full md:mt-20 sm:mt-10 mt-5 ">
          <Tabs
            value={value}
            onValueChange={setValue}
            className="gap-0 md:block hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <TabsList className="w-full lg:min-h-36 md:min-h-24 min-h-20 bg-transparent relative z-10">
                <motion.div
                  className="flex items-center justify-start gap-4 flex-col w-full max-w-1/3"
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  <span className="text-gray-500 xl:text-lg md:text-base sm:text-sm text-xs py-1 px-6 rounded-full border border-gray-400">
                    Nossa
                  </span>
                  <TabsTrigger
                    value="visao"
                    className={`text-gray-500 xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold rounded-b-none gap-4 px-4 md:py-6 sm:py-4 py-2  h-full cursor-pointer w-full`}
                    style={{
                      backgroundColor:
                        value === "visao" ? "#D9D9D9" : "#ffffff",
                    }}
                  >
                    {t("visao")}{" "}
                    <Image
                      src="/Vector.png"
                      alt="Arrow Down"
                      width={40}
                      height={40}
                      className="md:w-8 md:h-4 w-6 h-3 lg:w-10 lg:h-6 xs:block hidden"
                    />
                  </TabsTrigger>
                </motion.div>
                <motion.div
                  className="flex items-center justify-start gap-4 flex-col w-full max-w-1/3"
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="text-gray-500 xl:text-lg md:text-base sm:text-sm text-xs py-1 px-6 rounded-full border border-gray-400">
                    Nossa
                  </span>
                  <TabsTrigger
                    value="missao"
                    className={`text-gray-500 xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold rounded-b-none gap-4 px-4 md:py-6 sm:py-4 py-2  h-full cursor-pointer w-full `}
                    style={{
                      backgroundColor:
                        value === "missao" ? "#D9D9D9" : "#ffffff",
                    }}
                  >
                    {t("missao")}
                    <Image
                      src="/Vector.png"
                      alt="Arrow Down"
                      width={40}
                      height={40}
                      className="md:w-8 md:h-4 w-6 h-3 lg:w-10 lg:h-6 xs:block hidden"
                    />
                  </TabsTrigger>
                </motion.div>
                <motion.div
                  className="flex items-center justify-start gap-4 flex-col w-full max-w-1/3"
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <span className="text-gray-500 xl:text-lg md:text-base sm:text-sm text-xs py-1 px-6 rounded-full border border-gray-400">
                    Nossa
                  </span>

                  <TabsTrigger
                    value="valores"
                    className={`text-gray-500 xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold rounded-b-none gap-4 px-4 md:py-6 sm:py-4 py-2  h-full cursor-pointer w-full`}
                    style={{
                      backgroundColor:
                        value === "valores" ? "#D9D9D9" : "#ffffff",
                    }}
                  >
                    {t("valores")}
                    <Image
                      src="/Vector.png"
                      alt="Arrow Down"
                      width={40}
                      height={40}
                      className="md:w-8 md:h-4 w-6 h-3 lg:w-10 lg:h-6 xs:block hidden"
                    />
                  </TabsTrigger>
                </motion.div>
              </TabsList>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <TabsContent
                style={{
                  backgroundColor: value === "visao" ? "#D9D9D9" : "#ffffff",
                }}
                value="visao"
                className=" p-10 relative z-8 mx-1 rounded-b-lg xl:text-lg md:text-base text-sm text-gray-600 font-normal text-center sm:text-left"
              >
                {t("visao-description")}
              </TabsContent>
              <TabsContent
                style={{
                  backgroundColor: value === "missao" ? "#D9D9D9" : "#ffffff",
                }}
                value="missao"
                className=" p-10 relative z-8 mx-1 rounded-b-lg xl:text-lg md:text-base text-sm text-gray-600 font-normal text-center sm:text-left"
              >
                {t("missao-description")}
              </TabsContent>
              <TabsContent
                style={{
                  backgroundColor: value === "valores" ? "#D9D9D9" : "#ffffff",
                }}
                value="valores"
                className=" p-10 relative z-8 mx-1 rounded-b-lg xl:text-lg md:text-base text-sm text-gray-600 font-normal text-center sm:text-left"
              >
                {t("valores-description")}
              </TabsContent>
            </motion.div>
          </Tabs>
          <div className="md:hidden flex flex-col gap-10" ref={ref2Mobile}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView2Mobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex flex-col gap-4 max-w-[400px] mx-auto items-center justify-center"
            >
              <span className="text-gray-500 xl:text-lg md:text-sm sm:text-xs text-xs py-1 px-6 rounded-full border border-gray-400 w-fit">
                Nossa
              </span>
              <h2 className="text-gray-500  w-full font-normal sm:text-4xl text-3xl text-center">
                {t("visao")}
              </h2>
              <p className="text-gray-500 text-base w-full text-center sm:p-8 p-4  bg-gray-300 rounded-lg">
                {t("visao-description")}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView2Mobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-4 max-w-[400px] mx-auto items-center justify-center"
            >
              <span className="text-gray-500 xl:text-lg md:text-sm sm:text-xs text-xs py-1 px-6 rounded-full border border-gray-400 w-fit">
                Nossa
              </span>
              <h2 className="text-gray-500  w-full font-normal sm:text-4xl text-3xl text-center">
                {t("missao")}
              </h2>
              <p className="text-gray-500 text-base w-full text-center sm:p-8 p-4  bg-gray-300 rounded-lg">
                {t("missao-description")}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView2Mobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col gap-4 max-w-[400px] mx-auto items-center justify-center"
            >
              <span className="text-gray-500 xl:text-lg md:text-sm sm:text-xs text-xs py-1 px-6 rounded-full border border-gray-400 w-fit">
                Nossa
              </span>
              <h2 className="text-gray-500  w-full font-normal sm:text-4xl text-3xl text-center">
                {t("valores")}
              </h2>
              <p className="text-gray-500 text-base w-full text-center sm:p-8 p-4  bg-gray-300 rounded-lg">
                {t("valores-description")}
              </p>
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
                Endereço filial 1
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
                Endereço filial 1
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
              <Button className="bg-amber-500 text-black uppercase rounded-full w-full py-6 font-semibold">
                {t("cta3")}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
