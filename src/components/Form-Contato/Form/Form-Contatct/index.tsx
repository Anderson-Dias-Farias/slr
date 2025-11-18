"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import InputMask from "@/components/ui/inputMask";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  telefone: z.string().min(1, "Telefone é obrigatório"),
  email: z.string().email("Email inválido"),
  cidade: z.string().min(2, "Cidade deve ter pelo menos 2 caracteres"),
  empresa: z.string().min(2, "Empresa deve ter pelo menos 2 caracteres"),
});

type FormData = z.infer<typeof formSchema>;

export default function FormContatct() {
  const t = useTranslations("form");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    control,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      console.log("[FORM CLIENT] Enviando dados:", data);
      
      const response = await fetch("/api/send/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log("[FORM CLIENT] Status da resposta:", response.status);
      console.log("[FORM CLIENT] Response ok:", response.ok);

      const result = await response.json();
      console.log("[FORM CLIENT] Resposta da API:", result);

      if (response.ok && result.success) {
        reset();
        toast.success(result.message || t("sendSuccess"));
        console.log("[FORM CLIENT] Formulário enviado com sucesso!");
      } else {
        const errorMessage = result.message || result.error || t("sendError");
        console.error("[FORM CLIENT] Erro ao enviar:", errorMessage);
        toast.error(errorMessage);
      }
    } catch (error) {
      console.error("[FORM CLIENT] Erro na requisição:", error);
      const errorMessage = error instanceof Error ? error.message : t("sendError");
      toast.error(errorMessage);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="grid  sm:grid-cols-2 gap-4 w-full h-full ">
        {/* Nome */}
        <div className="space-y-4 col-span-2">
          <Label
            htmlFor="nome"
            className="text-[12px] font-medium text-gray-700 mb-2"
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
        <div className="space-y-4 col-span-2 sm:col-span-1">
          <Label
            htmlFor="telefone"
            className="text-[12px] font-medium text-gray-700 mb-2"
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
          <Controller
            name="telefone"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <InputMask
                name={field.name}
                format="(##) #####-####"
                placeholder={t("placeholders.telefone")}
                value={field.value || ""}
                onChange={field.onChange}
                onBlur={field.onBlur}
                className={`w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 bg-white shadow-sm focus:ring-amber-500 ${
                  errors.telefone ? "border-red-500" : "border-gray-300"
                }`}
              />
            )}
          />
        </div>

        {/* Email */}
        <div className="space-y-4 col-span-2 sm:col-span-1">
          <Label
            htmlFor="email"
            className="text-[12px] font-medium text-gray-700 mb-2"
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
        <div className="space-y-4 col-span-2">
          <Label
            htmlFor="cidade"
            className="text-[12px] font-medium text-gray-700 mb-2"
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
        <div className="space-y-4 col-span-2">
          <Label
            htmlFor="empresa"
            className="text-[12px] font-medium text-gray-700 mb-2"
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
        <div className="mt-4 col-span-2 w-full flex justify-center">
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
  );
}
