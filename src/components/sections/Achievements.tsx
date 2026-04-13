import { Award, ExternalLink } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import RevealCard from '../RevealCard';

const achievements = [
  { title: 'First Prize, TradeMaster Cup 2025', sub: 'HKUST-GZ Fintech Thrust (5,000 RMB)', year: '2025', icon: '01', links: [{ label: 'GitHub', href: 'https://github.com/GhanibhutiGogoi/TradeMasterCup' }, { label: 'Kaggle', href: 'https://www.kaggle.com/competitions/trademaster25' }] },
  { title: 'Outstanding International Student Scholarship', sub: 'Guangdong Government (10,000 RMB)', year: '2023 & 2025', icon: '02' },
  { title: 'Excellence Admission Scholarship', sub: 'Fully paid tuition fee', icon: '03' },
  { title: 'Best Volunteer Teacher Award', sub: '2024', icon: '04' },
  { title: "Dean's List", sub: 'Fall Term 2023-24', icon: '05' },
  { title: 'Third Prize, Provincial Level', sub: '4th University Electrical and Electronic Engineering Innovation Competition, 2024', icon: '06', wide: true },
];

const Achievements = ({ setIsHovering }: { setIsHovering: (v: boolean) => void }) => {
  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeading icon={Award}>Achievements</SectionHeading>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {achievements.map((ach, i) => (
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
  );
};

export default Achievements;
