const colorMap: Record<string, string> = {
  violet: 'bg-violet-500/10 text-violet-400 border-violet-500/20 hover:bg-violet-500/20',
  emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20',
  pink: 'bg-pink-500/10 text-pink-400 border-pink-500/20 hover:bg-pink-500/20',
};

const SkillGroup = ({ title, icon, skills, color }: { title: string; icon: React.ReactNode; skills: string[]; color: string }) => {
  return (
    <div>
      <h4 className="text-xs sm:text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-2 sm:mb-3 flex items-center gap-2">
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
