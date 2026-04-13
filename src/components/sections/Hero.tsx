import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, ChevronDown } from 'lucide-react';

type HeroProps = {
  typedText: string;
  setIsHovering: (v: boolean) => void;
};

const Hero = ({ typedText, setIsHovering }: HeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden pt-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 sm:-left-32 w-64 sm:w-96 h-64 sm:h-96 bg-violet-600/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 -right-20 sm:-right-32 w-64 sm:w-96 h-64 sm:h-96 bg-pink-600/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-blue-600/5 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[700px] h-[500px] md:h-[700px] border border-white/[0.03] rounded-full animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[550px] h-[400px] md:h-[550px] border border-white/[0.03] rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center w-full">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.2 }}
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl text-zinc-400 mb-6 sm:mb-8 font-light min-h-[1.75rem] sm:min-h-[2rem]"
        >
          <span>{typedText}</span>
          <span className="typing-cursor text-violet-400">|</span>
        </motion.div>

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4 sm:px-0"
        >
          <a
            href="mailto:wtao565connect@gmail.com"
            className="magnetic-btn flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-violet-600 to-pink-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-violet-500/25 transition-all hover:-translate-y-1"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Mail size={18} />
            Get in Touch
          </a>
          <a
            href="https://www.linkedin.com/in/wenxiang-tao-0356b5402/"
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium hover:bg-white/10 transition-all hover:-translate-y-1"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
        </motion.div>

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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-zinc-600 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown size={20} className="text-zinc-600" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
