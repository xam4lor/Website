import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from "next";
import styles from './layout.module.css'
import { inter } from "./fonts.ts";
import "./globals.css";
import Script from "next/script";
import { CustomAnalytics } from './api/client/analytics.tsx';

export const metadata: Metadata = {
    title: {
        template: '%s | Maxime Dherbécourt',
        default: 'Maxime Dherbécourt Portfolio'
    },
    description: "Personal portfolio of Maxime Dherbécourt.",
    keywords: [
        "portfolio", "maxime dherbecourt", "maxime dherbécourt", "dherbecourt", "mdherbecourt", "mdherbécourt",
        "science", "physics", "educational", "explorable", "explorables", "explorable-explanations", "interactive", "article",
        "articles", "simulation", "simulations", "learning", "research", "experiments", "visualization", "data", "technology"
    ],
    authors: [{ name: "Maxime Dherbécourt", url: "https://mdherbecourt.dev" }],
    creator: "Maxime Dherbécourt",
    publisher: "Maxime Dherbécourt",
    category: "Science",
    applicationName: "Maxime Dherbécourt Portfolio",
    openGraph: {
        title: "Maxime Dherbécourt Portfolio",
        description: "Personal portfolio of Maxime Dherbécourt.",
        url: "https://mdherbecourt.dev/",
        siteName: "Maxime Dherbécourt Portfolio",
        images: [
            {
                url: "https://mdherbecourt.dev/imgs/og-image.png",
                width: 686,
                height: 335,
                alt: "Maxime Dherbécourt - Portfolio"
            }
        ],
        locale: "en_US",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Maxime Dherbécourt Portfolio",
        description: "Personal portfolio of Maxime Dherbécourt.",
        site: "https://mdherbecourt.dev/",
        creator: "@mdherbecourt",
        images: [
            "https://mdherbecourt.dev/imgs/og-image.png"
        ]
    },
    robots: "index, follow",
    alternates: {
        canonical: "https://mdherbecourt.dev/",
        languages: {
            "en-US": "https://mdherbecourt.dev/"
        },
        types: {
            "application/rss+xml": "https://mdherbecourt.dev/feed.xml"
        }
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.className} antialiased`}>
            <head>
                {/* Google tag (gtag.js) */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-9SFPSHEBDE"
                    strategy="afterInteractive"
                />
                <Script id="gtag-init" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-9SFPSHEBDE');
                    `}
                </Script>
            </head>
            <body className={styles.body}>
                {children}

                <CustomAnalytics />
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
