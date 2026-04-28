'use client'

import styles from './navbar.module.css';
import { titleFont } from '../../fonts';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { navItems } from '../../data/nav';

const DownloadIcon = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7,10 12,15 17,10" />
        <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
);

export default function Navbar() {
    const pathname = usePathname();

    const isActive = (item: typeof navItems[0]) =>
        item.page !== null && pathname === item.page;

    return (
        <nav className={`${styles.navbar} ${titleFont.className}`}>
            <ul className={styles.navbarContent}>
                {navItems.map((item, i) => (
                    <li key={i}>
                        <Link
                            href={item.href}
                            className={isActive(item) ? styles.active : ''}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
                <li className={styles.cvItem}>
                    <a href="/cv.pdf" download className={styles.cvButton}>
                        <DownloadIcon />
                        CV
                    </a>
                </li>
            </ul>
        </nav>
    );
}
