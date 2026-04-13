import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

import Nav from './components/Nav';
import Hero from './components/sections/Hero';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Achievements from './components/sections/Achievements';
import Leadership from './components/sections/Leadership';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

const phrases = [
  'AI Engineering Undergraduate',
  'HCI & Learning Research',
  'Research Intern',
  'Full Stack Developer',
];

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);

  const { scrollYProgress } = useScroll();

  // Typing effect
  useEffect(() => {
    let charIndex = 0;
    let deleting = false;
    const currentPhrase = phrases[phraseIndex];

    const interval = setInterval(() => {
      if (!deleting) {
        setTypedText(currentPhrase.slice(0, charIndex + 1));
        charIndex++;
        if (charIndex === currentPhrase.length) deleting = true;
      } else {
        setTypedText(currentPhrase.slice(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          deleting = false;
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
          clearInterval(interval);
        }
      }
    }, deleting ? 40 : 80);

    return () => clearInterval(interval);
  }, [phraseIndex]);

  // Custom cursor (desktop only)
  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX - 10, y: e.clientY - 10 });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Active section tracking
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.2 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen relative grid-pattern overflow-x-hidden">
      <div
        className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
        style={{ left: mousePos.x, top: mousePos.y }}
      />

      <div className="noise-overlay" />

      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 via-pink-500 to-amber-500 z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <Nav
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        setIsHovering={setIsHovering}
      />

      <Hero typedText={typedText} setIsHovering={setIsHovering} />

      <Education />
      <div className="section-divider" />

      <Experience setIsHovering={setIsHovering} />
      <div className="section-divider" />

      <Projects setIsHovering={setIsHovering} />
      <div className="section-divider" />

      <Skills />
      <div className="section-divider" />

      <Achievements setIsHovering={setIsHovering} />
      <div className="section-divider" />

      <Leadership />
      <div className="section-divider" />

      <Contact setIsHovering={setIsHovering} />

      <Footer />
    </div>
  );
};

export default App;
