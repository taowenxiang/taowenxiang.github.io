import { ArrowUpRight, FolderKanban, Github, RadioTower } from 'lucide-react';
import RevealCard from '../RevealCard';
import SectionHeading from '../SectionHeading';

const demoProjects = [
  { name: 'SmartLearn Lite', category: 'PDF Q&A' },
  { name: 'BridgeChat', category: 'Conversation' },
  { name: 'KGTI', category: 'Knowledge graph' },
  { name: 'ProgRec', category: 'Recommendation' },
];

const FeaturedProject = () => {
  return (
    <section id="projects" className="relative px-4 py-16 sm:px-6 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading icon={FolderKanban}>Project demos</SectionHeading>

        <RevealCard>
          <article className="overflow-hidden rounded-xl border border-blue-200 bg-white">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-6 sm:p-9 lg:p-12">
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-md bg-cyan-50 px-3 py-1.5 text-sm font-semibold text-cyan-800">
                    <span className="h-2 w-2 rounded-full bg-cyan-500" aria-hidden="true" />
                    Live directory
                  </span>
                  <span className="font-mono text-xs text-slate-500">demo.wenxiangtao.com</span>
                </div>

                <h3 className="text-balance text-3xl font-bold tracking-[-0.025em] text-slate-950 sm:text-4xl">
                  Project Demo Archive
                </h3>
                <p className="mt-5 max-w-[62ch] text-base leading-7 text-slate-600 sm:text-lg">
                  A single directory for the projects you can try in the browser. Open the archive to choose a demo, review its source, or filter the collection by availability.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://demo.wenxiangtao.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
                  >
                    Browse project demos
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                  <a
                    href="https://github.com/taowenxiang/demo-router"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-blue-300 bg-white px-5 py-3 font-semibold text-blue-800 transition-colors hover:border-blue-500 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
                  >
                    Review directory source
                    <Github size={18} aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="border-t border-blue-200 bg-blue-50/70 p-6 sm:p-9 lg:border-l lg:border-t-0 lg:p-12">
                <div className="flex items-start gap-3">
                  <RadioTower className="mt-0.5 shrink-0 text-blue-700" size={22} aria-hidden="true" />
                  <div>
                    <h4 className="font-semibold text-slate-950">Available from the directory</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Each project keeps its own route and source links while sharing one stable public entry point.
                    </p>
                  </div>
                </div>

                <ul className="mt-8 divide-y divide-blue-200" aria-label="Live project demos">
                  {demoProjects.map((project) => (
                    <li key={project.name} className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0">
                      <span className="flex min-w-0 items-center gap-3 font-medium text-slate-900">
                        <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-500" aria-hidden="true" />
                        <span>{project.name}</span>
                      </span>
                      <span className="shrink-0 font-mono text-xs text-slate-500">{project.category}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-8 border-t border-blue-200 pt-5 text-sm leading-6 text-slate-600">
                  The directory is the canonical entry point. Individual demo URLs remain stable for bookmarks and direct sharing.
                </p>
              </div>
            </div>
          </article>
        </RevealCard>
      </div>
    </section>
  );
};

export default FeaturedProject;
