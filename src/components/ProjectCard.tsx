import { ExternalLink, Github } from "lucide-react";

type Project = {
	title: string;
	desc: string;
	tags: string[];
	demoUrl: string;
	githubUrl: string;
	icon: React.ElementType;
};

const ProjectCard = ({ project }: { project: Project }) => {
	const Icon = project.icon;

	return (
		<article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-blue-200 bg-white/80 transition-colors duration-300 hover:border-blue-400 hover:bg-white sm:rounded-2xl">
			<div
				className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
				aria-hidden="true"
			/>

			<div className="flex flex-1 flex-col p-5 sm:p-6">
				<div className="mb-5 flex items-start justify-between gap-4">
					<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-300/60 bg-gradient-to-br from-blue-600/15 to-cyan-500/15 text-blue-700">
						<Icon size={22} aria-hidden="true" />
					</div>
					<span className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-800">
						<span
							className="h-2 w-2 rounded-full bg-cyan-500"
							aria-hidden="true"
						/>
						Live demo
					</span>
				</div>

				<h3 className="text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-blue-700 sm:text-2xl">
					{project.title}
				</h3>
				<p className="mt-3 flex-1 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
					{project.desc}
				</p>

				<ul
					className="mt-5 flex flex-wrap gap-2"
					aria-label={`${project.title} technologies`}
				>
					{project.tags.map((tag) => (
						<li
							key={tag}
							className="rounded-md border border-blue-100 bg-blue-50 px-2.5 py-1 font-mono text-xs text-slate-600"
						>
							{tag}
						</li>
					))}
				</ul>
			</div>

			<div className="flex flex-col gap-2 border-t border-blue-200 bg-blue-50/50 p-4 sm:flex-row sm:p-5">
				<a
					href={project.demoUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
					aria-label={`Open ${project.title} demo`}
				>
					Open demo
					<ExternalLink size={16} aria-hidden="true" />
				</a>
				<a
					href={project.githubUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-blue-300 bg-white px-4 py-2.5 text-sm font-semibold text-blue-800 transition-colors hover:border-blue-500 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
					aria-label={`Open ${project.title} GitHub source`}
				>
					GitHub source
					<Github size={16} aria-hidden="true" />
				</a>
			</div>
		</article>
	);
};

export default ProjectCard;
