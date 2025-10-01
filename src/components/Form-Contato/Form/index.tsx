"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import FormContatct from "./Form-Contatct";
import FormWork from "./Form-Work";

export default function Form() {
  const t = useTranslations("form");
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2, // 20% da seção visível
    margin: "0px",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8 }}
      ref={ref}
      style={{ minHeight: "500px" }}
      className="w-full  mx-auto p-8 bg-[#91919145] rounded-lg shadow-2xl max-w-[600px] text-black h-full "
    >
      <Tabs defaultValue="contact">
        <TabsList className="w-full bg-transparent">
          <div className="mb-8 flex items-center justify-center">
            <TabsTrigger
              value="contact"
              className="bg-transparent data-[state=active]:bg-transparent shadow-none data-[state=active]:shadow-none"
            >
              <h2 className="text-xl font-bold mb-2 text-center cursor-pointer">
                {t("title")}
              </h2>
            </TabsTrigger>
            <TabsTrigger
              value="work"
              className="bg-transparent data-[state=active]:bg-transparent shadow-none data-[state=active]:shadow-none"
            >
              <h2 className="text-xl font-bold mb-2 text-center underline cursor-pointer">
                {t("title2")}
              </h2>
            </TabsTrigger>
          </div>
        </TabsList>
        <TabsContent value="contact">
          <FormContatct />
        </TabsContent>
        <TabsContent value="work">
          <FormWork />
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}
