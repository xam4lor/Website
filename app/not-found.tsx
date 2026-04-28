import Link from 'next/link';
import Navbar from './(home)/header/navbar';
import styles from './error.module.css';
import { titleFont, inter } from './fonts';

export default function NotFound() {
    return (
        <>
            <Navbar />
            <div className={`${styles.page} ${inter.className}`}>
                <p className={`${styles.code} ${titleFont.className}`}>404</p>
                <h1 className={`${styles.title} ${titleFont.className}`}>
                    Page not found<span className={styles.dot}>.</span>
                </h1>
                <p className={styles.message}>
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <div className={styles.actions}>
                    <Link href="/" className={styles.homeLink}>← Back to portfolio</Link>
                </div>
            </div>
        </>
    );
}
