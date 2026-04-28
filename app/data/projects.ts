export type IconType = 'flask' | 'globe' | 'code' | 'book';

export type Project = {
    name: string;
    description: string;
    link: string;
    iconType: IconType;
    image?: string;
    tags?: string[];
};

export const projects: Project[] = [
    {
        name: "Project Alpha",
        description: "An interactive simulation of [physics phenomenon] built with WebGL. Explore [what users can explore] through real-time visualizations and hands-on controls.",
        link: "https://github.com/mdherbecourt/project-alpha",
        iconType: "flask",
        tags: ["WebGL", "Physics", "Interactive"],
    },
    {
        name: "Project Beta",
        description: "A web-based tool for [purpose]. Features [key features]. Built for [target audience] to simplify [workflow or task].",
        link: "https://mdherbecourt.dev/project-beta",
        iconType: "globe",
        tags: ["Next.js", "TypeScript"],
    },
    {
        name: "Project Gamma",
        description: "Open-source library for [purpose] written in [language]. Designed to [what it solves], with a minimal API and thorough documentation.",
        link: "https://github.com/mdherbecourt/project-gamma",
        iconType: "code",
        tags: ["Python", "Open Source", "Library"],
    },
    {
        name: "Project Delta",
        description: "Educational resources, lecture notes, and interactive examples on [topic]. Aimed at making [subject] accessible to a broader audience.",
        link: "https://github.com/mdherbecourt/project-delta",
        iconType: "book",
        tags: ["Education", "Physics", "Outreach"],
    },
];
