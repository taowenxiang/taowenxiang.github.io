const colorMap: Record<string, string> = {
  violet: 'bg-blue-500/10 text-blue-700 border-blue-400/25 hover:bg-blue-500/15',
  emerald: 'bg-cyan-500/10 text-cyan-800 border-cyan-400/25 hover:bg-cyan-500/15',
  pink: 'bg-sky-500/10 text-sky-700 border-sky-400/25 hover:bg-sky-500/15',
};

const SkillGroup = ({ title, icon, skills, color }: { title: string; icon: React.ReactNode; skills: string[]; color: string }) => {
  return (
    <div>
      <h4 className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2 sm:mb-3 flex items-center gap-2">
        {icon}
        {title}
      </h4>
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-medium border transition-colors cursor-default ${colorMap[color]}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillGroup;
