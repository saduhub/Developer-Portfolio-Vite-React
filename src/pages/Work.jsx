// Styles
import '../assets/css/work.css'
// PNG
import tuneStack from '../assets/pictures/TuneStack_Home.png'
import videoVault from '../assets/pictures/videovault.png'
import songsensei from '../assets/pictures/jorge-modifications-songsensei-screenshot.png'
import careconnect from '../assets/pictures/careconnect.png'
import gamebargains from '../assets/pictures/gamebargains.png'
import rockpaperscissors from '../assets/pictures/rockpaperscissors.png'
import pixelpenny from '../assets/pictures/pixelpenny.png'
import codequiz from '../assets/pictures/CodeQuiz.png'
import passwordgenerator from '../assets/pictures/passwordgenerator.png'
// SVG
import reactSvg from '../assets/pictures/svg/react.svg';
import html5Svg from '../assets/pictures/svg/html5.svg';
import css3Svg from '../assets/pictures/svg/css3.svg';
import javascriptSvg from '../assets/pictures/svg/javascript.svg';
import typescriptSvg from '../assets/pictures/svg/typescript.svg';
import mongodbSvg from '../assets/pictures/svg/mongodb.svg';
import mysqlSvg from '../assets/pictures/svg/mysql.svg';
import jquerySvg from '../assets/pictures/svg/jquery.svg';
import tailwindcssSvg from '../assets/pictures/svg/tailwindcss.svg';
import handlebarsSvg from '../assets/pictures/svg/handlebarsdotjs.svg';
import nodejsSvg from '../assets/pictures/svg/nodedotjs.svg';
import expressSvg from '../assets/pictures/svg/express.svg';
import graphqlSvg from '../assets/pictures/svg/graphql.svg';
import apolloSvg from '../assets/pictures/svg/apollographql.svg';
import sequelizeSvg from '../assets/pictures/svg/sequelize.svg';
import mongooseSvg from '../assets/pictures/svg/mongoose.svg';
import npmSvg from '../assets/pictures/svg/npm.svg';
import webpackSvg from '../assets/pictures/svg/webpack.svg';
import lighthouseSvg from '../assets/pictures/svg/lightHouse.svg';
import insomniaSvg from '../assets/pictures/svg/insomnia.svg';
import herokuSvg from '../assets/pictures/svg/heroku.svg';
import renderSvg from '../assets/pictures/svg/render.svg';
// import pythonSvg from '../assets/pictures/svg/python.svg';
// import bootstrapSvg from '../assets/pictures/svg/bootstrap.svg';
// import ejsSvg from '../assets/pictures/svg/ejs.svg';
// import gitSvg from '../assets/pictures/svg/git.svg';
// import githubSvg from '../assets/pictures/svg/github.svg';
// import gitlabSvg from '../assets/pictures/svg/gitlab.svg';
// import jestSvg from '../assets/pictures/svg/jest.svg';
// import eslintSvg from '../assets/pictures/svg/eslint.svg';
// import vscodeSvg from '../assets/pictures/svg/visualstudiocode.svg';
// import codesandboxSvg from '../assets/pictures/svg/codesandbox.svg';
function Work() {
    return (
      <section className="work-section">
          <h3 className="work-header">Checkout my work!</h3>
          <h4 className="work-description">Below is an overview of the work that constitutes the core of my experience. Also shown, are the specific technologies I honed during the development process of each. Six of these are collaborations in which I played a crucial frontend, backend, or full-stack role. Either as a solo developer or as a member of a developer team, I take pride in delivering my best work and sharpening my skills with every opportunity.</h4>
          <div className="work-grid">
              <div className="project-div">
                  <a href="https://github.com/jenho-webdev/TuneStack" target="_blank" rel="noreferrer">
                      <img src={tuneStack} alt="Screenshot of TuneStack Application" className="project-img" />
                  </a>
                  <div className="tech-used">
                      <img src={npmSvg} alt="Node Package Manager Logo" />
                      <img src={javascriptSvg} alt="JavaScript Logo" />
                      <img src={mysqlSvg} alt="MySQL Logo" />
                      <img src={sequelizeSvg} alt="Sequelize Logo" />
                      <img src={nodejsSvg} alt="Node JS Logo" />
                      <img src={expressSvg} alt="Express Logo" />
                      <img src={insomniaSvg} alt="Insomnia Logo" />
                      <img src={herokuSvg} alt="Heroku Logo" />
                  </div>
                  <h4> <span className="project-span">Tunestack</span> is an application for storing music. My role in this group was backend related and tied to models and database management.</h4>
              </div>
              <div className="project-div">
                  <a href="https://github.com/saduhub/VideoVault" target="_blank" rel="noreferrer">
                      <img src={videoVault} alt="Screenshot of VideoVault Application" className="project-img" />
                  </a>
                  <div className="tech-used">
                      <img src={npmSvg} alt="Node Package Manager Logo" />
                      <img src={javascriptSvg} alt="JavaScript Logo" />
                      <img src={mysqlSvg} alt="MySQL Logo" />
                      <img src={sequelizeSvg} alt="Sequelize Logo" />
                      <img src={nodejsSvg} alt="Node JS Logo" />
                      <img src={expressSvg} alt="Express Logo" />
                      <img src={handlebarsSvg} alt="Handlebars Logo" />
                      <img src={herokuSvg} alt="Heroku Logo" />
                  </div>
                  <h4><span className="project-span">VideoVault</span> is an application for TikTok videos, picutures, and gifs. My role in this group was that of leader and full-stack developer.</h4>
              </div>
              <div className="project-div">
                  <a href="https://github.com/saduhub/SongSensei" target="_blank" rel="noreferrer">
                      <img src={songsensei} alt="Screenshot of SongSensei Application" className="project-img" />
                  </a>
                  <div className="tech-used">
                      <img src={javascriptSvg} alt="JavaScript Logo" />
                      <img src={jquerySvg} alt="jQuery Logo" />
                      <img src={tailwindcssSvg} alt="Tailwind CSS Logo" />
                      <img src={css3Svg} alt="CSS3 Logo" />
                      <img src={html5Svg} alt="HTML5 Logo" />
                  </div>
                  <h4><span className="project-span">SongSensei</span> is an application for keeping up with your favorite artists. My role in this group was that of leader and frontend developer.</h4>
              </div>
              <div className="project-div">
                  <a href="https://github.com/jenho-webdev/CareConnect" target="_blank" rel="noreferrer">
                      <img src={careconnect} alt="Screenshot of CareConnect Application" className="project-img" />
                  </a>
                  <div className="tech-used">
                      <img src={npmSvg} alt="Node Package Manager Logo" />
                      <img src={javascriptSvg} alt="JavaScript Logo" />
                      <img src={mongodbSvg} alt="Mongo DB Logo" />
                      <img src={mongooseSvg} alt="Mongoose Logo" />
                      <img src={nodejsSvg} alt="Node JS Logo" />
                      <img src={expressSvg} alt="Express Logo" />
                      <img src={graphqlSvg} alt="Graph QL Logo" />
                      <img src={apolloSvg} alt="Apollo Graph QL Logo" />
                      <img src={herokuSvg} alt="Heroku Logo" />
                  </div>
                  <h4><span className="project-span">CareConnect</span> is an application for users to plan, volunteer, and coordinate assistance seamlessly. My role in this group was that of backend developer.</h4>
              </div>
              <div className="project-div">
                  <a href="https://github.com/Kiyodosan/game-store-app" target="_blank" rel="noreferrer">
                      <img src={gamebargains} alt="Screenshot of GameBargains Application" className="project-img" />
                  </a>
                  <div className="tech-used">
                      <img src={npmSvg} alt="Node Package Manager Logo" />
                      <img src={javascriptSvg} alt="JavaScript Logo" />
                      <img src={jquerySvg} alt="jQuery Logo" />
                      <img src={css3Svg} alt="CSS3 Logo" />
                      <img src={html5Svg} alt="HTML5 Logo" />
                      <img src={nodejsSvg} alt="Node JS Logo" />
                      <img src={expressSvg} alt="Express Logo" />
                      <img src={renderSvg} alt="Render Logo" />
                  </div>
                  <h4><span className="project-span">GameBargains</span> is an application for users to get the best deals from the Steam store. My role in this group was that of leader and full-stack developer.</h4>
              </div>
              <div className="project-div">
                  <a href="https://rock-paper-scissors-5871f573f399.herokuapp.com/" target="_blank" rel="noreferrer">
                      <img src={rockpaperscissors} alt="Screenshot of RockPaperScissors Application" className="project-img" />
                  </a>
                  <div className="tech-used">
                      <img src={npmSvg} alt="Node Package Manager Logo" />
                      <img src={typescriptSvg} alt="typescript Logo" />
                      <img src={webpackSvg} alt="Webpack Logo" />
                      <img src={tailwindcssSvg} alt="Tailwind CSS Logo" />
                      <img src={css3Svg} alt="CSS3 Logo" />
                      <img src={html5Svg} alt="HTML5 Logo" />
                      <img src={nodejsSvg} alt="Node JS Logo" />
                      <img src={lighthouseSvg} alt="Google Lighthouse Logo" />
                      <img src={herokuSvg} alt="Heroku Logo" />
                  </div>
                  <h4><span className="project-span">RockPaperScissors</span> is a progressive web application for users to take a break and enjoy a classNameic on or offline. My role was that of full-stack developer.</h4>
              </div>
              <div className="project-div">
                  <a href="https://github.com/saduhub" target="_blank" rel="noreferrer">
                      <img src={pixelpenny} alt="Screenshot of PixelPenny Application" className="project-img" />
                  </a>
                  <div className="tech-used">
                      <img src={npmSvg} alt="Node Package Manager Logo" />
                      <img src={reactSvg} alt="React Logo" />
                      <img src={javascriptSvg} alt="JavaScript Logo" />
                      <img src={nodejsSvg} alt="Node JS Logo" />
                      <img src={expressSvg} alt="Express Logo" />
                      <img src={mongodbSvg} alt="Mongo DB Logo" />
                      <img src={mongooseSvg} alt="Mongoose Logo" />
                      <img src={graphqlSvg} alt="Graph QL Logo" />
                      <img src={apolloSvg} alt="Apollo Graph QL Logo" />
                      <img src={herokuSvg} alt="Heroku Logo" />
                  </div>
                  <h4><span className="project-span">PixelPenny</span> is an application for users to support their favorite creators. My role was that of full-stack developer.</h4>
              </div>
              <div className="project-div">
                  <a href="https://github.com/saduhub/code-quiz" target="_blank" rel="noreferrer">
                      <img src={codequiz} alt="Screenshot of CodeQuiz Application" className="project-img" />
                  </a>
                  <div className="tech-used">
                      <img src={npmSvg} alt="Node Package Manager Logo" />
                      <img src={typescriptSvg} alt="typescript Logo" />
                      <img src={nodejsSvg} alt="Node JS Logo" />
                      <img src={jquerySvg} alt="jQuery Logo" />
                      <img src={css3Svg} alt="CSS3 Logo" />
                      <img src={html5Svg} alt="HTML5 Logo" />
                  </div>
                  <h4><span className="project-span">CodeQuiz</span> is an application for users to test their coding knowledge. My role was that of frontend developer.</h4>
              </div>
              <div className="project-div">
                  <a href="https://github.com/saduhub/Password_Generator" target="_blank" rel="noreferrer">
                      <img src={passwordgenerator} alt="Screenshot of Password Generator Application" className="project-img" />
                  </a>
                  <div className="tech-used">
                      <img src={npmSvg} alt="Node Package Manager Logo" />
                      <img src={typescriptSvg} alt="typescript Logo" />
                      <img src={nodejsSvg} alt="Node JS Logo" />
                      <img src={css3Svg} alt="CSS3 Logo" />
                      <img src={html5Svg} alt="HTML5 Logo" />
                  </div>
                  <h4><span className="project-span">PasswordGenerator</span> is an application for users to generate unique passwords - no more random keystrokes! My role was that of frontend developer.</h4>
              </div>
          </div>
      </section>
    );
}
  
export default Work;