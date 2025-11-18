"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import InputMask from "@/components/ui/inputMask";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  telefone: z.string().min(1, "Telefone é obrigatório"),
  email: z.string().email("Email inválido"),
  curriculo: z.any().refine((files) => {
    // Check if we're in browser environment and files is a FileList
    if (typeof window !== "undefined" && files instanceof FileList) {
      return files.length > 0;
    }
    // For server-side or other cases, check if it's an array-like object
    return files && files.length > 0;
  }, "Currículo é obrigatório"),
  mensagem: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type FormData = z.infer<typeof formSchema>;

export default function FormWork() {
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
      console.log("[FORM WORK CLIENT] Enviando dados:", {
        nome: data.nome,
        email: data.email,
        telefone: data.telefone,
        mensagem: data.mensagem,
        curriculo: data.curriculo ? `presente (${data.curriculo.length} arquivo(s))` : "ausente",
      });

      const formData = new FormData();
      formData.append("nome", data.nome);
      formData.append("telefone", data.telefone);
      formData.append("email", data.email);
      formData.append("mensagem", data.mensagem);

      // Adicionar o arquivo do currículo
      if (data.curriculo && data.curriculo.length > 0) {
        formData.append("curriculo", data.curriculo[0]);
        console.log("[FORM WORK CLIENT] Arquivo anexado:", data.curriculo[0].name);
      }

      const response = await fetch("/api/send/work", {
        method: "POST",
        body: formData,
      });

      console.log("[FORM WORK CLIENT] Status da resposta:", response.status);
      console.log("[FORM WORK CLIENT] Response ok:", response.ok);
      console.log("[FORM WORK CLIENT] Content-Type:", response.headers.get("content-type"));

      // Verificar se a resposta é JSON antes de tentar fazer parse
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        console.error("[FORM WORK CLIENT] Resposta não é JSON:", text.substring(0, 200));
        toast.error("Erro ao processar resposta do servidor");
        return;
      }

      const result = await response.json();
      console.log("[FORM WORK CLIENT] Resposta da API:", result);

      if (response.ok && result.success) {
        reset();
        toast.success(result.message || t("workSuccess"));
        console.log("[FORM WORK CLIENT] Formulário enviado com sucesso!");
      } else {
        const errorMessage = result.message || result.error || t("workError");
        console.error("[FORM WORK CLIENT] Erro ao enviar:", errorMessage);
        toast.error(errorMessage);
      }
    } catch (error) {
      console.error("[FORM WORK CLIENT] Erro na requisição:", error);
      const errorMessage = error instanceof Error ? error.message : t("workError");
      toast.error(errorMessage);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="grid sm:grid-cols-2 gap-4 w-full h-full">
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
              t("workFields.nome")
            )}{" "}
            *
          </Label>
          <Input
            id="nome"
            {...register("nome")}
            placeholder={t("workPlaceholders.nome")}
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
              t("workFields.telefone")
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
                placeholder={t("workPlaceholders.telefone")}
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
              t("workFields.email")
            )}{" "}
            *
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder={t("workPlaceholders.email")}
            className={`w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 bg-white shadow-sm focus:ring-amber-500 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
        </div>

        {/* Currículo */}
        <div className="space-y-4 col-span-2">
          <Label
            htmlFor="curriculo"
            className="text-[12px] font-medium text-gray-700 mb-2"
          >
            {errors.curriculo ? (
              <span className="text-red-500 text-sm">
                {String(errors.curriculo.message)}
              </span>
            ) : (
              t("workFields.curriculo")
            )}{" "}
            *
          </Label>
          <Input
            id="curriculo"
            type="file"
            accept=".pdf,.doc,.docx,.xls,.xlsx"
            {...register("curriculo")}
            className={`w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 bg-white shadow-sm focus:ring-amber-500 ${
              errors.curriculo ? "border-red-500" : "border-gray-300"
            }`}
          />
        </div>

        {/* Mensagem */}
        <div className="space-y-4 col-span-2">
          <Label
            htmlFor="mensagem"
            className="text-[12px] font-medium text-gray-700 mb-2"
          >
            {errors.mensagem ? (
              <span className="text-red-500 text-sm">
                {errors.mensagem.message}
              </span>
            ) : (
              t("workFields.mensagem")
            )}{" "}
            *
          </Label>
          <Textarea
            id="mensagem"
            {...register("mensagem")}
            placeholder={t("workPlaceholders.mensagem")}
            rows={4}
            className={`w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 bg-white shadow-sm focus:ring-amber-500 resize-none ${
              errors.mensagem ? "border-red-500" : "border-gray-300"
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
            {isSubmitting ? t("sending") : t("workSubmit")}
          </Button>
        </div>
      </div>
    </form>
  );
}
