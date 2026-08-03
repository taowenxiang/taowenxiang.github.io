import {
	BookOpenCheck,
	MessageCircleMore,
	Network,
	SearchCheck,
} from "lucide-react";

export const projects = [
	{
		title: "SmartLearn Lite",
		desc: "Citation-aware PDF Q&A that answers from uploaded documents while each visitor supplies their own OpenRouter access.",
		tags: ["React", "FastAPI", "OpenRouter"],
		demoUrl: "https://demo.wenxiangtao.com/smartlearn/",
		githubUrl: "https://github.com/taowenxiang/smartLearn-AI",
		icon: BookOpenCheck,
	},
	{
		title: "BridgeChat",
		desc: "A research-driven chat prototype that helps conversations move from personality labels toward richer understanding.",
		tags: ["Next.js", "TypeScript", "UX Research"],
		demoUrl: "https://demo.wenxiangtao.com/bridgechat",
		githubUrl: "https://github.com/taowenxiang/BridgeChat",
		icon: MessageCircleMore,
	},
	{
		title: "KGTI",
		desc: "An interactive campus personality test with a full-stack web app, API, authentication, and persistent results.",
		tags: ["React", "Express", "PostgreSQL"],
		demoUrl: "https://demo.wenxiangtao.com/kgti",
		githubUrl: "https://github.com/taowenxiang/KGTI",
		icon: Network,
	},
	{
		title: "ProgRec",
		desc: "An agent-and-skills workflow that turns a student profile into explainable mentor, project, and teammate recommendations.",
		tags: ["Python", "Agent Skills", "Knowledge Graph"],
		demoUrl: "https://demo.wenxiangtao.com/progrec",
		githubUrl: "https://github.com/taowenxiang/ProgRec",
		icon: SearchCheck,
	},
];
