import React from 'react';
import styles from './highlights.module.css';
import { titleFont } from '../../fonts';
import { engagements } from '../../data/engagements';

export default function Highlights() {
    return (
        <section id="activities" className={styles.section}>
            <h2 className={`${styles.title} ${titleFont.className}`} data-reveal>
                Highlights<span className={styles.dot}>.</span>
            </h2>
            <dl className={styles.grid}>
                {engagements.map((category, i) => (
                    <React.Fragment key={i}>
                        <dt
                            className={`${styles.categoryName} ${titleFont.className}`}
                            data-reveal
                            style={{ '--reveal-delay': `${60 + i * 90}ms` } as React.CSSProperties}
                        >
                            {category.name}
                        </dt>
                        <dd
                            className={styles.categoryItems}
                            data-reveal
                            style={{ '--reveal-delay': `${60 + i * 90}ms` } as React.CSSProperties}
                        >
                            {category.items.map((item, j) => (
                                <div key={j} className={styles.item}>
                                    <span className={styles.itemRole}>{item.role}</span>
                                    <div className={styles.itemContent}>
                                        <span className={styles.itemDesc}>
                                            {item.href
                                                ? <a href={item.href} className={styles.itemLink} target="_blank" rel="noopener noreferrer">{item.description}</a>
                                                : item.description
                                            }
                                        </span>
                                        <span className={styles.itemMeta}>
                                            {item.venue && <span className={styles.itemVenue}>{item.venue}</span>}
                                            {item.venue && <span className={styles.metaSep}>·</span>}
                                            <span className={styles.itemPeriod}>{item.period}</span>
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </dd>
                    </React.Fragment>
                ))}
            </dl>
        </section>
    );
}
