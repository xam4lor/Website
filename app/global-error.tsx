'use client'

import { useEffect } from 'react';
import Link from 'next/link';
import logger from './api/client/logger';

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => { logger.error(error); }, [error]);

    return (
        <html lang="en">
            <head>
                <title>Something went wrong</title>
                <link rel="icon" href="/imgs/favicon.ico" />
                <style>{`
                    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
                    body {
                        background: #0d1419;
                        color: #ffffff;
                        font-family: system-ui, -apple-system, sans-serif;
                        min-height: 100vh;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        text-align: center;
                        padding: 32px;
                    }
                    .code {
                        font-size: 96px;
                        font-weight: 800;
                        line-height: 1;
                        color: #39e0c1;
                        opacity: 0.12;
                        letter-spacing: -4px;
                        margin-bottom: 4px;
                    }
                    h1 {
                        font-size: 24px;
                        font-weight: 700;
                        margin-bottom: 12px;
                    }
                    p {
                        font-size: 15px;
                        color: rgba(255,255,255,0.46);
                        line-height: 1.7;
                        max-width: 380px;
                        margin: 0 auto 28px;
                    }
                    .actions {
                        display: flex;
                        align-items: center;
                        gap: 18px;
                        justify-content: center;
                        flex-wrap: wrap;
                    }
                    button {
                        font-size: 13.5px;
                        font-weight: 600;
                        color: #39e0c1;
                        background: rgba(57,224,193,0.07);
                        border: 1px solid rgba(57,224,193,0.28);
                        padding: 7px 20px;
                        border-radius: 20px;
                        cursor: pointer;
                    }
                    a {
                        font-size: 13.5px;
                        color: rgba(255,255,255,0.42);
                        text-decoration: none;
                    }
                `}</style>
            </head>
            <body>
                <div>
                    <p className="code">500</p>
                    <h1>Something went wrong.</h1>
                    <p>A critical error occurred. Please try reloading the page.</p>
                    <div className="actions">
                        <button onClick={reset}>Try again</button>
                        <Link href="/">← Back to portfolio</Link>
                    </div>
                </div>
            </body>
        </html>
    );
}
