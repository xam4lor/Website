import type { Metadata } from 'next';
import Navbar from '../(home)/header/navbar';
import Footer from '../(home)/footer/footer';
import { projectsPageProjects } from '../data/projects';
import Section, { PageIntro } from '../ui/section/section';
import ProjectCard, { ProjectGrid } from '../ui/project-card/project-card';

export const metadata: Metadata = {
    title: "Projects",
    description:
        "Open-source tools, interactive science simulations, and personal projects by Maxime Dherbécourt.",
    openGraph: {
        title: "Projects | Maxime Dherbécourt",
        description:
            "Open-source tools, interactive science simulations, and personal projects by Maxime Dherbécourt.",
        url: "https://mdherbecourt.dev/projects",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Projects | Maxime Dherbécourt",
        description:
            "Open-source tools, interactive science simulations, and personal projects by Maxime Dherbécourt.",
    },
    alternates: { canonical: "https://mdherbecourt.dev/projects" },
};

export default function ProjectsPage() {
    return (
        <>
            <Navbar />
            <main>
                <PageIntro
                    title="Projects"
                    subtitle="Open-source tools, interactive science, and side projects."
                    actions={[{ href: "https://github.com/xam4lor", label: "GitHub", external: true }]}
                />
                <Section title={`${projectsPageProjects.length} projects`}>
                    <ProjectGrid>
                        {projectsPageProjects.map((project) => <ProjectCard key={project.name} project={project} maxTags={5} />)}
                    </ProjectGrid>
                </Section>
            </main>
            <Footer />
        </>
    );
}
