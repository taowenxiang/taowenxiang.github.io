import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ChevronDown } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import RevealCard from '../RevealCard';
import { experiences } from '../../data/experiences';

const Experience = ({ setIsHovering }: { setIsHovering: (v: boolean) => void }) => {
  const [expandedExp, setExpandedExp] = useState<number | null>(null);

  return (
    <section id="experience" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeading icon={Briefcase}>Experience</SectionHeading>

        <div className="relative pl-8 sm:pl-10 md:pl-12">
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
  );
};

export default Experience;
