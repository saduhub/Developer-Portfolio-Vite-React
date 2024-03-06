const AdditionalSkills = ({ title, skills }) => {
    return (
      <>
        <h3 className="skill-set-category">{title}</h3>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-div" style={{ backgroundColor: skill.backgroundColor || 'transparent' }}>
              <h3>{skill.title}</h3>
            </div>
          ))}
        </div>
      </>
    );
};
  
export default AdditionalSkills;

