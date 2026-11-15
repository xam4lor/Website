'use client'

import { useEffect } from 'react';
import Navbar from './(home)/header/navbar';
import Footer from './(home)/footer/footer';
import Link from 'next/link';
import styles from './error.module.css';
import logger from './api/client/logger';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => { logger.error(error); }, [error]);

    return (
        <>
            <Navbar />
            <main className={styles.page}>
                <p className={styles.code}>500</p>
                <h1 className={styles.title}>Something went wrong</h1>
                <p className={styles.message}>An unexpected error occurred. Try reloading the page, or head back to the homepage.</p>
                <div className={styles.actions}>
                    <Link href="/" className={styles.primary}>Back to home</Link>
                    <button onClick={reset} className={styles.secondary}>Try again</button>
                </div>
            </main>
            <Footer />
        </>
    );
}
