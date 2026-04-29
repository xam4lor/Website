import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../(home)/header/navbar';
import Footer from '../(home)/footer/footer';
import { projects } from '../data/projects';
import { ProjectIcon } from '../ui/project-icon';
import { titleFont } from '../fonts';
import styles from './page.module.css';

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
            <main className={styles.main}>
                <div className={styles.hero}>
                    <Link href="/" className={`${styles.back} ${titleFont.className}`}>← Portfolio</Link>
                    <h1 className={`${styles.title} ${titleFont.className}`}>
                        All Projects<span className={styles.dot}>.</span>
                    </h1>
                    <p className={styles.subtitle}>Open-source tools, interactive science, and side projects.</p>
                </div>

                <ul className={styles.list}>
                    {projects.map((project, i) => (
                        <li key={i}>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.item}
                                data-reveal
                                style={{ '--reveal-delay': `${i * 60}ms` } as React.CSSProperties}
                            >
                                <div className={styles.itemImage}>
                                    {project.image ? (
                                        <Image
                                            src={project.image}
                                            alt={project.name}
                                            fill
                                            className={styles.itemImageImg}
                                            style={{ objectFit: 'cover' }}
                                        />
                                    ) : (
                                        <div className={styles.imagePlaceholder}>
                                            <span className={styles.placeholderIcon}>
                                                <ProjectIcon type={project.iconType} size={20} />
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div className={styles.itemBody}>
                                    <div className={styles.itemHeader}>
                                        <span className={styles.itemIcon}>
                                            <ProjectIcon type={project.iconType} size={15} />
                                        </span>
                                        <span className={`${styles.itemName} ${titleFont.className}`}>{project.name}</span>
                                        <span className={styles.itemArrow}>↗</span>
                                    </div>
                                    <p className={styles.itemDesc}>{project.description}</p>
                                    {project.tags && project.tags.length > 0 && (
                                        <div className={styles.tags}>
                                            {project.tags.map((tag, j) => (
                                                <span key={j} className={styles.tag}>{tag}</span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </main>
            <Footer />
        </>
    );
}
