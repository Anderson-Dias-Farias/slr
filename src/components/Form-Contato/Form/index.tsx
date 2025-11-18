"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import FormContatct from "./Form-Contatct";
import FormSupplier from "./Form-Supplier";
import FormWork from "./Form-Work";

export default function Form() {
  const t = useTranslations("form");
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2, // 20% da seção visível
    margin: "0px",
  });
  const [value, setValue] = useState("contact");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8 }}
      ref={ref}
      style={{ minHeight: "500px" }}
      className="w-full  mx-auto p-8 bg-[#91919145] rounded-lg shadow-2xl max-w-[600px] text-black h-full "
    >
      <Tabs defaultValue={value} onValueChange={setValue}>
        <TabsList className="w-full mb-4">
          <div className="py-6 flex items-center justify-center w-full gap-2">
            <TabsTrigger
              value="contact"
              className="w-full flex justify-center items-center"
            >
              <h2 className="text-lg font-bold text-center cursor-pointer">
                {t("title")}
              </h2>
            </TabsTrigger>
            <TabsTrigger
              value="work"
              className="w-full flex justify-center items-center"
            >
              <h2 className="text-lg font-bold text-center cursor-pointer">
                {t("title2")}
              </h2>
            </TabsTrigger>
            <TabsTrigger
              value="supplier"
              className="w-full flex justify-center items-center"
            >
              <h2 className="text-lg font-bold text-center cursor-pointer">
                {t("title3")}
              </h2>
            </TabsTrigger>
          </div>
        </TabsList>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            value === "contact" ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8 }}
          style={{ display: value === "contact" ? "block" : "none" }}
        >
          <TabsContent value={value}>
            <FormContatct />
          </TabsContent>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            value === "work" ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8 }}
          style={{ display: value === "work" ? "block" : "none" }}
        >
          <TabsContent value={value}>
            <FormWork />
          </TabsContent>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            value === "supplier" ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8 }}
          style={{ display: value === "supplier" ? "block" : "none" }}
        >
          <TabsContent value={value}>
            <FormSupplier />
          </TabsContent>
        </motion.div>
      </Tabs>
    </motion.div>
  );
}
