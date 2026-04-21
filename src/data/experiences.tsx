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
    title: 'LLM Full Stack Software Engineering Intern',
    company: 'NOVO AI - HKSTP',
    period: 'Feb 2026 - Aug 2026',
    location: 'Remote, HK',
    icon: <BrainCircuit size={16} />,
    tags: ['LLM', 'Computer Vision', 'Full Stack'],
    links: [
      { label: 'NOVO AI', url: 'https://heynovo.ai', icon: <Globe size={13} /> },
    ],
    points: [
      <>Developed full-stack features for an <B>AI-driven insurance platform</B> utilizing LLMs and Computer Vision to detect over-billing and fraud.</>,
      'Implemented automated analysis tools that cross-reference claim data with visual evidence to identify billing discrepancies.',
      'Built scalable backend APIs and frontend interfaces to streamline remote claim assessments and improve processing accuracy.',
    ],
    color: 'from-blue-600 to-indigo-600',
  },
  {
    title: 'X Program Researcher',
    company: 'HKUST-GZ',
    period: 'Sep 2025 - Aug 2026',
    icon: <FlaskConical size={16} />,
    tags: ['Deep RL', 'HVAC', 'Energy'],
    points: [
      <>Conducted research titled <B>"Experimental evaluation of Deep Reinforcement Learning algorithms for HVAC control"</B>.</>,
      'Developed models to predict HVAC cooling loads and trained Reinforcement Learning algorithms to optimize performance.',
      'Implemented cost-saving strategies by optimizing energy consumption patterns based on real-time data.',
    ],
    color: 'from-sky-500 to-cyan-500',
  },
  {
    title: 'Full Stack Web Development Intern',
    company: 'HKUST-GZ',
    period: 'Nov 2025 - Mar 2026',
    icon: <Code size={16} />,
    tags: ['React', 'MongoDB', 'GCP'],
    points: [
      'Developed a commercial website for a company specializing in homoepitaxial wafers and related services.',
      'Managed the complete infrastructure setup, including MongoDB integration and Google Cloud hosting.',
      'Built and deployed both frontend interfaces and backend services to ensure a seamless user experience.',
    ],
    color: 'from-teal-500 to-blue-600',
  },
  {
    title: 'Research Assistant',
    company: 'HKUST-GZ',
    period: 'Jan 2024 - Present',
    icon: <FlaskConical size={16} />,
    tags: ['ML', 'Full Stack', 'Unity3D'],
    points: [
      'Contributed to the development and deployment of machine learning models in collaborative research projects.',
      'Engaged in full-stack development, including backend services and frontend interfaces.',
      <>Integrated 3D components into webapps using <B>Unity3D</B> and C# for interactive system features.</>,
      'Worked on multiple industry-collaboration projects alongside cross-functional teams.',
    ],
    color: 'from-blue-500 to-sky-500',
  },
  {
    title: 'UG Research Program, 2025',
    company: 'HKUST-GZ',
    period: 'Jun 2025 - Aug 2025',
    icon: <FlaskConical size={16} />,
    tags: ['Federated Learning', 'LSTM', 'Energy'],
    points: [
      'Developed a federated learning algorithm to predict electricity consumption.',
      'Trained it on real data on multiple devices with a shared network.',
      <>Developed the final <B>LSTM model</B> through decentralized federated learning and deployed it in use.</>,
    ],
    color: 'from-indigo-500 to-blue-500',
  },
  {
    title: 'Undergraduate Researcher, Speech & NLP, 2025',
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
    title: 'Core Organizer & Platform Builder, 2025',
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
