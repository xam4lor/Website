export type IconType = 'flask' | 'code' | 'globe' | 'book';

export type Project = {
    name: string;
    description: string;
    link: string;
    iconType: IconType;
    year: number;
    pinned: boolean;
    image?: string;
    tags?: string[];
};

export const projects: Project[] = [
    {
        name: "Explorable Science",
        description: "Explorable visual articles and interactive simulations on various scientific topics such as phase transitions, general relativity, quantum mechanics and more.",
        link: "https://explorablescience.com",
        iconType: "globe",
        year: 2019,
        pinned: true,
        tags: ["Science Communication", "Interactive Simulations", "Explorables"],
        image: "/projects/explorablescience.png",
    },
    {
        name: "WaterDropEngine",
        description: "A high-performance, ECS driven and Vulkan based game engine written in Rust. Designed for flexibility and speed, with a focus on 3D game development.",
        link: "https://github.com/explorablescience/WaterDropEngine",
        iconType: "code",
        year: 2023,
        pinned: true,
        tags: ["Rust", "Game Engine", "Vulkan", "WebGPU"],
        image: "/projects/waterdropengine.png",
    },
    {
        name: "WaterDropEngine Terrain Generator",
        description: "A procedural terrain generator built with WaterDropEngine, producing realistic 3D landscapes using noise-based algorithms and GPU-accelerated mesh generation.",
        link: "https://github.com/explorablescience/WaterDropTerrainGenerator",
        iconType: "code",
        year: 2026,
        pinned: true,
        tags: ["Rust", "Procedural Generation", "Terrain", "Vulkan"],
        image: "/projects/waterdropterraingenerator.png",
    },
    {
        name: "Physics Simulation Engine",
        description: "A high-level JavaScript library for creating interactive physics simulations in the browser built on top of the canvas API.",
        link: "https://github.com/explorablescience/PhysicsSimulationEngine",
        iconType: "flask",
        year: 2017,
        pinned: true,
        tags: ["JavaScript", "Physics Simulation", "Educational", "Interactive Science"],
        image: "/projects/physics-simulation-engine.png",
    },
    {
        name: "Portfolio Website",
        description: "The source code for this portfolio website, built with Next.js, TypeScript, Tailwind CSS and Vercel. It features a clean and modern design, showcasing my projects and skills.",
        link: "https://github.com/xam4lor/Website",
        iconType: "globe",
        year: 2025,
        pinned: false,
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "React"],
        image: "/projects/portfolio-website.png",
    },
    {
        name: "Archive Explorer",
        description: "A website to keep track of the games you played, the books you read, and the movies and series you watched. It allows you to create a personal archive of your experiences and share them with others.",
        link: "https://archive-explorer.mdherbecourt.dev",
        iconType: "book",
        tags: ["Web Development", "Personal Archive", "Next.js", "TypeScript", "Tailwind CSS"],
        image: "/projects/archive-explorer.png",
    }
];

function byYearDesc(a: Project, b: Project) {
    return b.year - a.year;
}

export const homeProjects = [...projects].sort((a, b) => {
    if (a.pinned !== b.pinned) {
        return a.pinned ? -1 : 1;
    }
    const yearOrder = byYearDesc(a, b);
    if (yearOrder !== 0) {
        return yearOrder;
    }
    return a.name.localeCompare(b.name);
});

export const projectsPageProjects = [...projects].sort((a, b) => {
    const yearOrder = byYearDesc(a, b);
    if (yearOrder !== 0) {
        return yearOrder;
    }
    return a.name.localeCompare(b.name);
});
