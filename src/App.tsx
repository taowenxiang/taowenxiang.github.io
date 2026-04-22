import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

import Nav from './components/Nav';
import Hero from './components/sections/Hero';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

const phrases = [
  'AI Engineering Undergraduate',
  'HCI & Learning Research',
  'Research Intern',
  'Full Stack Developer',
];

/** 每个短语完整显示后停留多久再开始删除（毫秒） */
const PAUSE_AFTER_FULL_MS = 1800;
const TYPE_CHAR_MS = 80;
const DELETE_CHAR_MS = 40;

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [typedText, setTypedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);

  const { scrollYProgress } = useScroll();

  // Typing effect：打满 → 停顿 → 删除 → 下一句
  useEffect(() => {
    let cancelled = false;
    const currentPhrase = phrases[phraseIndex];

    const delay = (ms: number) =>
      new Promise<void>((resolve) => {
        setTimeout(() => resolve(), ms);
      });

    const run = async () => {
      for (let i = 1; i <= currentPhrase.length; i++) {
        if (cancelled) return;
        await delay(TYPE_CHAR_MS);
        if (cancelled) return;
        setTypedText(currentPhrase.slice(0, i));
      }
      if (cancelled) return;
      await delay(PAUSE_AFTER_FULL_MS);
      if (cancelled) return;
      for (let i = currentPhrase.length - 1; i >= 0; i--) {
        if (cancelled) return;
        await delay(DELETE_CHAR_MS);
        if (cancelled) return;
        setTypedText(currentPhrase.slice(0, i));
      }
      if (cancelled) return;
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    };

    void run();

    return () => {
      cancelled = true;
    };
  }, [phraseIndex]);

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
      <div className="noise-overlay" />

      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-400 z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <Nav
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
      />

      <Hero typedText={typedText} />

      <Education />
      <div className="section-divider" />

      <Experience />
      <div className="section-divider" />

      <Contact />

      <Footer />
    </div>
  );
};

export default App;
