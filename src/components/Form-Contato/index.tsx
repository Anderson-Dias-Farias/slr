"use client";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import Form from "./Form";

export default function FormContato() {
  const t = useTranslations("form-contato");
  const footer = useTranslations("footer");
  const address = useTranslations("adress");
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2, // 20% da seção visível
    margin: "0px",
  });
  return (
    <section
      ref={ref}
      className="w-full h-full overflow-hidden px-4 md:mb-10 mb-20"
    >
      <div className="w-full h-full max-w-7xl mx-auto  md:py-20 py-10 flex flex-col gap-10 items-start  md:justify-start justify-center  ">
        <motion.h1
          className="sm:text-lg text-base font-normal text-gray-800 w-auto text-center rounded-full px-6 py-2 border-1 border-gray-400 "
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {t("badge")}
        </motion.h1>
        <div className="w-full h-full flex md:flex-row flex-col items-center justify-center  md:gap-6 gap-10 ">
          <div className="w-full md:max-w-1/2">
            <div className="w-full  flex flex-col gap-8 items-center justify-center">
              <motion.h1
                className="sm:text-4xl text-3xl font-semibold text-gray-500 w-full text-left  -mb-4 sm:mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8 }}
              >
                {t("title")} <span className="text-black">{t("subtitle")}</span>
              </motion.h1>
              <motion.p
                className="text-black text-lg w-full text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8 }}
              >
                {t("description")}
              </motion.p>
              <motion.p
                className="text-gray-500 text-base w-full md:text-left text-justify"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8 }}
              >
                {t("description2")}
              </motion.p>
              <motion.p
                className="text-gray-600 text-base w-full md:text-left text-justify"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8 }}
              >
                {t("description3")}
              </motion.p>

              <div className="w-full flex flex-col gap-2">
                <motion.p
                  className="text-gray-600 text-base w-full md:text-left text-justify"
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.8 }}
                >
                  <span className="font-bold text-gray-600">
                    {footer("links3.link1")}:
                  </span>{" "}
                  +55 (11) 91681-6297
                </motion.p>
                <motion.p
                  className="text-gray-600 text-base w-full font-bold md:text-left text-justify"
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.8 }}
                >
                  {address("title")}
                </motion.p>
                <motion.p
                  className="text-gray-600 text-sm w-full md:text-left text-justify"
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.8 }}
                >
                  {address("description")}
                </motion.p>
                <motion.p
                  className="text-gray-600 text-sm w-full md:text-left text-justify"
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.8 }}
                >
                  {address("description2")}
                </motion.p>
              </div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
}
