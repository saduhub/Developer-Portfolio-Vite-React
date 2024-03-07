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
    deployed: "https://tunestack-v1-74649ac6d540.herokuapp.com/login",
    description: "is an application for storing music. My role was backend related and tied to models and database management.",
    technologies: [
      { src: npmSvg, alt: "npm logo", href: "https://www.npmjs.com/" },
      { src: javascriptSvg, alt: "JavaScript logo", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { src: mysqlSvg, alt: "MySQL logo", href: "https://www.mysql.com/" },
      { src: sequelizeSvg, alt: "Sequelize logo", href: "https://sequelize.org/" },
      { src: nodejsSvg, alt: "Node.js logo", href: "https://nodejs.org/" },
      { src: expressSvg, alt: "Express logo", href: "https://expressjs.com/" },
      { src: insomniaSvg, alt: "Insomnia logo", href: "https://insomnia.rest/" },
      { src: herokuSvg, alt: "Heroku logo", href: "https://www.heroku.com/" },
    ],
  },
  {
    name: "VideoVault",
    image: videoVault,
    url: "https://github.com/saduhub/VideoVault",
    deployed: "https://video-vault-a9fdebd79a00.herokuapp.com/",
    description: "is an application for TikTok videos, pictures, and gifs. My role was that of leader and full-stack developer.",
    technologies: [
      { src: npmSvg, alt: "npm logo", href: "https://www.npmjs.com/" },
      { src: javascriptSvg, alt: "JavaScript logo", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { src: mysqlSvg, alt: "MySQL logo", href: "https://www.mysql.com/" },
      { src: sequelizeSvg, alt: "Sequelize logo", href: "https://sequelize.org/" },
      { src: nodejsSvg, alt: "Node.js logo", href: "https://nodejs.org/" },
      { src: expressSvg, alt: "Express logo", href: "https://expressjs.com/" },
      { src: handlebarsSvg, alt: "Handlebars logo", href: "https://handlebarsjs.com/" },
      { src: herokuSvg, alt: "Heroku logo", href: "https://www.heroku.com/" },
    ],
  },
  {
    name: "SongSensei",
    image: songsensei,
    url: "https://github.com/saduhub/SongSensei",
    deployed: "https://saduhub.github.io/SongSensei/",
    description: "is an application for keeping up with your favorite artists. My role in this group was that of leader and frontend developer.",
    technologies: [
      { src: javascriptSvg, alt: "JavaScript logo", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { src: jquerySvg, alt: "jQuery logo", href: "https://jquery.com/" },
      { src: tailwindcssSvg, alt: "Tailwind CSS logo", href: "https://tailwindcss.com/" },
      { src: css3Svg, alt: "CSS3 logo", href: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3" },
      { src: html5Svg, alt: "HTML5 logo", href: "https://developer.mozilla.org/en-US/docs/Web/HTML/HTML5" },
    ],
  },
  {
    name: "CareConnect",
    image: careconnect,
    url: "https://github.com/jenho-webdev/CareConnect",
    deployed: "https://care-connect-378fa5174d96.herokuapp.com/",
    description: "is an application for users to plan, volunteer, and coordinate assistance seamlessly. My role was that of backend developer.",
    technologies: [
      { src: npmSvg, alt: "npm logo", href: "https://www.npmjs.com/" },
      { src: javascriptSvg, alt: "JavaScript logo", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { src: mongodbSvg, alt: "MongoDB logo", href: "https://www.mongodb.com/" },
      { src: mongooseSvg, alt: "Mongoose logo", href: "https://mongoosejs.com/" },
      { src: nodejsSvg, alt: "Node.js logo", href: "https://nodejs.org/" },
      { src: expressSvg, alt: "Express logo", href: "https://expressjs.com/" },
      { src: graphqlSvg, alt: "GraphQL logo", href: "https://graphql.org/" },
      { src: apolloSvg, alt: "Apollo Client logo", href: "https://www.apollographql.com/client/" },
      { src: herokuSvg, alt: "Heroku logo", href: "https://www.heroku.com/" },
    ],
  },
  {
    name: "GameBargains",
    image: gamebargains,
    url: "https://github.com/Kiyodosan/game-store-app",
    deployed: "https://game-bargains.onrender.com/",
    description: "is an application for users to get the best deals from the Steam store. My role in this group was that of leader and full-stack developer.",
    technologies: [
      { src: npmSvg, alt: "npm logo", href: "https://www.npmjs.com/" },
      { src: javascriptSvg, alt: "JavaScript logo", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { src: jquerySvg, alt: "jQuery logo", href: "https://jquery.com/" },
      { src: css3Svg, alt: "CSS3 logo", href: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3" },
      { src: html5Svg, alt: "HTML5 logo", href: "https://developer.mozilla.org/en-US/docs/Web/HTML/HTML5" },
      { src: nodejsSvg, alt: "Node.js logo", href: "https://nodejs.org/" },
      { src: expressSvg, alt: "Express logo", href: "https://expressjs.com/" },
      { src: renderSvg, alt: "Render logo", href: "https://render.com/" },
    ],
  },
  {
    name: "RockPaperScissors",
    image: rockpaperscissors,
    url: "https://github.com/saduhub/Rock-Paper-Scissors-TS-Tailwind-Webpack-",
    deployed: "https://rock-paper-scissors-5871f573f399.herokuapp.com/",
    description: "is a progressive web application for users to take a break and enjoy a classic on or offline. My role was that of full-stack developer.",
    technologies: [
      { src: npmSvg, alt: "npm logo", href: "https://www.npmjs.com/" },
      { src: typescriptSvg, alt: "TypeScript logo", href: "https://www.typescriptlang.org/" },
      { src: webpackSvg, alt: "Webpack logo", href: "https://webpack.js.org/" },
      { src: tailwindcssSvg, alt: "Tailwind CSS logo", href: "https://tailwindcss.com/" },
      { src: css3Svg, alt: "CSS3 logo", href: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3" },
      { src: html5Svg, alt: "HTML5 logo", href: "https://developer.mozilla.org/en-US/docs/Web/HTML/HTML5" },
      { src: nodejsSvg, alt: "Node.js logo", href: "https://nodejs.org/" },
      { src: lighthouseSvg, alt: "Lighthouse logo", href: "https://developers.google.com/web/tools/lighthouse/" },
      { src: herokuSvg, alt: "Heroku logo", href: "https://www.heroku.com/" },
    ],
  },
  {
    name: "PixelPenny",
    image: pixelpenny,
    url: "https://github.com/saduhub",
    deployed: "https://github.com/saduhub",
    description: "is an application for users to support their favorite creators. My role was that of full-stack developer.",
    technologies: [
      { src: npmSvg, alt: "npm logo", href: "https://www.npmjs.com/" },
      { src: reactSvg, alt: "React logo", href: "https://reactjs.org/" },
      { src: javascriptSvg, alt: "JavaScript logo", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { src: nodejsSvg, alt: "Node.js logo", href: "https://nodejs.org/" },
      { src: expressSvg, alt: "Express logo", href: "https://expressjs.com/" },
      { src: mongodbSvg, alt: "MongoDB logo", href: "https://www.mongodb.com/" },
      { src: mongooseSvg, alt: "Mongoose logo", href: "https://mongoosejs.com/" },
      { src: graphqlSvg, alt: "GraphQL logo", href: "https://graphql.org/" },
      { src: apolloSvg, alt: "Apollo Client logo", href: "https://www.apollographql.com/client/" },
      { src: herokuSvg, alt: "Heroku logo", href: "https://www.heroku.com/" },
    ],
  },
  {
    name: "CodeQuiz",
    image: codequiz,
    url: "https://github.com/saduhub/code-quiz",
    deployed: "https://saduhub.github.io/code-quiz/",
    description: "is an application for users to test their coding knowledge. My role was that of frontend developer.",
    technologies: [
      { src: npmSvg, alt: "npm logo", href: "https://www.npmjs.com/" },
      { src: typescriptSvg, alt: "TypeScript logo", href: "https://www.typescriptlang.org/" },
      { src: nodejsSvg, alt: "Node.js logo", href: "https://nodejs.org/" },
      { src: jquerySvg, alt: "jQuery logo", href: "https://jquery.com/" },
      { src: css3Svg, alt: "CSS3 logo", href: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3" },
      { src: html5Svg, alt: "HTML5 logo", href: "https://developer.mozilla.org/en-US/docs/Web/HTML/HTML5" },
    ],
  },
  {
    name: "PasswordGenerator",
    image: passwordgenerator,
    url: "https://github.com/saduhub/Password_Generator",
    deployed: "https://saduhub.github.io/Password_Generator/",
    description: "is an application for users to generate unique passwords - no more random keystrokes! My role was that of frontend developer.",
    technologies: [
      { src: npmSvg, alt: "npm logo", href: "https://www.npmjs.com/" },
      { src: typescriptSvg, alt: "TypeScript logo", href: "https://www.typescriptlang.org/" },
      { src: nodejsSvg, alt: "Node.js logo", href: "https://nodejs.org/" },
      { src: css3Svg, alt: "CSS3 logo", href: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3" },
      { src: html5Svg, alt: "HTML5 logo", href: "https://developer.mozilla.org/en-US/docs/Web/HTML/HTML5" },
    ],
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