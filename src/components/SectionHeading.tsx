import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SectionHeading = ({ children, icon: Icon }: { children: string; icon: React.ElementType }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref} className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-16">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : {}}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
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
          animate={isInView ? { width: '100%' } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="h-[2px] mt-2 bg-gradient-to-r from-violet-500 to-transparent"
        />
      </div>
    </motion.div>
  );
};

export default SectionHeading;
