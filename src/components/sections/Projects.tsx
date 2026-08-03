import { FolderKanban } from "lucide-react";
import { projects } from "../../data/projects";
import ProjectCard from "../ProjectCard";
import RevealCard from "../RevealCard";
import SectionHeading from "../SectionHeading";

const Projects = () => {
	return (
		<section
			id="projects"
			className="relative px-4 py-16 sm:px-6 sm:py-24 md:py-32"
		>
			<div className="mx-auto max-w-5xl">
				<SectionHeading icon={FolderKanban}>Projects</SectionHeading>

				<div className="grid gap-4 sm:gap-6 md:grid-cols-2">
					{projects.map((project, index) => (
						<RevealCard key={project.title} delay={index * 0.08}>
							<ProjectCard project={project} />
						</RevealCard>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
