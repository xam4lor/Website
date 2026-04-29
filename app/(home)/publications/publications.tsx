import Image from 'next/image';
import Link from 'next/link';
import styles from './publications.module.css';
import { titleFont } from '../../fonts';
import { publications, getJournalColor, getJournalAbbr } from '../../data/publications';

const PREVIEW_COUNT = 3;
const scholarLink = "https://scholar.google.com/citations?user=k8_CYVUAAAAJ"; // Replace with your actual Google Scholar profile link

function PaperThumb({ src, alt }: { src?: string; alt: string }) {
    if (src) {
        return (
            <div className={styles.thumb}>
                <Image src={src} alt={alt} fill style={{ objectFit: 'cover' }} />
            </div>
        );
    }
    return (
        <div className={`${styles.thumb} ${styles.thumbPlaceholder}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14,2 14,8 20,8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
        </div>
    );
}

export default function Publications() {
    const preview = publications.slice(0, PREVIEW_COUNT);

    return (
        <section id="publications" className={styles.section}>
            <h2 className={`${styles.title} ${titleFont.className}`} data-reveal>
                Selected Publications<span className={styles.dot}>.</span>
            </h2>
            <ol className={styles.list}>
                {preview.map((pub, i) => {
                    const color = getJournalColor(pub.journal);
                    const abbr = getJournalAbbr(pub.journal);
                    return (
                        <li
                            key={i}
                            className={styles.item}
                            data-reveal
                            style={{ '--reveal-delay': `${60 + i * 90}ms` } as React.CSSProperties}
                        >
                            <div className={styles.itemMain}>
                                <div
                                    className={styles.journalBadge}
                                    style={{ borderColor: color, color: color, backgroundColor: color + '12' }}
                                    title={pub.journal}
                                >
                                    {abbr}
                                </div>
                                <div className={styles.itemText}>
                                    <div className={styles.authors}>
                                        {pub.authors} <span className={styles.year}>({pub.year})</span>
                                    </div>
                                    <div className={styles.pubTitle}>
                                        {pub.link ? (
                                            <a href={pub.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                                {pub.title}
                                            </a>
                                        ) : pub.title}
                                    </div>
                                    <div className={styles.journal}>
                                        <em>{pub.journal}</em>
                                        {pub.details && `, ${pub.details}`}
                                    </div>
                                </div>
                                <PaperThumb src={pub.image} alt={pub.title} />
                            </div>
                        </li>
                    );
                })}
            </ol>
            <div className={styles.footer} data-reveal style={{ '--reveal-delay': `${60 + PREVIEW_COUNT * 90}ms` } as React.CSSProperties}>
                <a href={scholarLink} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                    Google Scholar ↗
                </a>
                <Link href="/publications" className={styles.seeAllLink}>
                    See all publications →
                </Link>
            </div>
        </section>
    );
}
