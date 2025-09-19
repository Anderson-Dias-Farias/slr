"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  telefone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos"),
  email: z.string().email("Email inválido"),
  cidade: z.string().min(2, "Cidade deve ter pelo menos 2 caracteres"),
  empresa: z.string().min(2, "Empresa deve ter pelo menos 2 caracteres"),
});

type FormData = z.infer<typeof formSchema>;

export default function Form() {
  const t = useTranslations("form");
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2, // 20% da seção visível
    margin: "0px",
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      console.log("Dados do formulário:", data);
      // Aqui você pode adicionar a lógica para enviar os dados
      // Por exemplo, uma chamada para API
      alert("Formulário enviado com sucesso!");
      reset();
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert("Erro ao enviar formulário. Tente novamente.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8 }}
      ref={ref}
      className="w-full  mx-auto p-8 bg-[#91919145] rounded-lg shadow-2xl max-w-[600px] text-black "
    >
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2 text-center uppercase">
          {t("title")}
        </h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="grid  sm:grid-cols-2 gap-2">
          {/* Nome */}
          <div className="space-y-2 col-span-2">
            <Label
              htmlFor="nome"
              className="text-[12px] font-medium text-gray-700 mb-1"
            >
              {errors.nome ? (
                <span className="text-red-500 text-sm">
                  {errors.nome.message}
                </span>
              ) : (
                t("fields.nome")
              )}{" "}
              *
            </Label>
            <Input
              id="nome"
              {...register("nome")}
              placeholder={t("placeholders.nome")}
              className={`w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 bg-white shadow-sm focus:ring-amber-500 ${
                errors.nome ? "border-red-500" : "border-gray-300"
              }`}
            />
          </div>

          {/* Telefone */}
          <div className="space-y-2 col-span-2 sm:col-span-1">
            <Label
              htmlFor="telefone"
              className="text-[12px] font-medium text-gray-700 mb-1"
            >
              {errors.telefone ? (
                <span className="text-red-500 text-sm">
                  {errors.telefone.message}
                </span>
              ) : (
                t("fields.telefone")
              )}{" "}
              *
            </Label>
            <Input
              id="telefone"
              {...register("telefone")}
              placeholder={t("placeholders.telefone")}
              className={`w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 bg-white shadow-sm focus:ring-amber-500 ${
                errors.telefone ? "border-red-500" : "border-gray-300"
              }`}
            />
          </div>

          {/* Email */}
          <div className="space-y-2 col-span-2 sm:col-span-1">
            <Label
              htmlFor="email"
              className="text-[12px] font-medium text-gray-700 mb-1"
            >
              {errors.email ? (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              ) : (
                t("fields.email")
              )}{" "}
              *
            </Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder={t("placeholders.email")}
              className={`w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 bg-white shadow-sm focus:ring-amber-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
          </div>

          {/* Cidade */}
          <div className="space-y-2 col-span-2">
            <Label
              htmlFor="cidade"
              className="text-[12px] font-medium text-gray-700 mb-1"
            >
              {errors.cidade ? (
                <span className="text-red-500 text-sm">
                  {errors.cidade.message}
                </span>
              ) : (
                t("fields.cidade")
              )}{" "}
              *
            </Label>
            <Input
              id="cidade"
              {...register("cidade")}
              placeholder={t("placeholders.cidade")}
              className={`w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 bg-white shadow-sm focus:ring-amber-500 ${
                errors.cidade ? "border-red-500" : "border-gray-300"
              }`}
            />
          </div>

          {/* Empresa */}
          <div className="space-y-2 col-span-2">
            <Label
              htmlFor="empresa"
              className="text-[12px] font-medium text-gray-700 mb-1"
            >
              {errors.empresa ? (
                <span className="text-red-500 text-sm">
                  {errors.empresa.message}
                </span>
              ) : (
                t("fields.empresa")
              )}{" "}
              *
            </Label>
            <Input
              id="empresa"
              {...register("empresa")}
              placeholder={t("placeholders.empresa")}
              className={`w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 bg-white shadow-sm focus:ring-amber-500 ${
                errors.empresa ? "border-red-500" : "border-gray-300"
              }`}
            />
          </div>
          {/* Botão de Envio */}
          <div className="mt-2 col-span-2 w-full flex justify-center">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-amber-500 w-full hover:bg-amber-600 text-black px-8 py-3 rounded-full font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? t("sending") : t("submit")}
            </Button>
          </div>
        </div>
      </form>
    </motion.div>
  );
}
