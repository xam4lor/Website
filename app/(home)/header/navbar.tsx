'use client'

import styles from './navbar.module.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { navItems } from '../../data/nav';
import { useState, useEffect, useRef, startTransition } from 'react';
import { ThemeToggle } from '../../ui/theme/theme-toggle';

const MenuIcon = ({ open }: { open: boolean }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        {open
            ? <path d="M18 6 6 18M6 6l12 12" />
            : <path d="M3 6h18M3 12h18M3 18h18" />}
    </svg>
);

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    const linkClass = (item: typeof navItems[0]) =>
        `${styles.link} ${item.page !== null && pathname === item.page ? styles.active : ''}`;

    useEffect(() => {
        startTransition(() => setMenuOpen(false));
    }, [pathname]);

    useEffect(() => {
        if (!menuOpen) return;
        const handleClick = (e: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(e.target as Node)) setMenuOpen(false);
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [menuOpen]);

    return (
        <nav className={styles.nav} ref={navRef}>
            <div className={styles.bar}>
                <Link href="/" className={styles.brand}>Maxime Dherbécourt</Link>

                <ul className={styles.links}>
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link href={item.href} className={linkClass(item)}>{item.label}</Link>
                        </li>
                    ))}
                    <li>
                        <a href="/cv.pdf" download className={styles.link}>CV</a>
                    </li>
                    <li>
                        <ThemeToggle />
                    </li>
                </ul>

                <button
                    className={styles.menuButton}
                    onClick={() => setMenuOpen(o => !o)}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                >
                    <MenuIcon open={menuOpen} />
                </button>
            </div>

            <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
                <ul className={styles.mobileLinks}>
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link href={item.href} className={linkClass(item)} onClick={() => setMenuOpen(false)}>{item.label}</Link>
                        </li>
                    ))}
                    <li>
                        <a href="/cv.pdf" download className={styles.link} onClick={() => setMenuOpen(false)}>CV</a>
                    </li>
                    <li>
                        <ThemeToggle variant="mobile" />
                    </li>
                </ul>
            </div>
        </nav>
    );
}
