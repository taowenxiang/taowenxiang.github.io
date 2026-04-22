import { ReactNode } from 'react';
import { ExternalLink, Globe, FlaskConical, Users, BrainCircuit, Mic, Code } from 'lucide-react';

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
export const Link = ({ href, children }: { href: string; children: ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-0.5 font-medium text-blue-600 hover:text-blue-700 hover:underline transition-colors"
    onClick={(e) => e.stopPropagation()}
  >
    {children}
    <ExternalLink size={11} className="ml-0.5 flex-shrink-0" />
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
    title: 'Founding President',
    company: 'Web Development Enthusiasts Society, HKUST-GZ',
    period: '2026.01 - Present',
    icon: (
      <img
        src="/logos/HKUST(GZ).svg"
        alt=""
      />
    ),
    tags: ['Leadership', 'Web Dev', 'Community'],
    points: [
      <>Founded the society and served as its first president.</>,
      <>Organized regular learning sessions and peer exchange activities on <B>web development</B>, <B>product building</B>, and <B>technical collaboration</B>.</>,
      <>Initiated the inaugural <B>Almost Million Web Contest (AMWC)</B> as a flagship student web development event.</>,
    ],
    color: 'from-teal-500 to-blue-600',
  },
  {
    title: 'Undergraduate Researcher',
    company: 'AI Thrust, HKUST-GZ',
    period: '2026.01 - Present',
    icon: (
      <img
        src="/logos/HKUST(GZ).svg"
        alt=""
      />
    ),
    tags: ['NLP', 'LLM', 'HCI', 'NL2SQL'],
    points: [
      <>Explored <B>interactive ambiguity resolution for Text-to-SQL</B>, transforming user interaction from low-level SQL editing into high-level semantic clarification.</>,
      <>Built a <B>taxonomy-guided two-agent pipeline</B> to generate clarification questions from database schemas and natural language queries, and to align them with gold SQL for offline evaluation on BIRD.</>,
      <>Investigated how <B>candidate worlds</B>, <B>ambiguity taxonomy</B>, and <B>expected information gain</B> can be combined to identify executable semantic ambiguities and reduce unnecessary user interactions.</>,
    ],
    color: 'from-blue-500 to-sky-500',
  },
  {
    title: 'Undergraduate Researcher',
    company: 'AI Thrust, HKUST-GZ',
    period: '2025.06 - 2025.12',
    icon: (
      <img
        src="/logos/HKUST(GZ).svg"
        alt=""
      />
    ),
    tags: ['NLP', 'Speech', 'LLM'],
    points: [
      "Explored how accents are influenced by both a speaker's first language and their surrounding language environment.",
      <>Built an <B>LLM-assisted toolkit</B> to automatically discover and collect YouTube audio likely to contain mixed-accent speech.</>,
      'Designed a data cleaning and preprocessing pipeline, resulting in a speech dataset with over 1,000 hours of audio.',
    ],
    color: 'from-indigo-500 to-blue-500',
  },
  {
    title: 'Core Organizer & Platform Builder',
    company: 'uniKorn TechG Hub: HKUST-GZ Student Learning & Life Community',
    period: '2025.04 - Present',
    icon: (
      <img
        src="/logos/uniKorn.svg"
        alt=""
      />
    ),
    tags: ['Full Stack', 'Community', 'Campus Engagement'],
    points: [
      <>Co-built and operated a <B>student community platform</B> serving learning and campus life at HKUST-GZ.</>,
      'Supported the development and operation of key features including forums, course reviews, schedule planning, and team formation.',
      'Helped organize student-facing public-service activities, including course-selection info sessions and Q&A support for new students.',
      <>Grew the platform to <B>500+ registered users</B> (to date).</>,
      <>Visit our website <Link href="https://unikorn.axfff.com">https://unikorn.axfff.com</Link>.</>,
    ],
    color: 'from-cyan-600 to-blue-700',
  },
];
