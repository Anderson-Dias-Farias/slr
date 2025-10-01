"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { AnimatePresence, motion } from "framer-motion";
import { Globe, Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { name: t("navigation.home"), href: "/" },
    { name: t("navigation.about"), href: "/abt" },
    { name: t("navigation.services"), href: "/services" },
    { name: t("navigation.cases"), href: "/cases" },
    { name: t("navigation.contact"), href: "/contact" },
  ];

  const url =
    pathname === "/" || pathname.split("/")[1] === "abt" ? true : false;

  // Função para verificar se um item do menu está ativo
  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const languages = [
    { code: "pt-br", name: t("languages.pt") },
    { code: "en", name: t("languages.en") },
    { code: "es", name: t("languages.es") },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLanguageChange = (newLocale: string) => {
    // Usa o router do next-intl que gerencia automaticamente as traduções

    router.push(pathname, { locale: newLocale });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Ativa o background quando o scroll for maior que 50px
      setIsScrolled(scrollTop > 50);
    };

    // Verifica a posição inicial quando o componente monta
    const initialScroll = window.scrollY;
    setIsScrolled(initialScroll > 50);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        isScrolled ? (url ? "bg-black/95" : "bg-white") : "bg-transparent"
      }  fixed top-0 z-50 w-full py-2 transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div
                className={`rounded-lg flex items-center justify-center relative ${
                  url ? "h-10 w-20 " : "h-15 w-25"
                }`}
              >
                <Image
                  src={url ? "/logo.svg" : "/logo-preto.png"}
                  alt="SLR"
                  fill
                  className={`object-cover bg-black ${
                    url ? "bg-black" : "bg-white"
                  }`}
                  priority
                />
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex 2xl:space-x-8 xl:space-x-4 space-x-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={
                  item.href as
                    | "/"
                    | "/abt"
                    | "/services"
                    | "/cases"
                    | "/contact"
                }
                className={`px-3 py-2 text-sm transition-colors duration-200 uppercase ${
                  isActiveRoute(item.href)
                    ? "text-[#FFBE00]"
                    : url
                    ? "text-white hover:text-[#FFBE00]"
                    : "text-black hover:text-[#FFBE00]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4 gap-4">
            {/* Language Selector */}
            <Select value={locale} onValueChange={handleLanguageChange}>
              <SelectTrigger
                className={`w-24 h-9 text-white ${
                  url ? "text-white" : "text-black"
                }`}
              >
                <div
                  className={`flex items-center ${
                    url ? "text-white" : "text-black"
                  }`}
                >
                  <Globe
                    className={`w-4 h-4 mr-2 ${
                      url ? "text-white" : "text-black"
                    }`}
                  />
                  {languages.find((lang) => lang.code === locale)?.code}
                </div>
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.code} value={lang.code}>
                    {lang.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="bg-[#FFBE00] hover:bg-[#2C2C2C] hover:text-[#FFBE00] hover:border-[#FFBE00] border border-transparent transition-all duration-300 text-black uppercase rounded-full px-8 py-2"
            >
              {t("header.cta")}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="p-2"
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? (
                  <X
                    className={`h-6 w-6  ${url ? "text-white" : "text-black"}`}
                  />
                ) : (
                  <Menu
                    className={`h-6 w-6  ${url ? "text-white" : "text-black"}`}
                  />
                )}
              </motion.div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`lg:hidden border-t border-white border-l border-r ${
                url ? "bg-black" : "bg-white"
              }`}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                      isActiveRoute(item.href)
                        ? "text-yellow-600 bg-yellow-600/10"
                        : url
                        ? "text-white hover:text-yellow-600 hover:bg-gray-50"
                        : "text-black hover:text-yellow-600 hover:bg-gray-50"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link
                      href={
                        item.href as
                          | "/"
                          | "/abt"
                          | "/services"
                          | "/cases"
                          | "/contact"
                      }
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Language Selector */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: menuItems.length * 0.1 }}
                  className="px-3 py-2"
                >
                  <Select value={locale} onValueChange={handleLanguageChange}>
                    <SelectTrigger
                      className={`w-full ${url ? "text-white" : "text-black"}`}
                    >
                      <div className="flex items-center">
                        <Globe
                          className={`w-4 h-4 mr-2 ${
                            url ? "text-white" : "text-black"
                          }`}
                        />
                        {languages.find((lang) => lang.code === locale)?.code}
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      {languages.map((lang) => (
                        <SelectItem key={lang.code} value={lang.code}>
                          {lang.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </motion.div>

                {/* Mobile CTA Button */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (menuItems.length + 1) * 0.1 }}
                  className="px-3 py-2"
                >
                  <Link
                    href="/contact"
                    className="w-full bg-yellow-600 hover:bg-yellow-700 text-black"
                  >
                    {t("header.cta")}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
