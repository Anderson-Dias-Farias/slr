"use client";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef } from "react";

export default function Atuacao() {
  const t = useTranslations("atuacao");
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  // Design-Build refs
  const ref5 = useRef(null);
  const ref6 = useRef(null);

  const isInView = useInView(ref, {
    once: false,
    amount: 0.2,
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

  // Design-Build useInView
  const isInView5 = useInView(ref5, {
    once: false,
    amount: 0.2,
    margin: "0px",
  });

  const isInView6 = useInView(ref6, {
    once: false,
    amount: 0.2,
    margin: "0px",
  });

  return (
    <div>
      {/* Hero Section */}
      <section ref={ref} className="w-full h-full overflow-hidden py-20">
        <div className="w-full h-full max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center justify-between pt-20 pb-5 px-4 mt-20">
          <motion.h1
            className="sm:text-6xl text-3xl font-semibold text-gray-800 w-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            {t("title")}
          </motion.h1>
          <motion.h2
            className="sm:text-lg text-base font-normal text-gray-500 w-auto text-center rounded-full px-6 py-2 border-1 border-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t("badge")}
          </motion.h2>
        </div>
        <div className="border-b-2 border-gray-300 w-full h-full relative z-1"></div>
      </section>

      {/* Turn Key Hero */}
      <section
        ref={ref2}
        className="w-full h-full overflow-hidden "
        style={{
          minHeight: "100dvh",
          backgroundImage: "url('/turnkey.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          backdropFilter: "grayscale(100%)",
        }}
      >
        <div className="w-full h-full min-h-[100dvh] bg-black/80">
          <div className="w-full max-w-7xl mx-auto flex flex-col  items-center justify-center  py-20 relative z-10">
            <motion.h1
              style={{
                textShadow: "0 0 10px rgba(0, 0, 0, 2)",
              }}
              className="sm:text-6xl text-3xl font-semibold text-white w-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              {t("turn-key.title")}{" "}
              <span className="font-normal">{t("turn-key.subtitle")}</span>
            </motion.h1>
            <motion.p
              style={{
                textShadow: "0 0 10px rgba(0, 0, 0, 2)",
              }}
              className="text-white text-lg max-w-4xl text-center px-4 mt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t("turn-key.description")}
            </motion.p>
            {/* Gestão Integrada Section */}
            <section ref={ref3} className="w-full h-full py-10 ">
              <div className="w-full max-w-7xl mx-auto px-4">
                <motion.div
                  className="text-center mb-16 bg-white p-8 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">
                    {t("turn-key.title2")}
                  </h2>
                  <p className="text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
                    {t("turn-key.description2")}
                  </p>
                </motion.div>

                {/* Cards Section */}
                <div className="grid md:grid-cols-3 gap-8">
                  <motion.div
                    className="bg-white p-8 rounded-lg shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                      isInView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      {t("turn-key.title3")}
                    </h3>
                    <p className="text-gray-600">
                      {t("turn-key.description3")}
                    </p>
                  </motion.div>

                  <motion.div
                    className="bg-white p-8 rounded-lg shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                      isInView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      {t("turn-key.title4")}
                    </h3>
                    <p className="text-gray-600">
                      {t("turn-key.description4")}
                    </p>
                  </motion.div>

                  <motion.div
                    className="bg-white p-8 rounded-lg shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                      isInView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      {t("turn-key.title5")}
                    </h3>
                    <p className="text-gray-600">
                      {t("turn-key.description5")}
                    </p>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Example Section */}
            <section ref={ref4} className="w-full h-full py-20 ">
              <div className="w-full max-w-7xl mx-auto px-4">
                <motion.div
                  className="bg-amber-50 border-l-4 border-amber-400 p-8 rounded-lg"
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Exemplo Prático
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t("turn-key.example")}
                  </p>
                </motion.div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <div className="w-full overflow-hidden h-26 bg-white"></div>

      {/* Design Build Hero */}
      <section
        ref={ref5}
        className="w-full h-full overflow-hidden "
        style={{
          minHeight: "100dvh",
          backgroundImage: "url('/design-build.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          backdropFilter: "grayscale(100%)",
        }}
      >
        <div className="w-full h-full min-h-[100dvh] bg-black/80 flex flex-col gap-10 px-4">
          <div className="w-full max-w-7xl mx-auto flex flex-col  items-center justify-center  py-20 relative z-10 gap-10">
            <motion.h1
              style={{
                textShadow: "0 0 10px rgba(0, 0, 0, 2)",
              }}
              className="sm:text-6xl text-3xl font-semibold text-white w-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              {t("design-build.title")}
              <span className="font-normal">{t("design-build.title2")}</span>
            </motion.h1>
            <motion.p
              style={{
                textShadow: "0 0 10px rgba(0, 0, 0, 2)",
              }}
              className="text-white text-lg max-w-4xl text-center px-4 mt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t("design-build.description")}
            </motion.p>

            {/* Benefícios Section */}
            <section ref={ref6} className="w-full h-full pt-20 ">
              <div className="w-full max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-10">
                <div className="w-full lg:max-w-1/2 mx-auto px-4">
                  <motion.div
                    style={{
                      textShadow: "0 0 10px rgba(0, 0, 0, 2)",
                    }}
                    className="text-center mb-6 text-white"
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                      isInView6 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.8 }}
                  >
                    <h2 className="text-4xl font-bold text-white ' mb-2">
                      {t("design-build.subtitle")}
                    </h2>
                  </motion.div>

                  {/* Benefits Cards Section */}
                  <div className="grid  gap-2 lg:text-left text-center">
                    <motion.ul
                      initial={{ opacity: 0, y: 30 }}
                      animate={
                        isInView6 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                      }
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <h3 className="md:text-lg text-base font-bold mb-4 text-white">
                        {t("design-build.benefits.benefit1.title")}:{" "}
                        <span className="font-normal">
                          {" "}
                          {t("design-build.benefits.benefit1.description")}
                        </span>
                      </h3>
                    </motion.ul>

                    <motion.li
                      initial={{ opacity: 0, y: 30 }}
                      animate={
                        isInView6 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                      }
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      <h3 className="md:text-lg text-base font-bold text-white mb-4">
                        {t("design-build.benefits.benefit2.title")}:{" "}
                        <span className="font-normal">
                          {" "}
                          {t("design-build.benefits.benefit2.description")}
                        </span>
                      </h3>
                    </motion.li>

                    <motion.li
                      initial={{ opacity: 0, y: 30 }}
                      animate={
                        isInView6 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                      }
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <h3 className="md:text-lg text-base font-bold text-white mb-4">
                        {t("design-build.benefits.benefit3.title")}:{" "}
                        <span className="font-normal">
                          {" "}
                          {t("design-build.benefits.benefit3.description")}
                        </span>
                      </h3>
                    </motion.li>

                    <motion.li
                      initial={{ opacity: 0, y: 30 }}
                      animate={
                        isInView6 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                      }
                      transition={{ duration: 0.8, delay: 0.8 }}
                    >
                      <h3 className="md:text-lg text-base font-bold text-white mb-4">
                        {t("design-build.benefits.benefit4.title")}:{" "}
                        <span className="font-normal">
                          {" "}
                          {t("design-build.benefits.benefit4.description")}
                        </span>
                      </h3>
                    </motion.li>

                    <motion.li
                      initial={{ opacity: 0, y: 30 }}
                      animate={
                        isInView6 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                      }
                      transition={{ duration: 0.8, delay: 1.0 }}
                    >
                      <h3 className="md:text-lg text-base font-bold text-white mb-4">
                        {t("design-build.benefits.benefit5.title")}:{" "}
                        <span className="font-normal">
                          {" "}
                          {t("design-build.benefits.benefit5.description")}
                        </span>
                      </h3>
                    </motion.li>
                  </div>
                </div>
                <motion.div
                  className="w-full lg:w-1/2 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView6
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Image
                    src="/build-img.png"
                    alt="Design Build"
                    width={600}
                    height={400}
                    className="w-full h-auto object-contain max-w-[500px]"
                    priority
                  />
                </motion.div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
