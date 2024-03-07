const Project = ({ project }) => {
    return (
      <div className="project-div">
        <a href={project.url} target="_blank" rel="noreferrer">
          <img src={project.image} alt={`Screenshot of ${project.name} Application`} className="project-img" />
        </a>
        <div className="tech-used">
          {project.technologies.map((tech, index) => (
            <img key={index} src={tech} alt="Technology Logo" />
          ))}
        </div>
        <h4><span className="project-span">{project.name}</span> {project.description}</h4>
      </div>
    );
};
  
export default Project;