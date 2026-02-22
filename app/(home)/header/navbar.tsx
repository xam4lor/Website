import styles from './navbar.module.css';
import { titleFont } from '../../fonts';
import { useState } from 'react';

export default function Navbar() {
    const [selectedId, setSelectedId] = useState(0);
    return <>
        <nav className={`${styles.navbar} ${titleFont.className}`}>
            <ul className={styles.navbarContent}>
                <li><a className={selectedId === 0 ? styles.active : ''} href="#articles" onClick={() => setSelectedId(0)}>About Me</a></li>
                <li><a className={selectedId === 1 ? styles.active : ''} href="#projects" onClick={() => setSelectedId(1)}>Publications</a></li>
                <li><a className={selectedId === 2 ? styles.active : ''} href="#cv" onClick={() => setSelectedId(2)}>CV</a></li>
                <li><a className={selectedId === 3 ? styles.active : ''} href="#projects" onClick={() => setSelectedId(3)}>Projects</a></li>
            </ul>
        </nav>
    </>
}
