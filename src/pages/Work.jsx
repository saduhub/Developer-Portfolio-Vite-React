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
// Components
import Project from '../components/work/Project.jsx';

const projects = [
  {
    name: "TuneStack",
    image: tuneStack,
    url: "https://github.com/jenho-webdev/TuneStack",
    description: "is an application for storing music. My role in this group was backend related and tied to models and database management.",
    technologies: [npmSvg, javascriptSvg, mysqlSvg, sequelizeSvg, nodejsSvg, expressSvg, insomniaSvg, herokuSvg],
  },
  {
    name: "VideoVault",
    image: videoVault,
    url: "https://github.com/saduhub/VideoVault",
    description: "is an application for TikTok videos, picutures, and gifs. My role in this group was that of leader and full-stack developer.",
    technologies: [npmSvg, javascriptSvg, mysqlSvg, sequelizeSvg, nodejsSvg, expressSvg, handlebarsSvg, herokuSvg],
  },
  {
    name: "SongSensei",
    image: songsensei,
    url: "https://github.com/saduhub/SongSensei",
    description: "is an application for keeping up with your favorite artists. My role in this group was that of leader and frontend developer.",
    technologies: [javascriptSvg, jquerySvg, tailwindcssSvg, css3Svg, html5Svg],
  },
  {
    name: "CareConnect",
    image: careconnect,
    url: "https://github.com/jenho-webdev/CareConnect",
    description: "is an application for users to plan, volunteer, and coordinate assistance seamlessly. My role in this group was that of backend developer.",
    technologies: [npmSvg, javascriptSvg, mongodbSvg, mongooseSvg, nodejsSvg, expressSvg, graphqlSvg, apolloSvg, herokuSvg],
  },
  {
    name: "GameBargains",
    image: gamebargains,
    url: "https://github.com/Kiyodosan/game-store-app",
    description: "is an application for users to get the best deals from the Steam store. My role in this group was that of leader and full-stack developer.",
    technologies: [npmSvg, javascriptSvg, jquerySvg, css3Svg, html5Svg, nodejsSvg, expressSvg, renderSvg],
  },
  {
    name: "RockPaperScissors",
    image: rockpaperscissors,
    url: "https://rock-paper-scissors-5871f573f399.herokuapp.com/",
    description: "is a progressive web application for users to take a break and enjoy a classic on or offline. My role was that of full-stack developer.",
    technologies: [npmSvg, typescriptSvg, webpackSvg, tailwindcssSvg, css3Svg, html5Svg, nodejsSvg, lighthouseSvg, herokuSvg],
  },
  {
    name: "PixelPenny",
    image: pixelpenny,
    url: "https://github.com/saduhub",
    description: "is an application for users to support their favorite creators. My role was that of full-stack developer.",
    technologies: [npmSvg, reactSvg, javascriptSvg, nodejsSvg, expressSvg, mongodbSvg, mongooseSvg, graphqlSvg, apolloSvg, herokuSvg],
  },
  {
    name: "CodeQuiz",
    image: codequiz,
    url: "https://github.com/saduhub/code-quiz",
    description: "is an application for users to test their coding knowledge. My role was that of frontend developer.",
    technologies: [npmSvg, typescriptSvg, nodejsSvg, jquerySvg, css3Svg, html5Svg],
  },
  {
    name: "PasswordGenerator",
    image: passwordgenerator,
    url: "https://github.com/saduhub/Password_Generator",
    description: "is an application for users to generate unique passwords - no more random keystrokes! My role was that of frontend developer.",
    technologies: [npmSvg, typescriptSvg, nodejsSvg, css3Svg, html5Svg],
  },
];

function Work() {
  return (
    <section className="work-section">
      <h3 className="work-header">Checkout my work!</h3>
      <h4 className="work-description">Below is an overview of the work that constitutes the core of my experience. Also shown, are the specific technologies I honed during the development process of each. Six of these are collaborations in which I played a crucial frontend, backend, or full-stack role. Either as a solo developer or as a member of a developer team, I take pride in delivering my best work and sharpening my skills with every opportunity.</h4>
      <div className="work-grid">
        {projects.map((project, index) => (
          // Pass down a project object to the Project component as props. One project object passed to each Project component as the array of projects is iterated.
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Work;