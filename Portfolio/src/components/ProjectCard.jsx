export default function ProjectCard() {
  return (
    <div className="project-card">
      <img className="project-image" src="./sample_project.png"></img>
      <div className="project-details">
        <p className="project-title">Project Title</p>
        <p className="project-description">Project Description</p>
        <div className="project-button-group">
          <button>Deployed Site</button>
          <button>GitHub</button>
        </div>
      </div>
    </div>
  );
}
