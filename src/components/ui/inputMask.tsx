"use client";

import { useEffect, useState } from "react";
import { Input } from "./input";

interface InputMaskProps {
  name: string;
  format: string;
  placeholder?: string;
  className?: string;
  type?: "text" | "tel";
  disabled?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  ref?: React.Ref<HTMLInputElement>;
}

// Função para aplicar máscara
const applyMask = (value: string, format: string): string => {
  const numbers = value.replace(/\D/g, "");
  let result = "";
  let numberIndex = 0;

  for (let i = 0; i < format.length && numberIndex < numbers.length; i++) {
    if (format[i] === "#") {
      result += numbers[numberIndex];
      numberIndex++;
    } else {
      result += format[i];
    }
  }

  return result;
};

// Função para remover máscara
const removeMask = (value: string): string => {
  return value.replace(/\D/g, "");
};

export default function InputMask({
  name,
  format,
  placeholder,
  className = "rounded-md text-lg px-6 py-4 border focus:ring-2",
  type = "text",
  disabled = false,
  value = "",
  onChange,
  onBlur,
  ref,
}: InputMaskProps) {
  const [displayValue, setDisplayValue] = useState(applyMask(value, format));

  // Atualiza o displayValue quando o value externo muda
  useEffect(() => {
    setDisplayValue(applyMask(value, format));
  }, [value, format]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = removeMask(e.target.value);
    const maskedValue = applyMask(rawValue, format);

    setDisplayValue(maskedValue);
    onChange?.(maskedValue); // Retorna o valor formatado
  };

  return (
    <Input
      name={name}
      type={type}
      value={displayValue}
      onChange={handleChange}
      onBlur={onBlur}
      className={className}
      placeholder={placeholder}
      disabled={disabled}
      ref={ref}
    />
  );
}
