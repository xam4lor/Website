import type { Metadata } from 'next';
import Navbar from '../(home)/header/navbar';
import Footer from '../(home)/footer/footer';
import { publications } from '../data/publications';
import Section, { PageIntro } from '../ui/section/section';
import PublicationEntry, { PublicationList } from '../ui/publication-entry/publication-entry';

export const metadata: Metadata = {
    title: "Publications",
    description:
        "Peer-reviewed articles and preprints in Physics by Maxime Dherbécourt, including work published in Physical Review Letters and other journals.",
    openGraph: {
        title: "Publications | Maxime Dherbécourt",
        description:
            "Peer-reviewed articles and preprints in Physics by Maxime Dherbécourt.",
        url: "https://mdherbecourt.dev/publications",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Publications | Maxime Dherbécourt",
        description:
            "Peer-reviewed articles and preprints in Physics by Maxime Dherbécourt.",
    },
    alternates: { canonical: "https://mdherbecourt.dev/publications" },
};

export default function PublicationsPage() {
    return (
        <>
            <Navbar />
            <main>
                <PageIntro
                    title="Publications"
                    subtitle="Peer-reviewed articles and preprints."
                    actions={[
                        { href: "https://scholar.google.com/citations?user=k8_CYVUAAAAJ", label: "Google Scholar", external: true },
                        { href: "https://orcid.org/0009-0005-2834-4862", label: "ORCID", external: true },
                    ]}
                />
                <Section title={`${publications.length} articles`}>
                    <PublicationList>
                        {publications.map((pub) => <PublicationEntry key={pub.title} pub={pub} />)}
                    </PublicationList>
                </Section>
            </main>
            <Footer />
        </>
    );
}
