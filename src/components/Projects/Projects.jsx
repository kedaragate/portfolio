import ProjectCard from "../ProjectCard/ProjectCard";
import "./Projects.css";
import ProjectData from "../../Data/ProjectData";

export default function Projects() {
  const allProjects = ProjectData.map((project) => {
    return <ProjectCard project={project} key={project.projectID} />;
  });

  return (
    <>
      <h2 className="projects-container-heading">My Projects</h2>
      <div className="projects-container">{allProjects}</div>
    </>
  );
}
