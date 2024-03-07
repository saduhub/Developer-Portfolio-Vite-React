const Project = ({ project }) => {
  return (
    <div className="project-div">
      <div className="image-container">
        {/* No hover on mobile, leave image inside anchor tag.*/}
        <a href={project.url} target="_blank" rel="noreferrer">
          <img src={project.image} alt={`Screenshot of ${project.name}`} className="project-img" />
        </a>
        <div className="overlay">
          {/* GitHub link */}
          <a href={project.url} target="_blank" rel="noreferrer">GitHub</a>
          {/* Deployed link */}
          <a href={project.deployed} target="_blank" rel="noreferrer">Live Site</a>
        </div>
      </div>
      <div className="tech-used">
        {project.technologies.map((tech, index) => (
          <img key={index} src={tech.src} alt={tech.alt} />
        ))}
      </div>
      <h4><span className="project-span">{project.name}</span> {project.description}</h4>
    </div>
  );
};

export default Project;