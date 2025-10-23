import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface CarrocelProps {
  item: {
    id: string;
    company: string;
    logo: string;
    type: string;
    description: string;
    img: {
      img: string;
      img2: string;
      img3: string;
    };
    list: {
      localizacao: {
        title: string;
        description: string;
      };
      frente: {
        title: string;
        description: string;
      };
      nicho: {
        title: string;
        description: string;
      };
      area: {
        title: string;
        description: string;
      };
    };
  };
}

export default function Carrocel({ item }: CarrocelProps) {
  const [animationKey, setAnimationKey] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  // Força as animações toda vez que o item mudar
  useEffect(() => {
    if (item?.id) {
      setAnimationKey((prev) => prev + 1);
      setShouldAnimate(false);

      // Pequeno delay para garantir que a animação seja disparada
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [item?.id, item?.company, item?.type, item?.description]);

  // Se não há item, não renderizar nada
  if (!item || !item.id) {
    return (
      <section className="w-full px-4">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-center py-20">
          <p className="text-gray-500">Carregando...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full px-4">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center relative gap-10 pb-20">
        <motion.div
          key={`image-${animationKey}`}
          className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden rounded-sm md:rounded-none"
          initial={{ opacity: 0 }}
          animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={item?.img?.img}
            alt={item?.company}
            fill
            className="object-cover md:grayscale-100 grayscale-0 hover:grayscale-0 transition-all duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          />
        </motion.div>
        <motion.div
          key={`info-${animationKey}`}
          className="w-full h-full mx-auto flex flex-col md:flex-row items-start lg:gap-20 gap-10 justify-center relative"
          initial={{ opacity: 0 }}
          animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-full h-full flex flex-col items-center justify-center md:max-w-1/2 pb-5">
            <div className="w-full h-full flex items-center justify-between border-b border-gray-300 pb-3 pr-2">
              <p className="text-gray-500">{item?.list?.localizacao?.title}</p>
              <h2 className="text-gray-800">
                {item?.list?.localizacao?.description}
              </h2>
            </div>
            <div className="w-full h-full flex items-center justify-between border-b border-gray-300 py-3 pr-2">
              <p className="text-gray-500">{item?.list?.frente?.title}</p>
              <h2 className="text-gray-800">
                {item?.list?.frente?.description}
              </h2>
            </div>
            <div className="w-full h-full flex items-center justify-between border-b border-gray-300 py-3 pr-2">
              <p className="text-gray-500">{item?.list?.nicho?.title}</p>
              <h2 className="text-gray-800">
                {item?.list?.nicho?.description}
              </h2>
            </div>
            <div className="w-full h-full flex items-center justify-between border-b border-gray-300 py-3 pr-2">
              <p className="text-gray-500">{item?.list?.area?.title}</p>
              <h2 className="text-gray-800">{item?.list?.area?.description}</h2>
            </div>
          </div>
          <div className="w-full h-full flex flex-col items-start justify-start md:max-w-1/2 gap-5">
            <div className="w-full h-full flex  items-center justify-between gap-2">
              <Image
                src={item?.logo}
                alt={item?.company}
                width={100}
                height={100}
                quality={100}
                className={cn(
                  "object-contain sm:h-12 sm:w-22 h-10 w-10",
                  item.company.toLowerCase() === "empresa de tecnologia" &&
                    "hidden"
                )}
              />
              <div className="flex items-center justify-between gap-2 w-full px-2">
                <h2 className="text-gray-800 sm:text-3xl text-2xl font-normal">
                  {item?.company}
                </h2>
                <p className="text-gray-600 border-1 border-gray-300 rounded-full px-6 py-1 sm:text-lg text-base">
                  {item?.type}
                </p>
              </div>
            </div>
            <p className="text-gray-500 text-sm">{item?.description}</p>
          </div>
        </motion.div>
        <motion.div
          key={`gallery-${animationKey}`}
          className="w-full h-full flex flex-col md:flex-row items-center justify-between gap-5"
          initial={{ opacity: 0 }}
          animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="w-full h-full flex flex-col items-center justify-center min-h-[421] relative">
            <Image
              src={item?.img?.img2}
              alt={item?.company}
              fill
              className="object-cover md:grayscale-100 grayscale-0 hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <div className="w-full h-full flex flex-col items-center justify-center min-h-[421] relative">
            <Image
              src={item?.img?.img3}
              alt={item?.company}
              fill
              className="object-cover md:grayscale-100 grayscale-0 hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
