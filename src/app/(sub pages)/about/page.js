import Image from "next/image";
import AboutDetails from "@/components/about";
import { profileData } from "../../data";

export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <>
      <Image
        src="/background/ai-systems-hero.webp"
        fill
        priority
        sizes="100vw"
        alt="Creative background for the about page"
        className="-z-50 fixed object-cover object-center opacity-25"
      />

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center text-center w-full px-4">
          <h1 className="font-bold text-5xl xs:text-6xl sm:text-7xl lg:text-8xl text-accent">
            {profileData.name}
          </h1>
          <p className="font-light text-foreground text-base sm:text-lg mt-2">
            {profileData.role} · {profileData.location}
          </p>
        </div>
      </div>

      <AboutDetails />
    </>
  );
}
