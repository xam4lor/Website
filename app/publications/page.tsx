import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../(home)/header/navbar';
import Footer from '../(home)/footer/footer';
import { publications, getJournalColor, getJournalAbbr } from '../data/publications';
import { titleFont } from '../fonts';
import styles from './page.module.css';

function PaperThumb({ src, alt }: { src?: string; alt: string }) {
    if (src) {
        return (
            <div className={styles.thumb}>
                <Image src={src} alt={alt} fill style={{ objectFit: 'cover' }} />
            </div>
        );
    }
    return (
        <div className={styles.thumbPlaceholder}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14,2 14,8 20,8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
        </div>
    );
}

export const metadata: Metadata = {
    title: "Publications",
    description:
        "Peer-reviewed articles and preprints in Physics by Maxime Dherbécourt, including work published in Physical Review Letters and other journals.",
    openGraph: {
        title: "Publications | Maxime Dherbécourt",
        description:
            "Peer-reviewed articles and preprints in Physics by Maxime Dherbécourt.",
        url: "https://mdherbecourt.dev/publications",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Publications | Maxime Dherbécourt",
        description:
            "Peer-reviewed articles and preprints in Physics by Maxime Dherbécourt.",
    },
    alternates: { canonical: "https://mdherbecourt.dev/publications" },
};

export default function PublicationsPage() {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <div className={styles.hero}>
                    <Link href="/" className={`${styles.back} ${titleFont.className}`}>← Portfolio</Link>
                    <h1 className={`${styles.title} ${titleFont.className}`}>
                        Publications<span className={styles.dot}>.</span>
                    </h1>
                    <p className={styles.subtitle}>Peer-reviewed articles and preprints.</p>
                </div>

                <ul className={styles.list}>
                    {publications.map((pub, i) => {
                        const color = getJournalColor(pub.journal);
                        const abbr = getJournalAbbr(pub.journal);
                        return (
                            <li
                                key={i}
                                className={styles.item}
                                data-reveal
                                style={{ '--reveal-delay': `${i * 60}ms` } as React.CSSProperties}
                            >
                                <div
                                    className={styles.journalBadge}
                                    style={{ borderColor: color, color: color, backgroundColor: color + '12' }}
                                    title={pub.journal}
                                >
                                    {abbr}
                                </div>
                                <div className={styles.content}>
                                    <div className={styles.pubTitle}>
                                        {pub.link ? (
                                            <a
                                                href={pub.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.pubLink}
                                            >
                                                {pub.title}
                                            </a>
                                        ) : pub.title}
                                    </div>
                                    <div className={styles.authors}>
                                        {pub.authors}
                                        <span className={styles.year}> ({pub.year})</span>
                                    </div>
                                    <div className={styles.meta}>
                                        <span className={styles.journal}>{pub.journal}</span>
                                        {pub.details && <span className={styles.details}>, {pub.details}</span>}
                                        {pub.link && (
                                            <a
                                                href={pub.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.doiLink}
                                            >
                                                DOI ↗
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <PaperThumb src={pub.image} alt={pub.title} />
                            </li>
                        );
                    })}
                </ul>
            </main>
            <Footer />
        </>
    );
}
