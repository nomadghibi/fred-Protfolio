import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import Staff from "@/components/models/StaffClient";

export const metadata = {
  title: "Projects",
  description: "Selected GitHub projects by Fred Dehnashi.",
};

export default function Projects() {
  return (
    <>
      <Image
        src={bg}
        alt="Creative background for the projects page"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
        priority
        sizes="100vw"
      />

      <ProjectList projects={projectsData} />

      <div className="flex items-center justify-center fixed top-16 lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen opacity-70">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </>
  );
}
