import { ArrowUpRight, FolderKanban } from 'lucide-react';
import RevealCard from '../RevealCard';

const FeaturedProject = () => {
  return (
    <section id="projects" className="relative px-4 py-12 sm:px-6 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <RevealCard>
          <article className="grid items-center gap-5 rounded-xl border border-blue-200 bg-white p-5 sm:grid-cols-[auto_1fr_auto] sm:p-6 lg:grid-cols-[auto_1fr_auto_auto] lg:gap-8">
            <div className="grid h-12 w-12 place-items-center rounded-lg bg-blue-50 text-blue-700" aria-hidden="true">
              <FolderKanban size={24} strokeWidth={1.8} />
            </div>

            <div className="min-w-0">
              <h2 className="text-balance text-xl font-bold tracking-[-0.02em] text-slate-950 sm:text-2xl">
                Interactive demos
              </h2>
              <p className="mt-1 text-sm leading-6 text-slate-600 sm:text-base">
                Four browser-based projects in one shared directory.
              </p>
            </div>

            <output className="flex items-center gap-2 font-mono text-sm font-medium text-cyan-800 sm:col-start-2 lg:col-start-auto" aria-label="Four projects are live">
              <span className="h-2 w-2 rounded-full bg-cyan-500" aria-hidden="true" />
              4 live
            </output>

            <a
              href="https://demo.wenxiangtao.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 sm:col-start-3 sm:row-start-1 sm:row-end-3 lg:col-start-auto lg:row-auto"
            >
              Browse demos
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </article>
        </RevealCard>
      </div>
    </section>
  );
};

export default FeaturedProject;
