import Image from 'next/image';
import styles from './publication-entry.module.css';
import { getJournalAbbr, getJournalColor, type Publication } from '../../data/publications';

const SELF = 'M. Dherbécourt';

function Authors({ authors }: { authors: string }) {
    return <>
        {authors.split(SELF).map((part, i) => (
            <span key={i}>
                {i > 0 && <strong>{SELF}</strong>}
                {part}
            </span>
        ))}
    </>;
}

export function PublicationList({ children }: { children: React.ReactNode }) {
    return <ol className={styles.list}>{children}</ol>;
}

export default function PublicationEntry({ pub }: { pub: Publication }) {
    const external = { target: '_blank', rel: 'noopener noreferrer' };

    return (
        <li className={styles.entry}>
            <div>
                <h3 className={styles.title}>
                    {pub.link ? <a href={pub.link} {...external}>{pub.title}</a> : pub.title}
                </h3>
                <p className={styles.authors}><Authors authors={pub.authors} /></p>
                <div className={styles.meta}>
                    <span
                        className={styles.tag}
                        title={pub.journal}
                        style={{ '--journal': getJournalColor(pub.journal) } as React.CSSProperties}
                    >
                        {getJournalAbbr(pub.journal)}
                    </span>
                    <span className={styles.journal}>
                        <em>{pub.journal}</em>
                        <span className={styles.details}>{pub.details && `, ${pub.details}`} ({pub.year})</span>
                    </span>
                    {pub.link && <a href={pub.link} className={styles.doi} {...external}>DOI ↗</a>}
                </div>
            </div>
            {pub.image && (
                <a href={pub.link} className={styles.thumb} tabIndex={-1} aria-hidden="true" {...external}>
                    <Image src={pub.image} alt="" fill sizes="136px" style={{ objectFit: 'contain' }} />
                </a>
            )}
        </li>
    );
}
