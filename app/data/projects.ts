export type IconType = 'flask' | 'code' | 'globe' | 'book';

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
        name: "Explorable Science",
        description: "Explorable visual articles and interactive simulations on various scientific topics such as phase transitions, general relativity, quantum mechanics and more.",
        link: "https://explorablescience.com",
        iconType: "globe",
        tags: ["Science Communication", "Interactive Simulations", "Explorables"],
        image: "/projects/explorablescience.png",
    },
    {
        name: "WaterDropEngine",
        description: "A high-performance, ECS driven and Vulkan based game engine written in Rust. Designed for flexibility and speed, with a focus on 3D game development.",
        link: "https://github.com/explorablescience/WaterDropEngine",
        iconType: "code",
        tags: ["Rust", "Game Engine", "Vulkan", "WebGPU"],
        image: "/projects/waterdropengine.png",
    },
    {
        name: "Physics Simulation Engine",
        description: "A high-level JavaScript library for creating interactive physics simulations in the browser built on top of the canvas API.",
        link: "https://github.com/explorablescience/PhysicsSimulationEngine",
        iconType: "flask",
        tags: ["JavaScript", "Physics Simulation", "Educational", "Interactive Science"],
        image: "/projects/physics-simulation-engine.png",
    },
    {
        name: "Portfolio Website",
        description: "The source code for this portfolio website, built with Next.js, TypeScript, Tailwind CSS and Vercel. It features a clean and modern design, showcasing my projects and skills.",
        link: "https://github.com/xam4lor/Website",
        iconType: "globe",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "React"],
        image: "/projects/portfolio-website.png",
    }
];
