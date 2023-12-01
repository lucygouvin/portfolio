export default function ProjectCard({project}) {
  return (
    <div className="project-card">
      <img className="project-image" src={project.image}></img>
      <div className="project-details">
        <p className="project-title">{project.projectName}</p>
        <p className="project-description">{project.projectDescription}</p>
        <div className="project-button-group">
          <a href = {project.deployedLink}><button>Deployed Site</button></a>
          <a href = {project.githubLink}><button>GitHub</button></a>
        </div>
      </div>
    </div>
  );
}
