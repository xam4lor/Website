import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../(home)/header/navbar';
import Footer from '../(home)/footer/footer';
import { publications, getJournalColor, getJournalAbbr } from '../data/publications';
import { titleFont } from '../fonts';
import styles from './page.module.css';

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
                            <li key={i} className={styles.item}>
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
                            </li>
                        );
                    })}
                </ul>
            </main>
            <Footer />
        </>
    );
}
