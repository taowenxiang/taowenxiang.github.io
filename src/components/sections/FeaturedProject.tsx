import { ArrowUpRight, BookOpenCheck, Github, ShieldCheck } from 'lucide-react';
import RevealCard from '../RevealCard';
import SectionHeading from '../SectionHeading';

const flow = ['Your PDF', 'Temporary API', 'OpenRouter', 'Cited answer'];

const FeaturedProject = () => {
  return (
    <section id="projects" className="relative px-4 py-16 sm:px-6 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading icon={BookOpenCheck}>Featured project</SectionHeading>

        <RevealCard>
          <article className="overflow-hidden rounded-xl border border-blue-200 bg-white">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-6 sm:p-9 lg:p-12">
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-md bg-cyan-50 px-3 py-1.5 text-sm font-semibold text-cyan-800">
                    <span className="h-2 w-2 rounded-full bg-cyan-500" aria-hidden="true" />
                    Live demo
                  </span>
                  <span className="font-mono text-xs text-slate-500">React · FastAPI · OpenRouter</span>
                </div>

                <h3 className="text-balance text-3xl font-bold tracking-[-0.025em] text-slate-950 sm:text-4xl">
                  SmartLearn Lite
                </h3>
                <p className="mt-5 max-w-[62ch] text-base leading-7 text-slate-600 sm:text-lg">
                  A page-aware PDF question-answering system built for an AI engineering workshop. It turns one selectable-text PDF into a temporary session and returns answers with the supporting page numbers.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://demo.wenxiangtao.com/smartlearn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
                  >
                    Open live demo
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                  <a
                    href="https://github.com/taowenxiang/smartLearn-AI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-blue-300 bg-white px-5 py-3 font-semibold text-blue-800 transition-colors hover:border-blue-500 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
                  >
                    Review source
                    <Github size={18} aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="border-t border-blue-200 bg-blue-50/70 p-6 sm:p-9 lg:border-l lg:border-t-0 lg:p-12">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 shrink-0 text-blue-700" size={22} aria-hidden="true" />
                  <div>
                    <h4 className="font-semibold text-slate-950">Public-demo safety boundary</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Visitors connect their own OpenRouter access. Keys remain in the browser tab, while extracted PDF text expires from server memory within 30 minutes.
                    </p>
                  </div>
                </div>

                <ol className="mt-8 space-y-3" aria-label="SmartLearn request flow">
                  {flow.map((item, index) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-blue-700 font-mono text-xs font-semibold text-white">
                        {index + 1}
                      </span>
                      <span className="font-medium text-slate-800">{item}</span>
                    </li>
                  ))}
                </ol>

                <p className="mt-8 border-t border-blue-200 pt-5 text-sm leading-6 text-slate-600">
                  Limits: 10 MB, 30 pages, selectable text only. The service stores neither documents nor credentials permanently.
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
