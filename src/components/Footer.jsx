function Footer({gitHub, linkedIn}) {
    return (
      <footer className="footer">
        <a href="https://github.com/saduhub" target="_blank" rel="noreferrer">
          <img src={gitHub} alt="GitHub Logo" />
        </a>
        <a href="https://www.linkedin.com/in/jorge-duarte-625105281/" target="_blank" rel="noreferrer">
          <img src={linkedIn} alt="LinkedIn Logo" />
        </a>
      </footer>
    );
}
  
export default Footer;