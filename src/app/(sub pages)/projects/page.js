import ProjectList from "@/components/projects";
import { projectsData } from "../../data";

export const metadata = {
  title: "Projects",
  description: "Selected GitHub projects by Fred Dehnashi.",
};

export default function Projects() {
  return <ProjectList projects={projectsData} />;
}
