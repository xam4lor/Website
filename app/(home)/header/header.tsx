'use client'

import styles from './header.module.css';
import Image from 'next/image';
import HeaderAnimation from './header_animation';
import { socialLinks } from '../../ui/social-links';
import { researchInterests } from '../../data/education';
import { useRef } from 'react';

const DownloadIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </svg>
);

export default function Header() {
    const headerRef = useRef<HTMLElement>(null);

    return (
        <header id="about" className={styles.header} ref={headerRef}>
            <HeaderAnimation headerRef={headerRef} />

            <div className={styles.inner}>
                <Image
                    src='/imgs/profil.jpg'
                    alt="Portrait of Maxime Dherbécourt"
                    className={styles.portrait}
                    width={296}
                    height={296}
                    priority
                />
                <div>
                    <h1 className={styles.name}>
                        Hi, I&apos;m <span className={styles.highlight}>Maxime Dherbécourt</span>.
                    </h1>
                    <p className={styles.role}>
                        PhD student in physics at <a href="https://www.ipcms.fr/" target="_blank" rel="noopener noreferrer">IPCMS</a>, Strasbourg
                    </p>
                    <p className={styles.bio}>
                        I work on <strong>strong light-matter coupling</strong> and its effects on <strong>Raman scattering</strong> and <strong>transport properties</strong>.
                        Beyond research, I enjoy teaching and making science accessible through interactive explorations and visual explanations.
                    </p>
                    <ul className={styles.interests} aria-label="Research interests">
                        {researchInterests.map((interest) => <li key={interest}>{interest}</li>)}
                    </ul>
                    <ul className={styles.actions}>
                        <li>
                            <a href="/cv.pdf" download className={styles.cv}><DownloadIcon /> Download CV</a>
                        </li>
                        {socialLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className={styles.social}
                                    {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                >
                                    {link.icon}{link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
}
