import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github, ExternalLink, Award, Code, GraduationCap, Briefcase, Lightbulb, Instagram, Menu, Phone, Globe, Cpu, Gamepad2, Brain, Heart, Music, ChevronDown, FileText, ArrowUpRight, X } from 'lucide-react';

const SectionHeading = ({ children, icon: Icon }: { children: string; icon: React.ElementType }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-16">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : {}}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-violet-600/20 to-pink-600/20 border border-violet-500/20 flex items-center justify-center flex-shrink-0"
      >
        <Icon size={20} className="text-violet-400 sm:hidden" />
        <Icon size={24} className="text-violet-400 hidden sm:block" />
      </motion.div>
      <div className="min-w-0">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white truncate"
        >
          {children}
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "100%" } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="h-[2px] mt-2 bg-gradient-to-r from-violet-500 to-transparent"
        />
      </div>
    </motion.div>
  );
};

const RevealCard = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [expandedExp, setExpandedExp] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const navBg = useTransform(scrollYProgress, [0, 0.05], ['rgba(10,10,15,0)', 'rgba(10,10,15,0.9)']);

  const phrases = [
    'AI Engineering Undergraduate',
    'HCI & Learning Research',
    'Research Intern',
    'Full Stack Developer',
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    let charIndex = 0;
    let deleting = false;
    const currentPhrase = phrases[phraseIndex];

    const interval = setInterval(() => {
      if (!deleting) {
        setTypedText(currentPhrase.slice(0, charIndex + 1));
        charIndex++;
        if (charIndex === currentPhrase.length) {
          deleting = true;
        }
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

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX - 10, y: e.clientY - 10 });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.2 });
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const navItems = ['about', 'education', 'experience', 'projects', 'skills', 'leadership', 'contact'];

  const experiences = [
    {
      title: 'LLM Full Stack Software Engineering Intern',
      company: 'NOVO AI - HKSTP (heynovo.ai)',
      period: 'Feb 2026 - Aug 2026',
      location: 'Remote, HK',
      points: [
        'Developed full-stack features for an AI-driven insurance platform utilizing LLMs and Computer Vision to detect over-billing and fraud.',
        'Implemented automated analysis tools that cross-reference claim data with visual evidence to identify billing discrepancies.',
        'Built scalable backend APIs and frontend interfaces to streamline remote claim assessments and improve processing accuracy.'
      ],
      color: 'from-violet-500 to-purple-500'
    },
    {
      title: 'X Program Researcher',
      company: 'HKUST-GZ',
      period: 'Sep 2025 - Aug 2026',
      points: [
        'Conducted research titled "Experimental evaluation of Deep Reinforcement Learning algorithms for HVAC control".',
        'Developed models to predict HVAC cooling loads and trained Reinforcement Learning algorithms to optimize performance.',
        'Implemented cost-saving strategies by optimizing energy consumption patterns based on real-time data.'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Full Stack Web Development Intern',
      company: 'HKUST-GZ',
      period: 'Nov 2025 - Mar 2026',
      points: [
        'Developed a commercial website for a company specializing in homoepitaxial wafers and related services.',
        'Managed the complete infrastructure setup, including MongoDB integration and Google Cloud hosting.',
        'Built and deployed both frontend interfaces and backend services to ensure a seamless user experience.'
      ],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Research Assistant',
      company: 'HKUST-GZ',
      period: 'Jan 2024 - Present',
      points: [
        'Contributed to the development and deployment of machine learning models in collaborative research projects.',
        'Engaged in full-stack development, including backend services and frontend interfaces.',
        'Integrated 3D components into webapps using Unity3D and C# for interactive system features.',
        'Worked on multiple industry-collaboration projects alongside cross-functional teams.'
      ],
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'UG Research Program, 2025',
      company: 'HKUST-GZ',
      period: 'Jun 2025 - Aug 2025',
      points: [
        'Developed a federated learning algorithm to predict electricity consumption.',
        'Trained it on real data on multiple devices with a shared network.',
        'Developed the final LSTM model through decentralized federated learning and deployed it in use.'
      ],
      color: 'from-amber-500 to-orange-500'
    },
    {
      title: 'Visiting Research Program, 2025',
      company: 'Fujian Medical University',
      period: 'Jun 2025 - Jul 2025',
      points: [
        'Worked in developing AI algorithm for medical imaging MRI imaging to denoise MRI image.',
        'Collected MRI data and cleared it for model use case.'
      ],
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'UG Research Program, 2024',
      company: 'HKUST-GZ',
      period: 'Jun 2024 - Aug 2024',
      points: [
        'Developed a computer vision-based detection system for identifying faulty manhole covers, designed for deployment on drones.',
        'Collected and annotated real-world data to custom-train a deep learning model for accurate detection.',
        'Built a lightweight application interface optimized for Jetson Nano to run the model in real-time onboard a drone.'
      ],
      color: 'from-indigo-500 to-violet-500'
    }
  ];

  const projects = [
    {
      title: 'Musician-Llama',
      desc: 'Fine-tuned the Llama-3.2-1B-Instruct Large Language Model to generate MIDI music files. Published the model and dataset on Hugging Face.',
      tags: ['GenAI', 'LLM', 'HuggingFace'],
      link: 'https://huggingface.co/Ghanibhuti/Musician-Llama-3.2-1B-Instruct',
      icon: Code,
      gradient: 'from-violet-600/10 to-purple-600/10',
      border: 'hover:border-violet-500/30'
    },
    {
      title: '3D Campus Power Analysis',
      desc: 'Designed and developed a full 3D interactive model of the entire campus using Unity3D. Built and integrated a custom API to connect with real-time data.',
      tags: ['Unity3D', 'API', 'Data Viz'],
      icon: Globe,
      gradient: 'from-emerald-600/10 to-teal-600/10',
      border: 'hover:border-emerald-500/30'
    },
    {
      title: 'Underwater Robot Project',
      desc: 'Developed a 3D visualization and control interface for an underwater cleaning robot. Built a real-time data-driven system.',
      tags: ['Robotics', '3D Viz', 'Backend'],
      icon: Cpu,
      gradient: 'from-blue-600/10 to-indigo-600/10',
      border: 'hover:border-blue-500/30'
    },
    {
      title: 'Tanoxi Technology',
      desc: 'Developed a comprehensive commercial website with product views, orders, and Admin Panel for managing products, orders, and team info.',
      tags: ['Full Stack', 'React', 'Admin Panel'],
      icon: Globe,
      gradient: 'from-pink-600/10 to-rose-600/10',
      border: 'hover:border-pink-500/30'
    },
    {
      title: 'Smart Pump AR App',
      desc: 'Smart pump visualization with interactive 360 front-end driven by real-time sensor data. Custom camera drivers for lightweight hardware.',
      tags: ['AR', 'IoT', 'Raspberry Pi'],
      icon: Cpu,
      gradient: 'from-cyan-600/10 to-teal-600/10',
      border: 'hover:border-cyan-500/30'
    },
    {
      title: 'Game Development',
      desc: 'Developed and published a game called Pokemon Gen on Gamejolt. Indie developer - coding, 3D modeling, animation, game design.',
      tags: ['Game Dev', '3D Modeling', 'Animation'],
      icon: Gamepad2,
      gradient: 'from-amber-600/10 to-orange-600/10',
      border: 'hover:border-amber-500/30'
    },
    {
      title: 'Music Production',
      desc: 'Published music under the artist name "Ghanibhuti Gogoi", available on all platforms. Production, lyrics, vocals, mix & mastering.',
      tags: ['Production', 'Vocals', 'Mixing'],
      icon: Music,
      gradient: 'from-fuchsia-600/10 to-pink-600/10',
      border: 'hover:border-fuchsia-500/30'
    }
  ];

  return (
    <div className="min-h-screen relative grid-pattern overflow-x-hidden">
      {/* Custom Cursor */}
      <div
        className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
        style={{ left: mousePos.x, top: mousePos.y }}
      />

      {/* Noise */}
      <div className="noise-overlay" />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 via-pink-500 to-amber-500 z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <motion.nav
        style={{ backgroundColor: navBg }}
        className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <motion.a
              href="#about"
              className="text-xl font-bold tracking-tight"
              whileHover={{ scale: 1.05 }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <span className="gradient-text">GG</span>
              <span className="text-zinc-500 font-light ml-1">.</span>
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`nav-link px-3 lg:px-4 py-2 text-sm font-medium transition-colors capitalize ${
                    activeSection === item ? 'text-violet-400 active' : 'text-zinc-400 hover:text-white'
                  }`}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Nav */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
              >
                <div className="py-3 flex flex-col gap-1 border-t border-white/5 mt-3">
                  {navItems.map((item) => (
                    <a
                      key={item}
                      href={`#${item}`}
                      onClick={() => setIsMenuOpen(false)}
                      className={`px-4 py-3 rounded-xl transition-all capitalize font-medium ${
                        activeSection === item
                          ? 'text-violet-400 bg-violet-500/10'
                          : 'text-zinc-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* ==================== HERO ==================== */}
      <section id="about" ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden pt-16">
        {/* Animated blobs - contained so they don't cause overflow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 sm:-left-32 w-64 sm:w-96 h-64 sm:h-96 bg-violet-600/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-1/4 -right-20 sm:-right-32 w-64 sm:w-96 h-64 sm:h-96 bg-pink-600/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-blue-600/5 rounded-full blur-3xl animate-pulse-glow" />
        </div>

        {/* Decorative rings - hidden on mobile for performance */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[700px] h-[500px] md:h-[700px] border border-white/[0.03] rounded-full animate-spin-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[550px] h-[400px] md:h-[550px] border border-white/[0.03] rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center w-full">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
            className="relative mx-auto mb-6 sm:mb-10 w-28 h-28 sm:w-36 sm:h-36"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-pink-500 rounded-full blur-xl opacity-30 animate-pulse-glow" />
            <div className="absolute -inset-[3px] bg-gradient-to-br from-violet-500 to-pink-500 rounded-full" />
            <img
              src="/profile.jpg"
              alt="Wenxiang TAO"
              className="w-full h-full rounded-full object-cover relative z-10 border-[3px] border-[#0a0a0f]"
            />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 sm:mb-6"
          >
            <span className="text-white">Wenxiang</span>
            <br />
            <span className="gradient-text">TAO</span>
          </motion.h1>

          {/* Typing effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-zinc-400 mb-6 sm:mb-8 font-light min-h-[1.75rem] sm:min-h-[2rem]"
          >
            <span>{typedText}</span>
            <span className="typing-cursor text-violet-400">|</span>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-zinc-400 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed text-base sm:text-lg px-2"
          >
            AI Engineering undergraduate and research interested in designing{' '}
            <span className="text-violet-400 font-medium">AI-enabled HCI systems</span>, especially in{' '}
            <span className="text-pink-400 font-medium">educational settings</span> and student learning-life contexts.
            Currently at <span className="text-blue-400 font-medium">HKUST-GZ</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4 sm:px-0"
          >
            <a
              href="mailto:ghanibhutigogoi@gmail.com"
              className="magnetic-btn flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-violet-600 to-pink-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-violet-500/25 transition-all hover:-translate-y-1"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <Mail size={18} />
              Get in Touch
            </a>
            <a
              href="https://www.linkedin.com/in/ghanibhuti-gogoi-365820229/"
              className="magnetic-btn flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium hover:bg-white/10 transition-all hover:-translate-y-1"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href="tel:+918486941868"
              className="magnetic-btn flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium hover:bg-white/10 transition-all hover:-translate-y-1"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <Phone size={18} />
              +91 84869 41868
            </a>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="flex items-center justify-center gap-2 text-zinc-500"
          >
            <MapPin size={16} />
            <span className="text-sm">Guangzhou, China</span>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-zinc-600 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={20} className="text-zinc-600" />
          </motion.div>
        </motion.div>
      </section>

      {/* ==================== EDUCATION ==================== */}
      <section id="education" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="max-w-5xl mx-auto">
          <SectionHeading icon={GraduationCap}>Education</SectionHeading>

          <RevealCard className="mb-6 sm:mb-8">
            <div className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 transition-all duration-500 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3 sm:mb-4">
                <div className="min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">B.Eng. (Artificial Intelligence)</h3>
                  <p className="text-violet-400 font-semibold text-base sm:text-lg leading-snug">Hong Kong University of Science & Technology, Guangzhou</p>
                </div>
                <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-violet-500/10 text-violet-400 border border-violet-500/20 rounded-full text-xs sm:text-sm font-medium w-fit flex-shrink-0">
                  Graduation: July 2027
                </span>
              </div>
              <p className="text-zinc-500 flex items-center gap-2 text-sm">
                <MapPin size={14} />
                Nansha, Guangzhou, China
              </p>
            </div>
          </RevealCard>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <RevealCard delay={0.1}>
              <div className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 transition-all duration-500 group h-full">
                <div className="text-3xl font-bold text-white mb-2">92.2<span className="text-violet-400">%</span></div>
                <h3 className="text-base sm:text-lg font-semibold text-zinc-300 mb-1">11th and 12th Grade</h3>
                <p className="text-violet-400 font-medium mb-2 text-sm sm:text-base">Delhi Public School, ONGC Nazira</p>
                <p className="text-zinc-500 text-sm">CBSE, India</p>
                <p className="text-zinc-600 text-sm mt-2">May 2023 &middot; Sivsagar, Assam</p>
              </div>
            </RevealCard>

            <RevealCard delay={0.2}>
              <div className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 transition-all duration-500 group h-full">
                <div className="text-3xl font-bold text-white mb-2">93.3<span className="text-pink-400">%</span></div>
                <h3 className="text-base sm:text-lg font-semibold text-zinc-300 mb-1">Until 10th Grade</h3>
                <p className="text-pink-400 font-medium mb-2 text-sm sm:text-base">The New Star School, Rajgarh</p>
                <p className="text-zinc-500 text-sm">SEBA, India</p>
                <p className="text-zinc-600 text-sm mt-2">May 2021 &middot; Dibrugarh, Assam</p>
              </div>
            </RevealCard>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ==================== EXPERIENCE ==================== */}
      <section id="experience" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="max-w-5xl mx-auto">
          <SectionHeading icon={Briefcase}>Experience</SectionHeading>

          <div className="relative pl-8 sm:pl-10 md:pl-12">
            {/* Timeline line */}
            <div className="timeline-line" />

            <div className="space-y-5 sm:space-y-8">
              {experiences.map((exp, i) => (
                <RevealCard key={i} delay={i * 0.05}>
                  <div className="relative">
                    <div className={`timeline-dot ${expandedExp === i ? 'active' : ''}`} style={{ top: '1.5rem' }} />
                    <div
                      className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-500 cursor-pointer group"
                      onClick={() => setExpandedExp(expandedExp === i ? null : i)}
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      <div className="flex flex-col gap-1 mb-2">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-violet-400 transition-colors leading-snug">{exp.title}</h3>
                          <motion.div
                            animate={{ rotate: expandedExp === i ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex-shrink-0 mt-1"
                          >
                            <ChevronDown size={16} className="text-zinc-500" />
                          </motion.div>
                        </div>
                        <p className={`font-semibold text-sm sm:text-base bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>{exp.company}</p>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <span className="text-zinc-500 text-xs sm:text-sm font-mono">{exp.period}</span>
                          {exp.location && (
                            <span className="text-zinc-600 text-xs sm:text-sm">{exp.location}</span>
                          )}
                        </div>
                      </div>

                      <AnimatePresence>
                        {expandedExp === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                              {exp.points.map((point, j) => (
                                <motion.li
                                  key={j}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: j * 0.1 }}
                                  className="flex items-start gap-2 sm:gap-3 text-zinc-400"
                                >
                                  <span className={`mt-1.5 sm:mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0`} />
                                  <span className="text-xs sm:text-sm leading-relaxed">{point}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </RevealCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ==================== PROJECTS ==================== */}
      <section id="projects" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <SectionHeading icon={Lightbulb}>Projects</SectionHeading>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project, i) => (
              <RevealCard key={i} delay={i * 0.08}>
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                    <ProjectCard project={project} setIsHovering={setIsHovering} />
                  </a>
                ) : (
                  <ProjectCard project={project} setIsHovering={setIsHovering} />
                )}
              </RevealCard>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ==================== SKILLS ==================== */}
      <section id="skills" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="max-w-5xl mx-auto">
          <SectionHeading icon={Code}>Skills & Interests</SectionHeading>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
            <RevealCard>
              <div className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 transition-all duration-500 h-full">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
                  <div className="w-1 h-5 sm:h-6 bg-gradient-to-b from-violet-500 to-pink-500 rounded-full" />
                  Technical Skills
                </h3>

                <div className="space-y-6 sm:space-y-8">
                  <SkillGroup
                    title="Languages & Frameworks"
                    icon={<Code size={14} className="text-violet-400" />}
                    skills={['C++', 'C#', 'C', 'Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'ReactJS', 'SQL', 'MongoDB']}
                    color="violet"
                  />
                  <SkillGroup
                    title="Tools & Software"
                    icon={<Cpu size={14} className="text-emerald-400" />}
                    skills={['Unity3D', 'Unreal Engine', 'Blender', 'FL Studio', 'VS Code', 'MS Office', 'Photoshop', 'Premiere Pro', 'Git']}
                    color="emerald"
                  />
                  <SkillGroup
                    title="AI & ML"
                    icon={<Brain size={14} className="text-pink-400" />}
                    skills={['PyTorch', 'TensorFlow', 'Scikit-learn', 'Stable Diffusion', 'Computer Vision', 'Reinforcement Learning', 'Deep Learning', 'LLMs', 'Data Mining']}
                    color="pink"
                  />
                </div>
              </div>
            </RevealCard>

            <RevealCard delay={0.15}>
              <div className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 transition-all duration-500 h-full">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
                  <div className="w-1 h-5 sm:h-6 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />
                  Languages & Interests
                </h3>

                <div className="mb-6 sm:mb-8">
                  <h4 className="text-xs sm:text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3 sm:mb-4 flex items-center gap-2">
                    <Globe size={14} className="text-blue-400" />
                    Languages
                  </h4>
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      { lang: 'Assamese', level: 'Native', pct: 100 },
                      { lang: 'English', level: 'Advanced', pct: 90 },
                      { lang: 'Hindi', level: 'Advanced', pct: 90 },
                      { lang: 'Bengali', level: 'Intermediate', pct: 60 },
                      { lang: 'Chinese', level: 'Basic', pct: 30 }
                    ].map((item) => (
                      <LanguageBar key={item.lang} {...item} />
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3 sm:mb-4 flex items-center gap-2">
                    <Heart size={14} className="text-rose-400" />
                    Interests
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {['Singing', 'Gaming', 'Writing Songs', 'Making Music', 'Partying', 'Chatting', 'Pop Culture', 'Movies'].map((interest) => (
                      <span
                        key={interest}
                        className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-rose-500/10 text-rose-400 border border-rose-500/20 rounded-full text-xs sm:text-sm font-medium hover:bg-rose-500/20 transition-colors cursor-default"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealCard>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ==================== ACHIEVEMENTS ==================== */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="max-w-5xl mx-auto">
          <SectionHeading icon={Award}>Achievements</SectionHeading>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              { title: 'First Prize, TradeMaster Cup 2025', sub: 'HKUST-GZ Fintech Thrust (5,000 RMB)', year: '2025', icon: '01', links: [{ label: 'GitHub', href: 'https://github.com/GhanibhutiGogoi/TradeMasterCup' }, { label: 'Kaggle', href: 'https://www.kaggle.com/competitions/trademaster25' }] },
              { title: 'Outstanding International Student Scholarship', sub: 'Guangdong Government (10,000 RMB)', year: '2023 & 2025', icon: '02' },
              { title: 'Excellence Admission Scholarship', sub: 'Fully paid tuition fee', icon: '03' },
              { title: 'Best Volunteer Teacher Award', sub: '2024', icon: '04' },
              { title: "Dean's List", sub: 'Fall Term 2023-24', icon: '05' },
              { title: 'Third Prize, Provincial Level', sub: '4th University Electrical and Electronic Engineering Innovation Competition, 2024', icon: '06', wide: true },
            ].map((ach, i) => (
              <RevealCard key={i} delay={i * 0.1} className={ach.wide ? 'sm:col-span-2' : ''}>
                <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-500 group flex items-start gap-3 sm:gap-5 h-full">
                  <div className="text-2xl sm:text-3xl font-bold text-violet-500/20 group-hover:text-violet-500/40 transition-colors font-mono flex-shrink-0 min-w-[2rem] sm:min-w-[3rem]">
                    {ach.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-violet-400 transition-colors leading-snug">{ach.title}</h3>
                    <p className="text-zinc-500 text-xs sm:text-sm mt-1">{ach.sub}</p>
                    {ach.year && <p className="text-zinc-600 text-xs mt-1">{ach.year}</p>}
                    {ach.links && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {ach.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-violet-400 hover:text-violet-300 transition-colors"
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                          >
                            <ExternalLink size={12} />
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </RevealCard>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ==================== LEADERSHIP ==================== */}
      <section id="leadership" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="max-w-5xl mx-auto">
          <SectionHeading icon={Heart}>Leadership & Activities</SectionHeading>

          <div className="space-y-4 sm:space-y-6">
            {[
              {
                title: 'Volunteer Teacher',
                org: 'Communist Youth League + HKUST-GZ',
                period: 'May 2025 - Jul 2025',
                location: 'Shaoguan, Guangzhou, China',
                points: [
                  'Prepared lesson plans and conducted interactive English and musical drama sessions for middle school students.',
                  'Contributed to educational development and community service as part of a volunteering initiative.'
                ]
              },
              {
                title: 'Volunteer Teacher',
                org: 'Communist Youth League + HKUST-GZ',
                period: 'May 2024 - Jun 2024',
                location: 'Tongren, China',
                points: [
                  'Prepared lesson plans and conducted interactive English and English drama sessions for middle school students in remote areas.',
                  'Contributed to educational development and community service as part of a volunteering initiative.'
                ]
              },
              {
                title: 'Co-founder Choir Club',
                org: 'HKUST-GZ',
                period: 'Dec 2023 - May 2024',
                points: [
                  'Organized rehearsals, coordinated practice schedules, and led event planning activities.',
                  'Created promotional videos and content. Actively performed in choir events.'
                ]
              }
            ].map((act, i) => (
              <RevealCard key={i} delay={i * 0.1}>
                <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-500 group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2 sm:mb-3">
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-xl font-bold text-white group-hover:text-violet-400 transition-colors">{act.title}</h3>
                      <p className="text-violet-400 font-medium text-sm sm:text-base">{act.org}</p>
                    </div>
                    <span className="text-zinc-500 text-xs sm:text-sm font-mono flex-shrink-0">{act.period}</span>
                  </div>
                  {act.location && <p className="text-zinc-600 text-xs sm:text-sm mb-2 sm:mb-3">{act.location}</p>}
                  <ul className="space-y-1.5 sm:space-y-2">
                    {act.points.map((p, j) => (
                      <li key={j} className="flex items-start gap-2 sm:gap-3 text-zinc-400 text-xs sm:text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500/50 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealCard>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ==================== CONTACT ==================== */}
      <section id="contact" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative">
        {/* Background glow - contained */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-violet-600/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <RevealCard>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-6 sm:mb-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-violet-600/20 to-pink-600/20 border border-violet-500/20 flex items-center justify-center"
            >
              <Mail size={22} className="text-violet-400 sm:hidden" />
              <Mail size={28} className="text-violet-400 hidden sm:block" />
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg mb-8 sm:mb-12 leading-relaxed px-2">
              I'm always interested in discussing new opportunities, collaborations, or just having a chat about AI and technology.
            </p>

            <div className="grid grid-cols-2 sm:flex sm:flex-row sm:justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-2 sm:px-0">
              {[
                { href: 'mailto:ghanibhutigogoi@gmail.com', icon: Mail, label: 'Email Me', primary: true },
                { href: 'https://www.linkedin.com/in/ghanibhuti-gogoi-365820229/', icon: Linkedin, label: 'LinkedIn' },
                { href: 'https://www.instagram.com/ghanibhuti_gogoi/', icon: Instagram, label: 'Instagram' },
                { href: 'https://wa.me/918486941868', icon: Phone, label: 'WhatsApp' }
              ].map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.97 }}
                  className={`magnetic-btn flex items-center justify-center gap-2 px-4 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all text-sm sm:text-base ${
                    link.primary
                      ? 'bg-gradient-to-r from-violet-600 to-pink-600 text-white hover:shadow-lg hover:shadow-violet-500/25 col-span-2 sm:col-span-1'
                      : 'bg-white/5 border border-white/10 text-zinc-300 hover:bg-white/10 hover:text-white'
                  }`}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <link.icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* CV Download */}
            <RevealCard delay={0.3}>
              <div className="mt-2 sm:mt-4">
                <motion.a
                  href="/CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-xl sm:rounded-2xl text-amber-400 font-semibold text-base sm:text-lg hover:from-amber-500/20 hover:to-orange-500/20 hover:border-amber-500/50 transition-all group"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <FileText size={20} className="group-hover:animate-bounce" />
                  Download my CV
                  <ArrowUpRight size={16} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              </div>
            </RevealCard>
          </RevealCard>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="py-8 sm:py-10 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-xs sm:text-sm">&copy; 2025 Wenxiang TAO. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/taowenxiang" className="text-zinc-600 hover:text-violet-400 transition-colors" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/ghanibhuti-gogoi-365820229/" className="text-zinc-600 hover:text-violet-400 transition-colors" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="mailto:ghanibhutigogoi@gmail.com" className="text-zinc-600 hover:text-violet-400 transition-colors" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

/* ==================== SUB COMPONENTS ==================== */

const ProjectCard = ({ project, setIsHovering }: { project: { title: string; desc: string; tags: string[]; link?: string; icon: React.ElementType; gradient: string; border: string }; setIsHovering: (v: boolean) => void }) => {
  return (
    <div
      className={`glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-500 group h-full flex flex-col ${project.border}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300`}>
        <project.icon size={20} className="text-zinc-300" />
      </div>
      <div className="flex items-center gap-2 mb-2 sm:mb-3">
        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-violet-400 transition-colors leading-snug">{project.title}</h3>
        {project.link && <ExternalLink size={14} className="text-zinc-600 group-hover:text-violet-400 transition-colors flex-shrink-0" />}
      </div>
      <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 flex-grow">{project.desc}</p>
      <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3 sm:pt-4 border-t border-white/5">
        {project.tags.map((tag) => (
          <span key={tag} className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-white/5 text-zinc-400 rounded-md text-[10px] sm:text-xs font-mono">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const SkillGroup = ({ title, icon, skills, color }: { title: string; icon: React.ReactNode; skills: string[]; color: string }) => {
  const colorMap: Record<string, string> = {
    violet: 'bg-violet-500/10 text-violet-400 border-violet-500/20 hover:bg-violet-500/20',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20',
    pink: 'bg-pink-500/10 text-pink-400 border-pink-500/20 hover:bg-pink-500/20'
  };

  return (
    <div>
      <h4 className="text-xs sm:text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-2 sm:mb-3 flex items-center gap-2">
        {icon}
        {title}
      </h4>
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-medium border transition-colors cursor-default ${colorMap[color]}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const LanguageBar = ({ lang, level, pct }: { lang: string; level: string; pct: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <div className="flex justify-between text-xs sm:text-sm mb-1 sm:mb-1.5">
        <span className="font-medium text-zinc-300">{lang}</span>
        <span className="text-zinc-500 text-[10px] sm:text-xs">{level}</span>
      </div>
      <div className="h-1 sm:h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${pct}%` } : {}}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </div>
  );
};

export default App;
