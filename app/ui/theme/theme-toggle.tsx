'use client'

import styles from './theme-toggle.module.css';
import { setTheme, useEffectiveTheme } from './use-theme';

const SunIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
);

const MoonIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
);

export function ThemeToggle({ variant = 'desktop' }: { variant?: 'desktop' | 'mobile' }) {
    const theme = useEffectiveTheme();
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    const label = `Switch to ${nextTheme} theme`;

    return (
        <button
            type="button"
            className={variant === 'mobile' ? styles.themeToggleMobile : styles.themeToggle}
            onClick={() => setTheme(nextTheme)}
            aria-label={label}
            title={label}
        >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            {variant === 'mobile' && <span>{nextTheme === 'light' ? 'Light mode' : 'Dark mode'}</span>}
        </button>
    );
}
