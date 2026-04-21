import { Heart } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import RevealCard from '../RevealCard';

const activities = [
  {
    title: 'Volunteer Teacher',
    org: 'Communist Youth League + HKUST-GZ',
    period: 'May 2025 - Jul 2025',
    location: 'Shaoguan, Guangzhou, China',
    points: [
      'Prepared lesson plans and conducted interactive English and musical drama sessions for middle school students.',
      'Contributed to educational development and community service as part of a volunteering initiative.',
    ],
  },
  {
    title: 'Volunteer Teacher',
    org: 'Communist Youth League + HKUST-GZ',
    period: 'May 2024 - Jun 2024',
    location: 'Tongren, China',
    points: [
      'Prepared lesson plans and conducted interactive English and English drama sessions for middle school students in remote areas.',
      'Contributed to educational development and community service as part of a volunteering initiative.',
    ],
  },
  {
    title: 'Co-founder Choir Club',
    org: 'HKUST-GZ',
    period: 'Dec 2023 - May 2024',
    points: [
      'Organized rehearsals, coordinated practice schedules, and led event planning activities.',
      'Created promotional videos and content. Actively performed in choir events.',
    ],
  },
];

const Leadership = () => {
  return (
    <section id="leadership" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeading icon={Heart}>Leadership & Activities</SectionHeading>

        <div className="space-y-4 sm:space-y-6">
          {activities.map((act, i) => (
            <RevealCard key={i} delay={i * 0.1}>
              <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-500 group">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2 sm:mb-3">
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{act.title}</h3>
                    <p className="text-blue-700 font-medium text-sm sm:text-base">{act.org}</p>
                  </div>
                  <span className="text-slate-600 text-xs sm:text-sm font-mono flex-shrink-0">{act.period}</span>
                </div>
                {act.location && <p className="text-slate-500 text-xs sm:text-sm mb-2 sm:mb-3">{act.location}</p>}
                <ul className="space-y-1.5 sm:space-y-2">
                  {act.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2 sm:gap-3 text-slate-600 text-xs sm:text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500/50 flex-shrink-0" />
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
  );
};

export default Leadership;
