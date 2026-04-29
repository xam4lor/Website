import styles from './about.module.css';
import { titleFont } from '../../fonts';
import { education, researchInterests } from '../../data/education';

export default function About() {
    return (
        <section id="about" className={styles.section}>
            <h2 className={`${styles.title} ${titleFont.className}`} data-reveal>
                About Me<span className={styles.dot}>.</span>
            </h2>
            <p className={styles.intro} data-reveal style={{ '--reveal-delay': '80ms' } as React.CSSProperties}>
                I'm a PhD student working at the interface between <span className={styles.highlight}>strong light-matter interactions</span> and <span className={styles.highlight}>condensed matter physics</span>.
                I'm currently based at the <u><a href="https://www.ipcms.fr/" target="_blank" rel="noopener noreferrer">IPCMS laboratory</a></u> in Strasbourg, France.
                Beyond research, I enjoy making science accessible through interactive <span className={styles.highlight}>explorations</span> and <span className={styles.highlight}>visual explanations</span>.
            </p>

            <h3 className={`${styles.subtitle} ${titleFont.className}`} data-reveal style={{ '--reveal-delay': '140ms' } as React.CSSProperties}>Education</h3>
            <ul className={styles.educationList}>
                {education.map((item, i) => (
                    <li
                        key={i}
                        className={styles.educationItem}
                        data-reveal
                        style={{ '--reveal-delay': `${180 + i * 80}ms` } as React.CSSProperties}
                    >
                        <span className={styles.bullet} />
                        <div className={styles.educationContent}>
                            <div className={styles.educationHeader}>
                                <span className={styles.degree}>{item.degree}</span>
                                <span className={styles.period}>{item.period}</span>
                            </div>
                            <div className={styles.institution}>{item.institution} · {item.location}</div>
                            {item.description && (
                                <div className={styles.description}>{item.description}</div>
                            )}
                        </div>
                    </li>
                ))}
            </ul>

            <p className={styles.interests} data-reveal style={{ '--reveal-delay': `${180 + education.length * 80}ms` } as React.CSSProperties}>
                <span className={styles.interestLabel}>Research interests</span>
                {" "}{researchInterests.join(" · ")}
            </p>
        </section>
    );
}
