import { GraduationCap, MapPin } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import RevealCard from '../RevealCard';

const Education = () => {
  return (
    <section id="education" className="pt-10 sm:pt-14 md:pt-16 pb-16 sm:pb-24 md:pb-32 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeading icon={GraduationCap}>Education</SectionHeading>

        <RevealCard className="mb-6 sm:mb-8">
          <div className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3 sm:mb-4">
              <div className="min-w-0">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">B.Eng. (Artificial Intelligence)</h3>
                <p className="text-blue-700 font-semibold text-base sm:text-lg leading-snug">The Hong Kong University of Science & Technology (Guangzhou)</p>
              </div>
              <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-blue-500/10 text-blue-700 border border-blue-400/30 rounded-full text-xs sm:text-sm font-medium w-fit flex-shrink-0">
                Graduation: Summer 2028
              </span>
            </div>
            <p className="text-slate-600 flex items-center gap-2 text-sm">
              <MapPin size={14} />
              Guangzhou, Guangdong, China
            </p>
            <p className="text-slate-500 text-sm mt-2">Since 2024.09</p>

            <div className="mt-5 pt-5 border-t border-blue-200/50">
              <h4 className="text-sm font-semibold text-slate-800 mb-3">Selected Honors & Awards</h4>
              <ul className="space-y-2.5 text-sm text-slate-600 leading-snug list-disc pl-5 marker:text-blue-600/70">
                <li>
                  Second Prize, HKUST (GZ) Visitor System Development Competition, 2024
                </li>
                <li>Dean&rsquo;s List Award, Fall 2024-2025</li>
                <li>Dean&rsquo;s List Award, Fall 2025-2026</li>
              </ul>
            </div>
          </div>
        </RevealCard>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          <RevealCard delay={0.1}>
            <div className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 transition-all duration-500 relative overflow-hidden group h-full">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-2xl font-bold text-slate-900 mb-2">High School</div>
              <p className="text-blue-700 font-medium mb-2 text-sm sm:text-base">High School Affiliated to Anhui Normal University</p>
              <p className="text-slate-600 flex items-center gap-2 text-sm">
                <MapPin size={14} />
                Wuhu, Anhui, China
              </p>
              <p className="text-slate-500 text-sm mt-2">2021.09 - 2024.06</p>

              <div className="mt-5 pt-5 border-t border-blue-200/50">
                <h4 className="text-sm font-semibold text-slate-800 mb-3">Selected Honors & Awards</h4>
                <ul className="space-y-2.5 text-sm text-slate-600 leading-snug list-disc pl-5 marker:text-blue-600/70">
                  <li>First Prize, Advanced Division, National Olympiad in Informatics in Provinces (NOIP), 2021</li>
                  <li>Second Prize, High School Student Research Summer Camp, University of Science and Technology of China (USTC), 2022</li>
                </ul>
              </div>
            </div>
          </RevealCard>

          <RevealCard delay={0.2}>
            <div className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 transition-all duration-500 relative overflow-hidden group h-full">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-2xl font-bold text-slate-900 mb-2">Middle School</div>
              <p className="text-sky-700 font-medium mb-2 text-sm sm:text-base">Wuhu No. 27 Middle School</p>
              <p className="text-slate-600 flex items-center gap-2 text-sm">
                <MapPin size={14} />
                Wuhu, Anhui, China
              </p>
              <p className="text-slate-500 text-sm mt-2">2018.09 - 2021.06</p>

              <div className="mt-5 pt-5 border-t border-sky-200/50">
                <h4 className="text-sm font-semibold text-slate-800 mb-3">Selected Honors & Awards</h4>
                <ul className="space-y-2.5 text-sm text-slate-600 leading-snug list-disc pl-5 marker:text-sky-600/70">
                  <li>First Prize, Beginner Division, National Olympiad in Informatics in Provinces (NOIP), 2018</li>
                  <li>First Prize, Advanced Division, National Olympiad in Informatics in Provinces (NOIP), 2019</li>
                </ul>
              </div>
            </div>
          </RevealCard>
        </div>
      </div>
    </section>
  );
};

export default Education;
