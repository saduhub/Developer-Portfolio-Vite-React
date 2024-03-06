import { useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom';
import Footer from './components/Footer';
import './assets/css/style.css'
import favicon from './assets/pictures/svg/react.svg'

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
            <Link to="/" style={{ '--item': '0' }}>Home</Link>
            <Link to="/aboutme" style={{ '--item': '0' }}>About Me</Link>
            <Link to="/work" style={{ '--item': '1' }}>Work</Link>
            <Link to="/contact" style={{ '--item': '2' }}>Contact</Link>
            <Link to="/resume" style={{ '--item': '3' }}>Resume</Link>
          </div>
        </nav>
      </header>
      {/* Main */}
      <main className="main-container">
        <Outlet />
      </main>
      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
