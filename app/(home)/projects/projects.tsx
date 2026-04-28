import Image from 'next/image';
import Link from 'next/link';
import styles from './projects.module.css';
import { titleFont } from '../../fonts';
import { projects } from '../../data/projects';
import { ProjectIcon } from '../../ui/project-icon';

const PREVIEW_COUNT = 4;
const githubLink = "https://github.com/xam4lor";

function ProjectCard({ project }: { project: typeof projects[0] }) {
    return (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.card}>
            <div className={styles.cardImage}>
                {project.image ? (
                    <Image src={project.image} alt={project.name} fill style={{ objectFit: 'cover' }} />
                ) : (
                    <div className={styles.imagePlaceholder}>
                        <span className={styles.placeholderIcon}>
                            <ProjectIcon type={project.iconType} size={20} />
                        </span>
                    </div>
                )}
            </div>
            <div className={styles.cardBody}>
                <div className={styles.cardHeader}>
                    <span className={styles.cardIcon}>
                        <ProjectIcon type={project.iconType} size={16} />
                    </span>
                    <span className={styles.cardName}>{project.name}</span>
                    <span className={styles.cardArrow}>↗</span>
                </div>
                <div className={styles.cardDesc}>{project.description}</div>
            </div>
        </a>
    );
}

export default function Projects() {
    const preview = projects.slice(0, PREVIEW_COUNT);

    return (
        <section id="projects" className={styles.section}>
            <h2 className={`${styles.title} ${titleFont.className}`}>
                Projects<span className={styles.dot}>.</span>
            </h2>
            <div className={styles.grid}>
                {preview.map((project, i) => (
                    <ProjectCard key={i} project={project} />
                ))}
            </div>
            <div className={styles.footer}>
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                    GitHub ↗
                </a>
                <Link href="/projects" className={styles.seeAllLink}>
                    See all projects →
                </Link>
            </div>
        </section>
    );
}
