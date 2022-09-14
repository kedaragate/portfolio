import "./ProjectCard.css";

export default function ProjectCard(props) {
  const { project } = props;

  return (
    <div className="project-card">
      <div className="project-img-container">
        <img src={project.projectImg} className="project-img" />
      </div>

      <div className="project-info">
        <a className="project-name" href={project.projectLink}>
          <h3>{project.projectName}</h3>
        </a>

        <p>{project.projectInfo}</p>
      </div>
    </div>
  );
}
