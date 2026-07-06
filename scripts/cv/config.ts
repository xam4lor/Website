// Run `npm run cv:pdf` to (re)generate public/cv.pdf from this config.

export type CvSectionKey =
	| "summary"
	| "education"
	| "experience"
	| "publications"
	| "projects"
	| "skills"
	| "languages";

export type CvCustomItem = {
	heading: string;
	subheading?: string;
	period?: string;
	description?: string;
};

export type CvCustomSection = {
	title: string;
	anchor: CvSectionKey;
	position: "before" | "after";
	items: CvCustomItem[];
};

export type CvConfig = {
	personal: {
		name: string;
		title: string;
		address: {
			institution: string;
			street: string;
			postalCode: string;
		};
		email: string;
		phone: string;
		website: string;
		links: { label: string; value: string }[];
		birthDate: string;
		nationality: string;
		photo?: string;
	};
	summary: string;
	skills: { category: string; items: string[] }[];
	languages: { name: string; level: string }[];
	limits: {
		maxProjects: number;
		maxPublications: number;
		maxPresentations: number;
	};
	sections: { key: CvSectionKey; enabled: boolean }[];
	customSections: CvCustomSection[];
	style: {
		accentColor: string;
		fontFamily: "sans" | "serif";
	};
};

export const cvConfig: CvConfig = {
	personal: {
		name: "Maxime Dherbécourt",
		title: "PhD Student in Physics",
		address: {
			institution: "IPCMS – Université de Strasbourg",
			street: "23 Rue du Loess",
			postalCode: "67200 Strasbourg",
		},
		email: "maxime.dherbecourt@gmail.com",
		phone: "",
		website: "https://mdherbecourt.dev",
		links: [
			{ label: "GitHub", value: "github.com/xam4lor" },
			{ label: "Scholar", value: "scholar.google.com/citations?user=k8_CYVUAAAAJ" },
            { label: "ORCID", value: "orcid.org/0009-0005-2834-4862" },
		],
		birthDate: "2001-09-27", // Age is computed automatically from this date
		nationality: "French",
		photo: "public/imgs/profil.jpg",
	},

    summary: "I'm a PhD student based at the IPCMS laboratory in Strasbourg (France), working on strong light-matter coupling and its effects on physical phenomena such as Raman scattering and transport properties. I enjoy making science accessible through interactive explorations and visual explanations.",

	skills: [
        { category: "Programming Languages", items: ["Julia", "Rust", "JavaScript/TypeScript", "HTML5/CSS3", "C++", "Python3", "Java"] },
        { category: "Programming Libraries & Frameworks", items: ["Vulkan / WebGPU / OpenGL", "PyTorch / NumPy", "Node.js / React.js / Three.js / React Three Fiber / Next.js", "Plotly.jl / p5.js / Processing", "CUDA"] },
		{ category: "Scientific tools", items: ["Mathematica", "Maple"] },
		{ category: "Other", items: ["LaTeX", "Git", "Docker"] },
	],

	languages: [
		{ name: "French", level: "Native" },
        { name: "English", level: "Fluent (C1)" },
        { name: "German", level: "Intermediate (B1)" },
	],

	limits: {
		maxProjects: 99999,
        maxPublications: 99999,
        maxPresentations: 99999,
	},

	sections: [
		{ key: "summary", enabled: true },
		{ key: "education", enabled: true },
		{ key: "experience", enabled: true },
		{ key: "publications", enabled: true },
		{ key: "projects", enabled: true },
		{ key: "skills", enabled: true },
		{ key: "languages", enabled: true },
	],

	// Example of how to add a section that has no equivalent on the website
	customSections: [
		// {
		//     title: "Awards & Grants",
		//     anchor: "education",
		//     position: "after",
		//     items: [
		//         { heading: "Best Poster Award", subheading: "Some Conference", period: "2025", description: "Awarded for work on ..." },
		//     ],
		// },
	],

	style: {
		accentColor: "#1a2b4c",
		fontFamily: "sans",
	},
};
