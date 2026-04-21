import { Lightbulb } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import RevealCard from '../RevealCard';
import ProjectCard from '../ProjectCard';
import { projects } from '../../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading icon={Lightbulb}>Projects</SectionHeading>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, i) => (
            <RevealCard key={i} delay={i * 0.08}>
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <ProjectCard project={project} />
                </a>
              ) : (
                <ProjectCard project={project} />
              )}
            </RevealCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
