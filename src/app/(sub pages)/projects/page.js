import Image from "next/image";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";

export const metadata = {
  title: "Projects",
  description: "Selected GitHub projects by Fred Dehnashi.",
};

export default function Projects() {
  return (
    <>
      <Image
        src="/background/ai-systems-hero.webp"
        fill
        alt="Creative background for the projects page"
        className="-z-50 fixed object-cover object-center opacity-20"
        priority
        sizes="100vw"
      />

      <ProjectList projects={projectsData} />
    </>
  );
}
