import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="w-full h-full bg-[#1E1E1E] py-10 text-white px-4">
      <div className="w-full h-full max-w-7xl mx-auto mb-5 flex flex-col md:flex-row gap-8">
        <div className="w-full md:max-w-[300px] lg:max-w-[500px]">
          <div className="flex flex-col gap-8 md:max-w-[300px]">
            <Image src="/logo-footer.png" alt="Logo" width={80} height={80} />
            <p className="text-sm">{t("description")}</p>
          </div>
        </div>
        <div className="w-full grid xs:grid-cols-3 grid-cols-1 gap-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-bold text-yellow-500">
              {t("links.title")}
            </h2>
            <Link href="/" className="text-sm font-normal">
              {t("links.link1")}
            </Link>
            <Link href="/" className="text-sm font-normal">
              {t("links.link2")}
            </Link>
            <Link href="/" className="text-sm font-normal">
              {t("links.link3")}
            </Link>
            <Link href="/" className="text-sm font-normal">
              {t("links.link4")}
            </Link>
            <Link href="/" className="text-sm font-normal">
              {t("links.link5")}
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-bold text-yellow-500">
              {t("links2.title")}
            </h2>
            <Link href="/" className="text-sm font-normal">
              {t("links2.link1")}
            </Link>
            <Link href="/" className="text-sm font-normal">
              {t("links2.link2")}
            </Link>
            <Link href="/" className="text-sm font-normal">
              {t("links2.link3")}
            </Link>
            <Link href="/" className="text-sm font-normal">
              {t("links2.link4")}
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-bold text-yellow-500">
              {t("links3.title")}
            </h2>
            <Link href="/" className="text-sm font-normal">
              {t("links3.link1")}
            </Link>
            <Link href="/" className="text-sm font-normal">
              {t("links3.link2")}
            </Link>
            <Link href="/" className="text-sm font-normal">
              {t("links3.link3")}
            </Link>
            <Link href="/" className="text-sm font-normal">
              {t("links3.link4")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
