import FormContato from "@/components/Form-Contato/index";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="w-full h-full overflow-hidden flex flex-col gap-10 items-center justify-center">
      <section className="w-full h-full overflow-hidden min-h-[100vh] relative text-white">
        <Image
          src="/contact.jpg"
          alt="Contact"
          width={1920}
          height={1080}
          className="object-cover w-full h-full max-h-[100vh] "
        />
      </section>
      <FormContato />
    </div>
  );
}
