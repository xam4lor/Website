'use client'

import styles from './navbar.module.css';
import { titleFont } from '../../fonts';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { navItems } from '../../data/nav';
import { useState, useEffect, useRef, startTransition } from 'react';

const DownloadIcon = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7,10 12,15 17,10" />
        <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
);

const MenuIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
);

const CloseIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    const isActive = (item: typeof navItems[0]) =>
        item.page !== null && pathname === item.page;

    useEffect(() => {
        startTransition(() => setMenuOpen(false));
    }, [pathname]);

    useEffect(() => {
        if (!menuOpen) return;
        const handleClick = (e: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [menuOpen]);

    return (
        <nav className={`${styles.navbar} ${titleFont.className}`} ref={navRef}>
            <div className={styles.navbarWrapper}>
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
                <button
                    className={styles.menuButton}
                    onClick={() => setMenuOpen(o => !o)}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? <CloseIcon /> : <MenuIcon />}
                </button>
            </div>
            <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
                <ul className={styles.mobileMenuContent}>
                    {navItems.map((item, i) => (
                        <li key={i}>
                            <Link
                                href={item.href}
                                className={isActive(item) ? styles.active : ''}
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <a href="/cv.pdf" download className={styles.cvButtonMobile} onClick={() => setMenuOpen(false)}>
                            <DownloadIcon />
                            CV
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
