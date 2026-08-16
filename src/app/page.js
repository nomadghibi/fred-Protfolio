import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";
import Wizard from "@/components/models/WizardClient";
import { profileData } from "./data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative overflow-hidden">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="Dark fantasy-inspired background for Fred Dehnashi's developer portfolio"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />

      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <Wizard />
        </RenderModel>

        <section className="pointer-events-none absolute inset-x-4 bottom-8 z-20 mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-accent sm:text-base">
            {profileData.role}
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-foreground sm:text-5xl">
            {profileData.name}
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-light text-foreground/80 sm:text-base">
            {profileData.headline}
          </p>
        </section>
      </div>
    </main>
  );
}
