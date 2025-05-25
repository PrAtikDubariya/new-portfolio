import './App.css';
import Home from './Pages/Home';
import Sidebar from './Components/Sidebar';
import About from './Pages/About';
import { useEffect, useRef, useState } from 'react';
import Achievements from './Pages/Achievements';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
import ThemeChanger from './Components/ThemeChange';

function App() {
  const aboutRef = useRef(null);
  const achievementsRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const [theme, setTheme] = useState('dark');

  const scrollToRef = (section) => {
    switch (section) {
      case 'About':
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Experience':
        achievementsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Portfolio':
        portfolioRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Contacts':
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
  }, [theme]);

  return (
    <div className='App'>
      <Sidebar scrollToSection={scrollToRef} />
      <ThemeChanger theme={theme} setTheme={setTheme} />
      <Home scrollToAbout={() => scrollToRef('About')} />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={achievementsRef}>
        <Achievements />
      </div>
      <div ref={portfolioRef}>
        <Portfolio />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;