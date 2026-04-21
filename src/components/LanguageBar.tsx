import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const LanguageBar = ({ lang, level, pct }: { lang: string; level: string; pct: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <div className="flex justify-between text-xs sm:text-sm mb-1 sm:mb-1.5">
        <span className="font-medium text-slate-800">{lang}</span>
        <span className="text-slate-500 text-[10px] sm:text-xs">{level}</span>
      </div>
      <div className="h-1 sm:h-1.5 bg-blue-100/80 rounded-full overflow-hidden">
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

export default LanguageBar;
