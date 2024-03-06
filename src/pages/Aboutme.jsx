import profile from '../assets/pictures/profile pic blurred.png'
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
import '../assets/css/aboutme.css'

function Aboutme() {
    return (
        <section className="about-me-section">
            <h2>Dependable.</h2>
            <h2>Motivated.</h2>
            <h2>Creative.</h2>
            <img src={profile} alt="Picture of Jorge Duarte" />
            <h4 className="self-description">Hello! I am a budding full-stack developer taking my first steps into the exciting world of web development. While I may be at the start of my journey, I bring a strong work ethic, creative flair, and ambition to the table. As someone who is transitioning their programming hobby into a full-time career, I can say with enthusiasm that I am truly excited about the possibilities. My dedication to programming has evolved from a pastime into a passion for programming, new technologies, and the world of development. My eagerness to learn and adapt helps me stay on top of industry trends and write code that I hope will improve user experience. I am excited about the path ahead, and I am confident in my ability to grow and contribute to the community. Let`&apos;`s connect and explore the exciting possibilities that lie ahead!</h4>
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
            <h3 className="skill-set-category">Core Programming Languages</h3>
            <div className="tech-grid">
              <div>
                <img src={html5Svg} alt="HTML5" />
              </div>
              <div>
                <img src={css3Svg} alt="CSS3" />
              </div>
              <div>
                <img src={javascriptSvg} alt="JavaScript" />
              </div>
              <div>
                <img src={typescriptSvg} alt="TypeScript" />
              </div>
              <div>
                <img src={pythonSvg} alt="Python" />
              </div>
            </div>
            <h3 className="skill-set-category">Database Technologies </h3>
            <div className="tech-grid">
              <div>
                <img src={mongodbSvg} alt="MongoDB" />
              </div>
              <div>
                <img src={mysqlSvg} alt="MySQL" />
              </div>
            </div>
            <h3 className="skill-set-category">Frontend Development</h3>
            <div className="tech-grid">
              <div>
                <img src={reactSvg} alt="React" />
              </div>
              <div>
                <img src={jquerySvg} alt="jQuery" />
              </div>
              <div>
                <img src={bootstrapSvg} alt="Bootstrap" />
              </div>
              <div>
                <img src={tailwindcssSvg} alt="Tailwind CSS" />
              </div>
              <div>
                <img src={handlebarsSvg} alt="Handlebars.js" />
              </div>
              <div>
                <img src={ejsSvg} alt="EJS" />
              </div>
            </div>
            <h3 className="skill-set-category">Backend Development</h3>
            <div className="tech-grid">
              <div>
                <img src={nodejsSvg} alt="Node.js" />
              </div>
              <div>
                <img src={expressSvg} alt="Express" />
              </div>
              <div>
                <img src={graphqlSvg} alt="GraphQL" />
              </div>
              <div>
                <img src={apolloSvg} alt="Apollo GraphQL" />
              </div>
              <div>
                <img src={sequelizeSvg} alt="Sequelize" />
              </div>
              <div>
                <img src={mongooseSvg} alt="Mongoose" />
              </div>
              <div>
                <img src={npmSvg} alt="npm" />
              </div>
            </div>
            <h3 className="skill-set-category">Version Control and Project Management</h3>
            <div className="tech-grid">
              <div>
                <img src={gitSvg} alt="Git" />
              </div>
              <div>
                <img src={githubSvg} alt="GitHub" />
              </div>
              <div>
                <img src={gitlabSvg} alt="GitLab" />
              </div>
            </div>
            <h3 className="skill-set-category">Development, Testing, and Deployment Tools</h3>
            <div className="tech-grid">
              <div>
                <img src={webpackSvg} alt="Webpack" />
              </div>
              <div>
                <img src={lighthouseSvg} alt="Lighthouse" />
              </div>
              <div>
                <img src={jestSvg} alt="Jest" />
              </div>
              <div>
                <img src={eslintSvg} alt="ESLint" />
              </div>
              <div>
                <img src={insomniaSvg} alt="Insomnia" />
              </div>
              <div>
                <img src={vscodeSvg} alt="Visual Studio Code" />
              </div>
              <div>
                <img src={codesandboxSvg} alt="CodeSandbox" />
              </div>
            </div>
            <h3 className="skill-set-category">Additional Key Skills</h3>
            <div className="skills-grid">
            <div className="skill-div" style={{ backgroundColor: "#47A248" }}>
              <h3>Mongo Atlas</h3>
            </div>
            <div className="skill-div" style={{ backgroundColor: "#47A248" }}>
              <h3>Mongo Compass</h3>
            </div>
            <div className="skill-div" style={{ backgroundColor: "#430098" }}>
              <h3>Heroku Deployment</h3>
            </div>
            <div className="skill-div" style={{ backgroundColor: "#46E3B7" }}>
              <h3>Render Deployment</h3>
            </div>
            <div className="skill-div" style={{ backgroundColor: "#4285F4" }}>
              <h3>Chrome DevTools</h3>
            </div>
            <div className="skill-div" style={{ backgroundColor: "#311C87" }}>
              <h3>Apollo Sandbox</h3>
            </div>
            <div className="skill-div" style={{ backgroundColor: "#000000" }}>
              <h3>PyCharm</h3>
            </div>
            <div className="skill-div" style={{ backgroundColor: "#6264A7" }}>
              <h3>Microsoft Teams</h3>
            </div>
            <div className="skill-div" style={{ backgroundColor: "#4A154B" }}>
              <h3>Slack</h3>
            </div>
                <div className="skill-div">
                    <h3>CLI Proficiency</h3>
                </div>
                <div className="skill-div">
                    <h3>Restful API</h3>
                </div>
                <div className="skill-div">
                    <h3>GraphQL API</h3>
                </div>
            </div>
        </section>
    );
  }
  
export default Aboutme;