const SkillSet = ({ title, skills }) => {
    return (
      <>
        <h3 className="skill-set-category">{title}</h3>
        <div className="tech-grid">
          {skills.map((skill, index) => (
            <div key={index}>
              <img src={skill.img} alt={skill.alt} />
            </div>
          ))}
        </div>
      </>
    );
};
  
export default SkillSet;