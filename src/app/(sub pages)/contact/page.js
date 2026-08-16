import Image from "next/image";
import Form from "@/components/contact/Form";
import { profileData } from "../../data";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src="/background/ai-systems-hero.webp"
        fill
        alt="Creative background for the contact page"
        priority
        sizes="100vw"
        className="-z-50 fixed object-cover object-center opacity-20"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-5 w-full sm:w-3/4">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">
            Collaboration
          </p>
          <h1 className="text-accent font-semibold text-center text-4xl sm:text-5xl capitalize">
            Build something useful
          </h1>
          <p className="text-center font-light text-sm xs:text-base leading-relaxed">
            Connect with {profileData.name} about AI strategy, SaaS product
            development, private AI, workflow automation, data systems, or a
            practical business software project.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
