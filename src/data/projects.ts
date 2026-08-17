import {
  Bot,
  MessageCircleMore,
  Network,
  ShieldCheck,
  Users,
  Waypoints,
} from "lucide-react";

export type PortfolioProject = {
	title: string;
	desc: string;
	tags: string[];
	badge: string;
	icon: React.ElementType;
	evidence?: string;
	note?: string;
	image?: string;
	imageAlt?: string;
	imageContain?: boolean;
	demoUrl?: string;
	demoLabel?: string;
	githubUrl?: string;
};

export const projects: PortfolioProject[] = [
	{
		title: "CoTalk",
		desc: "A Chinese-knot-inspired interactive visualization for helping two people externalize incomplete, uncertain, or conflicting recollections and collaboratively revisit shared memories without asking AI to decide who is correct.",
		tags: ["Human-AI Interaction", "Information Visualization", "Shared Memory"],
		badge: "Work in progress",
		evidence: "Interactive Visualization · HCI Research",
		note: "Research Project · Work in Progress · 2026",
		image: "/projects/cotalk-shared-memory-loom.webp",
		imageAlt:
			"Two intertwined strands forming different knot structures around paired descriptions of a shared memory",
		imageContain: true,
		icon: Waypoints,
	},
	{
		title: "Campus A2A Assistant Network",
		desc: "A campus-scale agent ecosystem where personal agents interpret requests, route tasks to campus knowledge, department, service, or peer agents, and synthesize the result for the user.",
		tags: ["Agent Routing", "A2A Communication", "Orchestration"],
		badge: "Deployed system",
		evidence: "600+ users",
		note: "Architecture, implementation, deployment, and product iteration",
		image: "/projects/campus-a2a-placehelper.webp",
		imageAlt:
			"PlaceHelper interface with a campus activity map and a personal campus agent panel",
		icon: Bot,
	},
	{
		title: "UniKorn TechG Hub",
		desc: "An HKUST(GZ) student learning and campus-life platform for course reviews, discussion, scheduling, campus information, events, team formation, and community programs.",
		tags: ["Platform Engineering", "Product Development", "Community"],
		badge: "Live platform",
		evidence: "500+ registered users",
		image: "/projects/unikorn-course-graph.webp",
		imageAlt:
			"UniKorn Course Graph interface showing course nodes and prerequisite relationships",
		demoUrl: "https://unikorn.axfff.com",
		demoLabel: "Open live site",
		icon: Users,
	},
	{
		title: "KBRD",
		desc: "A knowledge-base-grounded, two-stage readable de-identification pipeline with a reproducible evaluation package.",
		tags: ["Evaluation", "Privacy", "LLM Systems"],
		badge: "Evaluated system",
		evidence: "11.1% → 7.2% leakage",
		note: "Evaluated on 1,000 feedback records",
		githubUrl: "https://github.com/taowenxiang/KBRD",
		icon: ShieldCheck,
	},
	{
		title: "BridgeChat",
		desc: "A research-driven chat prototype that helps conversations move from personality labels toward richer understanding.",
		tags: ["Next.js", "TypeScript", "UX Research"],
		badge: "Live demo",
		demoUrl: "https://demo.wenxiangtao.com/bridgechat",
		githubUrl: "https://github.com/taowenxiang/BridgeChat",
		icon: MessageCircleMore,
	},
	{
		title: "KGTI",
		desc: "An interactive campus personality test with a full-stack web app, API, authentication, and persistent results.",
		tags: ["React", "Express", "PostgreSQL"],
		badge: "Live demo",
		demoUrl: "https://demo.wenxiangtao.com/kgti",
		githubUrl: "https://github.com/taowenxiang/KGTI",
		icon: Network,
	},
];
