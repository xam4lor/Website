import Navbar from './(home)/header/navbar';
import Footer from './(home)/footer/footer';
import Link from 'next/link';
import styles from './error.module.css';

export default function NotFound() {
    return (
        <>
            <Navbar />
            <main className={styles.page}>
                <p className={styles.code}>404</p>
                <h1 className={styles.title}>Page not found</h1>
                <p className={styles.message}>The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
                <div className={styles.actions}>
                    <Link href="/" className={styles.primary}>Back to home</Link>
                </div>
            </main>
            <Footer />
        </>
    );
}
