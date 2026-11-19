import styles from './about.module.css';
import { education, experience, type EducationEntry } from '../../data/education';
import Section from '../../ui/section/section';

function Timeline({ items, highlightFirst }: { items: EducationEntry[]; highlightFirst?: boolean }) {
    return (
        <ol className={styles.timeline}>
            {items.map((item, i) => (
                <li key={item.degree} className={`${styles.entry} ${highlightFirst && i === 0 ? styles.current : ''}`}>
                    <div className={styles.top}>
                        <span className={styles.degree}>{item.degree}</span>
                        <span className={styles.period}>{item.period}</span>
                    </div>
                    {item.thesis && <div className={styles.thesis}>{item.thesis}</div>}
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
    );
}

export default function Background() {
    return <>
        <Section id="experience" title="Research Experience">
            <Timeline items={experience} highlightFirst />
        </Section>
        <Section id="education" title="Education">
            <Timeline items={education} />
        </Section>
    </>;
}
