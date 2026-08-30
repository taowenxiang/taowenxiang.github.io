import type { ReactNode } from 'react';
import { ExternalLink } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface Experience {
  title: string;
  company: string;
  period: string;
  location?: string;
  color: string;
  /** Optional icon next to the company name (company “logo”) */
  icon?: ReactNode;
  /** Tags / badges shown below the header */
  tags?: string[];
  /** Links shown at the bottom of the expanded card */
  links?: { label: string; url: string; icon?: ReactNode }[];
  /**
   * Each point can be:
   *  - a plain string  (backwards-compatible, renders as before)
   *  - a ReactNode     (full freedom: links, icons, bold, anything)
   */
  points: (string | ReactNode)[];
}

/* ------------------------------------------------------------------ */
/*  Helpers — use these inside points for common patterns              */
/* ------------------------------------------------------------------ */

/** Inline link that opens in a new tab */
export const Link = ({
  href,
  children,
  showIcon = true,
}: {
  href: string;
  children: ReactNode;
  /** When false, renders as a plain text-style link (no external-link glyph). */
  showIcon?: boolean;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`font-medium text-blue-600 hover:text-blue-700 hover:underline transition-colors ${showIcon ? 'inline-flex items-center gap-0.5' : 'inline'}`}
    onClick={(e) => e.stopPropagation()}
  >
    {children}
    {showIcon && <ExternalLink size={11} className="ml-0.5 flex-shrink-0" />}
  </a>
);

/** Bold / highlighted span */
export const B = ({ children }: { children: ReactNode }) => (
  <span className="font-semibold text-slate-800">{children}</span>
);

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

export const experiences: Experience[] = [
  {
    title: 'Undergraduate Research Intern',
    company: 'APEX AI-Support-Learning/Education Group, HKUST(GZ)',
    period: 'Mar 2026 - Present',
    icon: (
      <img
        src="/logos/HKUST(GZ).svg"
        alt=""
      />
    ),
    tags: ['Human-AI Interaction', 'Intent Alignment', 'Intelligent Interfaces'],
    points: [
      <span key="apex-focus">Conducting research on <B>human-AI interaction</B>, <B>intention alignment</B>, <B>ambiguity resolution</B>, intelligent user interfaces, and collaborative AI systems under the supervision of <Link href="https://www.mingmingfan.com" showIcon={true}>Prof. Mingming Fan</Link>.</span>,
      <span key="apex-cotalk">Designed and prototyped <B>CoTalk</B>, a Chinese-knot-inspired interactive representation that externalizes divergent and shared recollections for collaborative reflection while preserving user agency.</span>,
      'Contributing to research framing, interaction and visualization concepts, prototyping, and evaluation design.',
    ],
    color: 'from-sky-500 to-cyan-500',
  },
  {
    title: 'Founding President',
    company: 'Network of Developers & Engineers (NODE), HKUST(GZ)',
    period: 'Jan 2026 - Present',
    icon: (
      <img
        src="/logos/HKUST(GZ).svg"
        alt=""
      />
    ),
    tags: ['Leadership', 'Web Dev', 'Community'],
    points: [
      'Founded a student developer community for collaborative campus product building.',
      <span key="node-learning">Organized peer learning and technical exchange around <B>web development</B>, <B>product building</B>, and <B>engineering collaboration</B>.</span>,
      <span key="node-amwc">Initiated the inaugural <B>Almost Million Web Contest (AMWC)</B> as a student web development event.</span>,
    ],
    color: 'from-teal-500 to-blue-600',
  },
  {
    title: 'Undergraduate Research Trainee, X Program',
    company: 'Data Science and Analytics Thrust, HKUST(GZ)',
    period: 'Jan 2026 - Jun 2026',
    icon: (
      <img
        src="/logos/HKUST(GZ).svg"
        alt=""
      />
    ),
    tags: ['Intent Understanding', 'Ambiguity', 'Text-to-SQL'],
    points: [
      <span key="sql-interaction">Explored <B>interactive ambiguity resolution for Text-to-SQL</B>, transforming user interaction from low-level SQL editing into high-level semantic clarification.</span>,
      <span key="sql-pipeline">Built a <B>taxonomy-guided two-agent pipeline</B> to generate clarification questions from database schemas and natural language queries, and to align them with gold SQL for offline evaluation on BIRD.</span>,
      <span key="sql-concepts">Investigated how <B>candidate worlds</B>, <B>ambiguity taxonomy</B>, and <B>expected information gain</B> can be combined to identify executable semantic ambiguities and reduce unnecessary user interactions.</span>,
    ],
    color: 'from-blue-500 to-sky-500',
  },
  {
    title: 'Undergraduate Research Trainee, X Program',
    company: 'Artificial Intelligence Thrust, HKUST(GZ)',
    period: 'Jun 2025 - Dec 2025',
    icon: (
      <img
        src="/logos/HKUST(GZ).svg"
        alt=""
      />
    ),
    tags: ['Speech Data', 'LLM-Assisted Discovery', 'Data Pipeline'],
    points: [
      "Explored how accents are influenced by both a speaker's first language and their surrounding language environment.",
      <span key="speech-toolkit">Built an <B>LLM-assisted toolkit</B> to automatically discover and collect YouTube audio likely to contain mixed-accent speech.</span>,
      <span key="speech-evidence">Designed a cleaning and preprocessing pipeline that produced <B>1,000+ hours of sentence-level audio clips</B>.</span>,
    ],
    color: 'from-indigo-500 to-blue-500',
  },
  {
    title: 'Core Organizer & Platform Builder',
    company: 'UniKorn TechG Hub: HKUST(GZ) Student Learning & Campus-Life Platform',
    period: 'Apr 2025 - Present',
    icon: (
      <img
        src="/logos/uniKorn.svg"
        alt=""
      />
    ),
    tags: ['Full Stack', 'Community', 'Campus Engagement'],
    points: [
      <span key="unikorn-platform">Co-built and operated a <B>student community platform</B> serving learning and campus life at HKUST(GZ).</span>,
      'Supported the development and operation of key features including forums, course reviews, schedule planning, and team formation.',
      'Helped organize student-facing public-service activities, including course-selection info sessions and Q&A support for new students.',
      <span key="unikorn-users">Grew the platform to <B>1,300+ registered users</B> (to date).</span>,
      <span key="unikorn-link">Visit our website <Link href="https://unikorn.axfff.com">https://unikorn.axfff.com</Link>.</span>,
    ],
    color: 'from-cyan-600 to-blue-700',
  },
];
