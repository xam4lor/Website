import styles from './about.module.css';
import { education } from '../../data/education';
import Section from '../../ui/section/section';

export default function Education() {
    return (
        <Section id="education" title="Education">
            <ol className={styles.timeline}>
                {education.map((item, i) => (
                    <li key={item.degree} className={`${styles.entry} ${i === 0 ? styles.current : ''}`}>
                        <div className={styles.top}>
                            <span className={styles.degree}>{item.degree}</span>
                            <span className={styles.period}>{item.period}</span>
                        </div>
                        <div className={styles.sub}>
                            <span className={styles.institution}>{item.institution}</span>
                            {item.description && <>
                                <span className={styles.sep} aria-hidden="true">·</span>
                                <span className={styles.note}>{item.description}</span>
                            </>}
                        </div>
                    </li>
                ))}
            </ol>
        </Section>
    );
}
