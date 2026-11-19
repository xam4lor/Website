import { homeProjects } from '../../data/projects';
import Section from '../../ui/section/section';
import ProjectCard, { ProjectGrid } from '../../ui/project-card/project-card';

const PREVIEW_COUNT = 4;

export default function Projects() {
    return (
        <Section id="projects" title="Selected Personal Projects" actions={[{ href: '/projects', label: 'All projects' }]}>
            <ProjectGrid>
                {homeProjects.slice(0, PREVIEW_COUNT).map((project) => <ProjectCard key={project.name} project={project} />)}
            </ProjectGrid>
        </Section>
    );
}
