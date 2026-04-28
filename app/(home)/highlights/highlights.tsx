import React from 'react';
import styles from './highlights.module.css';
import { titleFont } from '../../fonts';
import { engagements } from '../../data/engagements';

export default function Highlights() {
    return (
        <section id="activities" className={styles.section}>
            <h2 className={`${styles.title} ${titleFont.className}`}>
                Activities & Engagements<span className={styles.dot}>.</span>
            </h2>
            <dl className={styles.grid}>
                {engagements.map((category, i) => (
                    <React.Fragment key={i}>
                        <dt className={`${styles.categoryName} ${titleFont.className}`}>{category.name}</dt>
                        <dd className={styles.categoryItems}>
                            {category.items.map((item, j) => (
                                <div key={j} className={styles.item}>
                                    <span className={styles.itemRole}>{item.role}</span>
                                    <div className={styles.itemContent}>
                                        <span className={styles.itemDesc}>{item.description}</span>
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
