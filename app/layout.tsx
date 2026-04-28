import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from "next";
import styles from './layout.module.css'
import { inter } from "./fonts.ts";
// @ts-expect-error: side-effect CSS import lacks type declarations
import "./globals.css";
import Script from "next/script";
import { CustomAnalytics } from './api/client/analytics.tsx';

export const metadata: Metadata = {
    metadataBase: new URL("https://mdherbecourt.dev"),
    title: {
        template: "%s | Maxime Dherbécourt",
        default: "Maxime Dherbécourt",
    },
    description:
        "PhD student in Physics at [University]. I work on [research area] and share interactive science explorations, publications, and open-source projects.",
    keywords: [
        "Maxime Dherbécourt", "mdherbecourt", "PhD", "PhD Physics", "physics", "physics research",
        "portfolio", "scientific publications", "interactive science", "explorable explanations",
        "simulation", "visualization", "open source", "research",
    ],
    authors: [{ name: "Maxime Dherbécourt", url: "https://mdherbecourt.dev" }],
    creator: "Maxime Dherbécourt",
    publisher: "Maxime Dherbécourt",
    category: "Science",
    applicationName: "Maxime Dherbécourt",
    icons: {
        icon: "/imgs/favicon.ico",
        shortcut: "/imgs/favicon.ico",
    },
    openGraph: {
        title: "Maxime Dherbécourt",
        description:
            "PhD student in Physics. Publications, projects, and interactive science explorations.",
        url: "https://mdherbecourt.dev/",
        siteName: "Maxime Dherbécourt",
        images: [
            {
                url: "/imgs/og-image.png",
                width: 686,
                height: 335,
                alt: "Maxime Dherbécourt – PhD student in Physics",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Maxime Dherbécourt",
        description:
            "PhD student in Physics. Publications, projects, and interactive science explorations.",
        creator: "@mdherbecourt",
        images: ["/imgs/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true },
    },
    alternates: {
        canonical: "https://mdherbecourt.dev/",
        languages: { "en-US": "https://mdherbecourt.dev/" },
        types: { "application/rss+xml": "https://mdherbecourt.dev/feed.xml" },
    },
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
