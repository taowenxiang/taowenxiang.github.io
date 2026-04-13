import { motion } from 'framer-motion';
import { Mail, Linkedin, FileText, ArrowUpRight } from 'lucide-react';
import RevealCard from '../RevealCard';

const Contact = ({ setIsHovering }: { setIsHovering: (v: boolean) => void }) => {
  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-violet-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <RevealCard>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
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

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-2 sm:px-0">
            <motion.a
              href="mailto:wtao565connect@gmail.com"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
              className="magnetic-btn flex items-center justify-center gap-2 px-4 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all text-sm sm:text-base bg-gradient-to-r from-violet-600 to-pink-600 text-white hover:shadow-lg hover:shadow-violet-500/25"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
              Email Me
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/wenxiang-tao-0356b5402/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
              className="magnetic-btn flex items-center justify-center gap-2 px-4 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all text-sm sm:text-base bg-white/5 border border-white/10 text-zinc-300 hover:bg-white/10 hover:text-white"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
              LinkedIn
            </motion.a>
          </div>

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
  );
};

export default Contact;
