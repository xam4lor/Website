import React from 'react';
import styles from './highlights.module.css';
import { titleFont } from '../../fonts';
import { highlights, getRoleColor, type CategoryIcon } from '../../data/highlights';

function CategoryIconGlyph({ type, size = 14 }: { type: CategoryIcon; size?: number }) {
    const shared = {
        width: size,
        height: size,
        viewBox: "0 0 24 24" as const,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.6",
        strokeLinecap: "round" as const,
        strokeLinejoin: "round" as const,
    };

    switch (type) {
        case 'teaching':
            return (
                <svg {...shared}>
                    <path d="M22 10 12 5 2 10l10 5 10-5z" />
                    <path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
                </svg>
            );
        case 'initiative':
            return (
                <svg {...shared}>
                    <path d="M12 2 15 9l7 1-5 5 1.5 7L12 18.5 5.5 22 7 15 2 10l7-1z" />
                </svg>
            );
        case 'presentation':
            return (
                <svg {...shared}>
                    <rect x="3" y="4" width="18" height="12" rx="1.5" />
                    <path d="M8 20h8" />
                    <path d="M12 16v4" />
                </svg>
            );
    }
}

export default function Highlights() {
    return (
        <section id="highlights" className={styles.section}>
            <h2 className={`${styles.title} ${titleFont.className}`} data-reveal>
                Highlights<span className={styles.dot}>.</span>
            </h2>
            <dl className={styles.grid}>
                {highlights.map((category, i) => (
                    <React.Fragment key={i}>
                        {i > 0 && <div className={styles.divider} aria-hidden="true" />}
                        <dt
                            className={`${styles.categoryName} ${titleFont.className}`}
                            data-reveal
                            style={{ '--reveal-delay': `${60 + i * 90}ms` } as React.CSSProperties}
                        >
                            <span className={styles.categoryIcon}>
                                <CategoryIconGlyph type={category.icon} />
                            </span>
                            <span>{category.name}</span>
                        </dt>
                        <dd
                            className={styles.categoryItems}
                            data-reveal
                            style={{ '--reveal-delay': `${60 + i * 90}ms` } as React.CSSProperties}
                        >
                            {category.items.map((item, j) => {
                                const color = getRoleColor(item.role);
                                return (
                                    <div key={j} className={styles.item}>
                                        <span
                                            className={styles.itemRole}
                                            style={{ borderColor: color, color, backgroundColor: color + '14' }}
                                        >
                                            {item.role}
                                        </span>
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
                                );
                            })}
                        </dd>
                    </React.Fragment>
                ))}
            </dl>
        </section>
    );
}
