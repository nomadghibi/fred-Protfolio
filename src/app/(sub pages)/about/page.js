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
        alt="Abstract AI system architecture background"
        className="-z-50 fixed object-cover object-center opacity-10"
      />

      <section className="sub-hero">
        <p className="eyebrow">{profileData.role}</p>
        <h1 style={{
          margin: 0,
          color: "white",
          fontSize: "clamp(3rem, 7vw, 6rem)",
          letterSpacing: "-0.06em",
          fontWeight: 620,
          lineHeight: 0.95,
        }}>
          {profileData.name}
        </h1>
        <p style={{ marginTop: "18px", color: "#94a3b8", fontSize: ".95rem" }}>
          {profileData.location}
        </p>
      </section>

      <div className="sub-content">
        <AboutDetails />
      </div>
    </>
  );
}
