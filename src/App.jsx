import { useEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom';
// Components
import Footer from './components/Footer';
// Styles
import './assets/css/style.css'
// Images
import favicon from './assets/pictures/svg/react.svg'
import github from './assets/pictures/github-mark-white.png'
import linkedin from './assets/pictures/LI-In-Bug.png'

function loadFavicon() {
  const link = document.querySelector("link[rel~='icon']");
  if (link) {
    link.href = favicon;
  }
}

function loadBoxicons() {
  const link = document.createElement('link');
  link.href = 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
}

function App() {
  const location = useLocation();
  // Add Link to head after component mounts with useEffect hook (side effect).  
  useEffect(() => {
    loadFavicon();
    loadBoxicons();
  }, []);

  return (
    <>
      {/* Header */}
      <header className="header-section">
        <a href="/" className="logo">JD</a>
        <input type="checkbox" id="checkbox"/>
        <label htmlFor="checkbox" className="icons">
          <i className='bx bx-menu' id="menu-icon"></i>
          <i className='bx bx-x' id="close-icon"></i>
        </label>
        {/* Nav Bar */}
        <nav className="navbar">
          <div className="container-menu-items">
            <Link to="/" style={{ color: location.pathname === '/' ? 'orange' : 'beige','--item': '0' }}>Home</Link>
            <Link to="/aboutme" style={{ color: location.pathname === '/aboutme' ? 'orange' : 'beige', '--item': '0' }}>About Me</Link>
            <Link to="/work" style={{ color: location.pathname === '/work' ? 'orange' : 'beige', '--item': '1' }}>Work</Link>
            <Link to="/contact" style={{ color: location.pathname === '/contact' ? 'orange' : 'beige', '--item': '2' }}>Contact</Link>
            <Link to="/resume" style={{ color: location.pathname === '/resume' ? 'orange' : 'beige', '--item': '3' }}>Resume</Link>
          </div>
        </nav>
      </header>
      {/* Main */}
      <main className="main-container">
        <Outlet />
      </main>
      {/* Footer */}
      <Footer linkedIn={linkedin} gitHub={github}/>
    </>
  )
}

export default App
