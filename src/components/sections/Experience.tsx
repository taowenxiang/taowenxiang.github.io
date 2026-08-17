import { useState } from 'react';
import { Children, isValidElement } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ChevronDown, ExternalLink } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import RevealCard from '../RevealCard';
import { experiences } from '../../data/experiences';

const Experience = () => {
  const [expandedExp, setExpandedExp] = useState<number | null>(null);

  return (
    <section id="experience" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeading icon={Briefcase}>Experience</SectionHeading>

        <div className="relative">
          <div className="space-y-5 sm:space-y-8">
            {experiences.map((exp, i) => (
              <RevealCard key={`${exp.title}-${exp.company}-${exp.period}`} delay={i * 0.05}>
                <div
                  className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-500 group relative overflow-hidden"
                  onMouseEnter={() => setExpandedExp(i)}
                  onMouseLeave={() => setExpandedExp(null)}
                >
                  <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <div className="flex flex-col gap-1 mb-2">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug flex-1 min-w-0">{exp.title}</h3>
                        <motion.div
                          animate={{ rotate: expandedExp === i ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0 mt-1"
                        >
                          <ChevronDown size={16} className="text-slate-500" />
                        </motion.div>
                      </div>
                      <div className="flex items-center gap-2">
                        {exp.icon && (
                          <span
                            className={`flex-shrink-0 inline-flex items-center justify-center
                              [&_svg]:h-5 [&_svg]:w-5 [&_svg]:shrink-0 [&_svg]:text-blue-600
                              [&_img]:h-7 [&_img]:w-7 [&_img]:shrink-0 [&_img]:rounded [&_img]:object-contain`}
                            aria-hidden
                          >
                            {exp.icon}
                          </span>
                        )}
                        <p
                          className={`font-semibold text-sm sm:text-base bg-gradient-to-r ${exp.color} bg-clip-text text-transparent flex-1 min-w-0`}
                        >
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="text-slate-600 text-xs sm:text-sm font-mono">{exp.period}</span>
                        {exp.location && (
                          <span className="text-slate-500 text-xs sm:text-sm">{exp.location}</span>
                        )}
                      </div>

                      {/* Tags */}
                      {exp.tags && exp.tags.length > 0 && (
                        <ul
                          className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-2.5"
                          aria-label={`${exp.title} focus areas`}
                        >
                          {exp.tags.map((tag) => (
                            <li
                              key={tag}
                              className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 text-[11px] sm:text-xs font-medium leading-none text-blue-700"
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                      )}
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
                            {Children.toArray(exp.points).map((point, j) => (
                              <motion.li
                                key={isValidElement(point) ? point.key : String(point)}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: j * 0.1 }}
                                className="flex items-start gap-2 sm:gap-3 text-slate-600"
                              >
                                <span className={`mt-1.5 sm:mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0`} />
                                <span className="text-xs sm:text-sm leading-relaxed">{point}</span>
                              </motion.li>
                            ))}
                          </ul>

                          {/* Links */}
                          {exp.links && exp.links.length > 0 && (
                            <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
                              {exp.links.map((link) => (
                                <a
                                  key={link.url}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg bg-gradient-to-r ${exp.color} text-white hover:opacity-90 transition-opacity`}
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  {link.icon || <ExternalLink size={13} />}
                                  {link.label}
                                </a>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
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
