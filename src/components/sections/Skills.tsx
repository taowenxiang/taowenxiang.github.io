import { Code, Cpu, Brain, Globe, Heart } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import RevealCard from '../RevealCard';
import SkillGroup from '../SkillGroup';
import LanguageBar from '../LanguageBar';

const Skills = () => {
  return (
    <section id="skills" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeading icon={Code}>Skills & Interests</SectionHeading>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
          <RevealCard>
            <div className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 transition-all duration-500 h-full">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-6 sm:mb-8 flex items-center gap-3">
                <div className="w-1 h-5 sm:h-6 bg-gradient-to-b from-blue-600 to-cyan-500 rounded-full" />
                Technical Skills
              </h3>

              <div className="space-y-6 sm:space-y-8">
                <SkillGroup
                  title="Languages & Frameworks"
                  icon={<Code size={14} className="text-blue-600" />}
                  skills={['C++', 'C#', 'C', 'Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'ReactJS', 'SQL', 'MongoDB']}
                  color="violet"
                />
                <SkillGroup
                  title="Tools & Software"
                  icon={<Cpu size={14} className="text-cyan-600" />}
                  skills={['Unity3D', 'Unreal Engine', 'Blender', 'FL Studio', 'VS Code', 'MS Office', 'Photoshop', 'Premiere Pro', 'Git']}
                  color="emerald"
                />
                <SkillGroup
                  title="AI & ML"
                  icon={<Brain size={14} className="text-sky-600" />}
                  skills={['PyTorch', 'TensorFlow', 'Scikit-learn', 'Stable Diffusion', 'Computer Vision', 'Reinforcement Learning', 'Deep Learning', 'LLMs', 'Data Mining']}
                  color="pink"
                />
              </div>
            </div>
          </RevealCard>

          <RevealCard delay={0.15}>
            <div className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 transition-all duration-500 h-full">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-6 sm:mb-8 flex items-center gap-3">
                <div className="w-1 h-5 sm:h-6 bg-gradient-to-b from-indigo-500 to-sky-500 rounded-full" />
                Languages & Interests
              </h3>

              <div className="mb-6 sm:mb-8">
                <h4 className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3 sm:mb-4 flex items-center gap-2">
                  <Globe size={14} className="text-blue-600" />
                  Languages
                </h4>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    { lang: 'Assamese', level: 'Native', pct: 100 },
                    { lang: 'English', level: 'Advanced', pct: 90 },
                    { lang: 'Hindi', level: 'Advanced', pct: 90 },
                    { lang: 'Bengali', level: 'Intermediate', pct: 60 },
                    { lang: 'Chinese', level: 'Basic', pct: 30 },
                  ].map((item) => (
                    <LanguageBar key={item.lang} {...item} />
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3 sm:mb-4 flex items-center gap-2">
                  <Heart size={14} className="text-sky-600" />
                  Interests
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {['Singing', 'Gaming', 'Writing Songs', 'Making Music', 'Partying', 'Chatting', 'Pop Culture', 'Movies'].map((interest) => (
                    <span
                      key={interest}
                      className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-sky-500/10 text-sky-800 border border-sky-400/25 rounded-full text-xs sm:text-sm font-medium hover:bg-sky-500/15 transition-colors cursor-default"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </RevealCard>
        </div>
      </div>
    </section>
  );
};

export default Skills;
