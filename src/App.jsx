import { useState, useEffect } from 'react';
import './App.css';
import luffy from './assets/luffy.png';
import sub from './assets/sub.png';
import { Navbar } from '../src/components/ Navbar';
import { About } from '../src/components/About';
import { Contact } from './components/Contact';
import { Footer } from '../src/components/Footer';
import { Hero } from '../src/components/Hero';
import { Project } from '../src/components/Project';
import { Skills } from '../src/components/Skills';

function App() {
  // Initialize dark mode based on localStorage or system preference
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return JSON.parse(savedMode);
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Apply or remove dark class and save preference
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      {/* Dark mode toggle */}
      <input
        type="checkbox"
        id="darkMode"
        checked={darkMode}
        onChange={toggleDarkMode}
      />
      <div className="wrapper">
        <label htmlFor="darkMode" aria-label="Toggle dark mode">
          <i className="fa-solid fa-circle-half-stroke"></i>
        </label>

        {/* Navbar */}
        <Navbar />

        {/* Hero section */}
        <Hero />

        {/* Skills section */}
        <Skills />

        {/* Project section */}
        <Project />

        {/* About me section */}
        <About />

        {/* Contact section */}
        <Contact />

        {/* Footer section */}
        <Footer />
      </div>
    </>
  );
}

export default App;