import Image from 'next/image';
import styles from './project-card.module.css';
import type { Project } from '../../data/projects';

export function ProjectGrid({ children }: { children: React.ReactNode }) {
    return <div className={styles.grid}>{children}</div>;
}

export default function ProjectCard({ project, maxTags = 3 }: { project: Project; maxTags?: number }) {
    return (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.card}>
            <div className={styles.image}>
                {project.image && (
                    <Image
                        src={project.image}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, 440px"
                        style={{ objectFit: 'cover', objectPosition: 'top' }}
                    />
                )}
            </div>
            <div className={styles.body}>
                <div className={styles.header}>
                    <h3 className={styles.name}>{project.name}<span className={styles.arrow} aria-hidden="true">↗</span></h3>
                    <span className={styles.year}>{project.year}</span>
                </div>
                <p className={styles.description}>{project.description}</p>
                {project.tags && (
                    <ul className={styles.tags}>
                        {project.tags.slice(0, maxTags).map((tag) => <li key={tag}>{tag}</li>)}
                    </ul>
                )}
            </div>
        </a>
    );
}
