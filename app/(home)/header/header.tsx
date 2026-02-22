'use client'

import styles from './header.module.css';
import Image from 'next/image';
import { titleFont } from '../../fonts';
import HeaderAnimation from './header_animation';
import { useRef } from 'react';

function Gradient(props: { text: string, from: [number, number, number], to: [number, number, number] }) {
    const { text, from, to } = props;
    const gradient = `linear-gradient(90deg, rgb(${from[0]}, ${from[1]}, ${from[2]}), rgb(${to[0]}, ${to[1]}, ${to[2]}))`;
    return <span style={{ background: gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{text}</span>;
}

/**
 * Header component
 * @param props
 * @param props.children Children
 * @param props.style Style
 */
export default function Header(props: { children?: React.ReactNode, style?: React.CSSProperties, home?: boolean }) {
    const headerRef = useRef<HTMLElement>(null);
    
    return <>
        <header className={`${styles.header} ${titleFont.className}`} style={props.style} ref={headerRef}>
            <HeaderAnimation headerRef={headerRef} />

            <div className={styles.headerContent}>
                <div className={styles.headerContainer}>
                    <div className={styles.profilePicture}>
                        <Image src='/imgs/profil.jpg' alt="Maxime Dherbécourt's profile picture" height={120} width={120} priority />
                    </div>
                    <div className={styles.headerText}>
                        <h1>Hi! I’m Maxime<span style={{ color: "var(--color-green)", fontSize: 26 }}>.</span></h1>
                        <h2><Gradient text="PhD Student in Physics" from={[115, 155, 183]} to={[47, 54, 61]} /></h2>
                    </div>
                </div>

                {props.children}
            </div>
        </header>
    </>
}
