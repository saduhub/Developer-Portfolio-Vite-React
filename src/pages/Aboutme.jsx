// PNG
import profile from '../assets/pictures/profile pic blurred.png';
// SVG
import reactSvg from '../assets/pictures/svg/react.svg';
import html5Svg from '../assets/pictures/svg/html5.svg';
import css3Svg from '../assets/pictures/svg/css3.svg';
import javascriptSvg from '../assets/pictures/svg/javascript.svg';
import typescriptSvg from '../assets/pictures/svg/typescript.svg';
import pythonSvg from '../assets/pictures/svg/python.svg';
import mongodbSvg from '../assets/pictures/svg/mongodb.svg';
import mysqlSvg from '../assets/pictures/svg/mysql.svg';
import bootstrapSvg from '../assets/pictures/svg/bootstrap.svg';
import jquerySvg from '../assets/pictures/svg/jquery.svg';
import tailwindcssSvg from '../assets/pictures/svg/tailwindcss.svg';
import handlebarsSvg from '../assets/pictures/svg/handlebarsdotjs.svg';
import ejsSvg from '../assets/pictures/svg/ejs.svg';
import nodejsSvg from '../assets/pictures/svg/nodedotjs.svg';
import expressSvg from '../assets/pictures/svg/express.svg';
import graphqlSvg from '../assets/pictures/svg/graphql.svg';
import apolloSvg from '../assets/pictures/svg/apollographql.svg';
import sequelizeSvg from '../assets/pictures/svg/sequelize.svg';
import mongooseSvg from '../assets/pictures/svg/mongoose.svg';
import npmSvg from '../assets/pictures/svg/npm.svg';
import gitSvg from '../assets/pictures/svg/git.svg';
import githubSvg from '../assets/pictures/svg/github.svg';
import gitlabSvg from '../assets/pictures/svg/gitlab.svg';
import webpackSvg from '../assets/pictures/svg/webpack.svg';
import lighthouseSvg from '../assets/pictures/svg/lightHouse.svg';
import jestSvg from '../assets/pictures/svg/jest.svg';
import eslintSvg from '../assets/pictures/svg/eslint.svg';
import insomniaSvg from '../assets/pictures/svg/insomnia.svg';
import vscodeSvg from '../assets/pictures/svg/visualstudiocode.svg';
import codesandboxSvg from '../assets/pictures/svg/codesandbox.svg';
// Styles
import '../assets/css/aboutme.css';
// Components
import SkillSet from '../components/aboutme/SkillSet';
import AdditionalSkills from '../components/aboutme/AdditionalSkills';
// Skill data to pass down as props to child components.
const skills = {
  coreLanguages: [
    { img: html5Svg, alt: 'HTML5 Logo' },
    { img: css3Svg, alt: 'CSS3 Logo' },
    { img: javascriptSvg, alt: 'JavaScript Logo' },
    { img: typescriptSvg, alt: 'TypeScript Logo' },
    { img: pythonSvg, alt: 'Python Logo' },
  ],
  databases: [
    { img: mongodbSvg, alt: 'MongoDB Logo' },
    { img: mysqlSvg, alt: 'MySQL Logo' },
  ],
  frontend: [
    { img: reactSvg, alt: 'React Logo' },
    { img: jquerySvg, alt: 'jQuery Logo' },
    { img: bootstrapSvg, alt: 'Bootstrap Logo' },
    { img: tailwindcssSvg, alt: 'Tailwind CSS Logo' },
    { img: handlebarsSvg, alt: 'Handlebars.js Logo' },
    { img: ejsSvg, alt: 'EJS Logo' },
  ],
  backend: [
    { img: nodejsSvg, alt: 'Node.js Logo' },
    { img: expressSvg, alt: 'Express Logo' },
    { img: graphqlSvg, alt: 'GraphQL Logo' },
    { img: apolloSvg, alt: 'Apollo GraphQL Logo' },
    { img: sequelizeSvg, alt: 'Sequelize Logo' },
    { img: mongooseSvg, alt: 'Mongoose Logo' },
    { img: npmSvg, alt: 'npm Logo' },
  ],
  tools: [
    { img: gitSvg, alt: 'Git Logo' },
    { img: githubSvg, alt: 'GitHub Logo' },
    { img: gitlabSvg, alt: 'GitLab Logo' },
    { img: webpackSvg, alt: 'Webpack Logo' },
    { img: lighthouseSvg, alt: 'Lighthouse Logo' },
    { img: jestSvg, alt: 'Jest Logo' },
    { img: eslintSvg, alt: 'ESLint Logo' },
    { img: insomniaSvg, alt: 'Insomnia Logo' },
    { img: vscodeSvg, alt: 'Visual Studio Code Logo' },
    { img: codesandboxSvg, alt: 'CodeSandbox Logo' },
  ],
  additionalSkills: [
    { title: "Mongo Atlas", backgroundColor: "#47A248" },
    { title: "Mongo Compass", backgroundColor: "#47A248" },
    { title: "Apollo Sandbox", backgroundColor: "#311C87" },
    { title: "Heroku Deployment", backgroundColor: "#430098" },
    { title: "Render Deployment", backgroundColor: "#46E3B7" },
    { title: "Chrome DevTools", backgroundColor: "#4285F4" },
    { title: "PyCharm", backgroundColor: "#000000" },
    { title: "Microsoft Teams", backgroundColor: "#6264A7" },
    { title: "Slack", backgroundColor: "#4A154B" },
    { title: "CLI Proficiency", backgroundColor: "#9c2b2b" },
    { title: "Restful API", backgroundColor: "#9c2b2b" },
    { title: "GraphQL API", backgroundColor: "#9c2b2b" },
  ],
};

function Aboutme() {
  return (
    <section className="about-me-section">
      <h2>Dependable.</h2>
      <h2>Motivated.</h2>
      <h2>Creative.</h2>
      <img src={profile} alt="Profile of Jorge Duarte" />
      <h4 className="self-description">
        Hello! I&apos;m a budding full-stack developer taking my first steps into the exciting world of web development. While I may be at the start of my journey, I bring a strong work ethic, creative flair, and ambition to the table. As someone who is transitioning their programming hobby into a full-time career, I can say with enthusiasm that I&apos;m truly excited about the possibilities. My dedication to programming has evolved from a pastime into a passion for programming, new technologies, and the world of development. My eagerness to learn and adapt helps me stay on top of industry trends and write code that I hope will improve user experience. I&apos;m excited about the path ahead, and I&apos;m confident in my ability to grow and contribute to the community. Let&apos;s connect and explore the exciting possibilities that lie ahead!
      </h4>
      <div className="stats-grid">
        <div className="stat-item">
          <h3>20+</h3>
          <h4>Projects</h4>
        </div>
        <div className="stat-item">
          <h3>1400+</h3>
          <h4>Coding hours</h4>
        </div>
        <div className="stat-item">
          <h3>25+</h3>
          <h4>Coding Skills</h4>
        </div>
        <div className="stat-item">
          <h3>2</h3>
          <h4>Languages (JS/Python)</h4>
        </div>
      </div>
      <SkillSet title="Core Programming Languages" skills={skills.coreLanguages} />
      <SkillSet title="Database Technologies" skills={skills.databases} />
      <SkillSet title="Frontend Development" skills={skills.frontend} />
      <SkillSet title="Backend Development" skills={skills.backend} />
      <SkillSet title="Version Control and Project Management" skills={skills.tools} />
      <AdditionalSkills title="Additional Key Skills" skills={skills.additionalSkills} />
    </section>
  );
}

export default Aboutme;

