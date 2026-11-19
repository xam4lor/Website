export type HighlightItem = {
    role: string;
    description: string;
    venue?: string;
    period: string;
    /** "YYYY-MM", only used to order items sharing the same year */
    date?: string;
    href?: string;
};

export type CategoryIcon = "teaching" | "initiative" | "presentation";

export type HighlightsCategory = {
    name: string;
    icon: CategoryIcon;
    items: HighlightItem[];
};

export const highlights: HighlightsCategory[] = [
    {
        name: "Teaching",
        icon: "teaching",
        items: [
            { role: "Lecturer", description: "Electromagnetism 1", venue: "Université de Strasbourg – General Science License", period: "2024 – 2026" },
            { role: "Assistant", description: "French Physicists' Tournament", venue: "Université de Strasbourg – Master of Physics", period: "2024 – 2026" }
        ]
    },
    {
        name: "Initiatives",
        icon: "initiative",
        items: [
            { role: "Organizer", description: "French Physicists' Tournament", venue: "Young Researcher Network – Société Française de Physique", period: "2025 – Now", href: "https://france.iptnet.info" },
            { role: "Prize Winner", description: "Winner of a science popularization contest", venue: 'Summer of Math Exposition – "The Science of Complexity"', period: "2025", href: "https://some.3b1b.co/entries/b8300cb6-9de1-44d4-ac2a-fd1ca5b20819" },
            { role: "Participant", description: "Scientific Game Jam on my PhD project", venue: 'Strasbourg – Created game "Molec\' Adventure', period: "2025", href: "https://scientificgamejam.org" },
        ]
    },
    {
        name: "Presentations",
        icon: "presentation",
        items: [
            { role: "Poster", description: 'Raman Scattering under Vibrational Strong Coupling', venue: "Summer School – Open Quantum Systems, Les Houches, France", period: "2026" },
            { role: "Poster", description: 'Raman Scattering under Vibrational Strong Coupling', venue: "QMat Days, Strasbourg, France", period: "2026" },
            { role: "Contributed Talk", description: 'Raman Scattering under Vibrational Strong Coupling', venue: "European Materials Research Society Conference, Strasbourg, France", period: "2026" },
            { role: "Invited Talk", description: 'Raman Scattering under Vibrational Strong Coupling', venue: "Namasute Workshop, Odense, Denmark", period: "2026" },
            { role: "Invited Talk", description: 'Raman Scattering under Vibrational Strong Coupling', venue: "ℏ-Meeting, Strasbourg, France", period: "2025" },
        ]
    }
];
