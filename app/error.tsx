'use client'

import { useEffect } from 'react';
import Link from 'next/link';
import Navbar from './(home)/header/navbar';
import styles from './error.module.css';
import { titleFont, inter } from './fonts';
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
            <div className={`${styles.page} ${inter.className}`}>
                <p className={`${styles.code} ${titleFont.className}`}>500</p>
                <h1 className={`${styles.title} ${titleFont.className}`}>
                    Something went wrong<span className={styles.dot}>.</span>
                </h1>
                <p className={styles.message}>
                    An unexpected error occurred. You can try reloading the page or head back to the homepage.
                </p>
                <div className={styles.actions}>
                    <button onClick={reset} className={styles.retryButton}>Try again</button>
                    <Link href="/" className={styles.homeLink}>← Back to portfolio</Link>
                </div>
            </div>
        </>
    );
}
