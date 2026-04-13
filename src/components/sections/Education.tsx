import { GraduationCap, MapPin } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import RevealCard from '../RevealCard';

const Education = () => {
  return (
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
  );
};

export default Education;
