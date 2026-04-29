export type EngagementItem = {
    role: string;
    description: string;
    venue?: string;
    period: string;
    href?: string;
};

export type EngagementCategory = {
    name: string;
    items: EngagementItem[];
};

export const engagements: EngagementCategory[] = [
    {
        name: "Teaching",
        items: [
            { role: "Lecturer", description: "Electromagnetism 1", venue: "Université de Strasbourg – General Science License", period: "2024 – 2026" },
            { role: "Assistant", description: "French Physicists' Tournament", venue: "Université de Strasbourg – Master of Physics", period: "2024 – 2026" }
        ]
    },
    {
        name: "Initiatives",
        items: [
            { role: "Organizer", description: "French Physicists' Tournament", venue: "Young Researcher Network – Société Française de Physique", period: "2025 – Now", href: "https://france.iptnet.info" },
            { role: "Prize Winner", description: "Winner of a science popularization contest", venue: "Summer of Math Exposition – The Science of Complexity", period: "2025", href: "https://some.3b1b.co/entries/b8300cb6-9de1-44d4-ac2a-fd1ca5b20819" },
            { role: "Participant", description: "Scientific Game Jam on my PhD project", venue: 'Strasbourg – Created game "Molec\' Adventure"', period: "2025", href: "https://scientificgamejam.org" },
        ]
    },
    {
        name: "Presentations",
        items: [
            { role: "Poster", description: '"Spontaneous Raman Scattering Under Vibrational Strong Coupling : The critical role of polariton spatial mode coherence"', venue: "Computational Physics Spring School, Les Houches, France", period: "2026" },
            { role: "Talk", description: '"Raman Scattering in the Vibrational Strong Coupling Regime"', venue: "European Materials Research Society Conference, Strasbourg, France", period: "2026" },
            { role: "Talk", description: '"Raman Scattering in the Vibrational Strong Coupling Regime"', venue: "Namasute Workshop, Odense, Denmark", period: "2026" },
            { role: "Meeting", description: '"Spontaneous Raman scattering under Vibrational Strong Coupling : The critical role of polariton spatial mode coherence"', venue: "ℏ-Meeting, Strasbourg, France", period: "2025" },
        ]
    }
];
