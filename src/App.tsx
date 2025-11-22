import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Articles from './components/Articles';
import Timeline from './components/Timeline';
import InteractiveMap from './components/InteractiveMap';
import Gallery from './components/Gallery';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'articles', 'timeline', 'map', 'gallery', 'about'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setCurrentSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          currentSection={currentSection}
        />
        <main>
          <Hero />
          <Articles />
          <Timeline />
          <InteractiveMap />
          <Gallery />
          <About />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
