'use client'

import styles from './header.module.css';
import Image from 'next/image';
import { titleFont } from '../../fonts';
import HeaderAnimation from './header_animation';
import { useRef } from 'react';

const emailAddress = 'maxime.dherbecourt@gmail.com';

const EmailIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
    </svg>
);

export default function Header(props: { children?: React.ReactNode; style?: React.CSSProperties }) {
    const headerRef = useRef<HTMLElement>(null);

    return (
        <header className={`${styles.header} ${titleFont.className}`} style={props.style} ref={headerRef}>
            <HeaderAnimation headerRef={headerRef} />

            <div className={styles.headerContent}>
                <div className={styles.headerContainer}>
                    <div className={styles.profilePicture}>
                        <Image
                            src='/imgs/profil.jpg'
                            alt="Maxime Dherbécourt's profile picture"
                            height={128}
                            width={128}
                            priority
                        />
                    </div>
                    <div className={styles.headerText}>
                        <h1>Hi! I'm Maxime<span className={styles.dot}>.</span></h1>
                        <h2>PhD Student in Physics</h2>
                        <p className={styles.meta}>IPCMS · Strasbourg, France</p>
                        <a className={styles.emailButton} href={`mailto:${emailAddress}`} aria-label={`Send an email to ${emailAddress}`}>
                            <span className={styles.emailIcon}>
                                <EmailIcon />
                            </span>
                            <span className={styles.emailText}>
                                <span className={styles.emailAddress}>{emailAddress}</span>
                            </span>
                        </a>
                    </div>
                </div>

                {props.children}
            </div>
        </header>
    );
}
