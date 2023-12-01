export default function ProjectCard({project}) {
  return (
    <div className="project-card">
      <img className="project-image" src={project.image}></img>
      <div className="project-details">
        <p className="project-title">{project.projectName}</p>
        <p className="project-description">{project.projectDescription}</p>
        <div className="project-button-group">
          <a href = {project.deployedLink}><img src="./website.png"></img></a>
          <a href = {project.githubLink}><img src="./github_big.png"></img></a>
        </div>
      </div>
    </div>
  );
}
