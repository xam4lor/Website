import styles from './footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <span>© {new Date().getFullYear()} Maxime Dherbécourt</span>
                <a href="#top" className={styles.top}>Back to top ↑</a>
            </div>
        </footer>
    );
}
