import { useEffect } from 'react'
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
            <a href="/" style={{ '--item': '0' }}>Home</a>
            <a href="/aboutme" style={{ '--item': '0' }}>About Me</a>
            <a href="/work" style={{ '--item': '1' }}>Work</a>
            <a href="/contact" style={{ '--item': '2' }}>Contact</a>
            <a href="/resume" style={{ '--item': '3' }}>Resume</a>
          </div>
        </nav>
      </header>
      {/* Main */}
      <main className="main-container">
        {/* Components here */}
      </main>
      {/* Footer */}
      {/* Component Here */}
    </>
  )
}

export default App
