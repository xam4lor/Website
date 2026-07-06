export type HighlightItem = {
    role: string;
    description: string;
    venue?: string;
    period: string;
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
            { role: "Poster", description: 'Raman Scattering in the Vibrational Strong Coupling Regime', venue: "Summer School – Open Quantum Systems, Les Houches, France", period: "2026" },
            { role: "Poster", description: 'Raman Scattering in the Vibrational Strong Coupling Regime', venue: "QMat Days, Strasbourg, France", period: "2026" },
            { role: "Contributed Talk", description: 'Spontaneous Raman scattering under Vibrational Strong Coupling', venue: "European Materials Research Society Conference, Strasbourg, France", period: "2026" },
            { role: "Invited Talk", description: 'Spontaneous Raman scattering under Vibrational Strong Coupling', venue: "Namasute Workshop, Odense, Denmark", period: "2026" },
            { role: "Invited Talk", description: 'Spontaneous Raman scattering under Vibrational Strong Coupling : The critical role of polariton spatial mode coherence', venue: "ℏ-Meeting, Strasbourg, France", period: "2025" },
        ]
    }
];

const roleRegistry: { name: string; color: string }[] = [
    { name: "Lecturer", color: "#42a5f5" },
    { name: "Assistant", color: "#5c6bc0" },
    { name: "Organizer", color: "#ab47bc" },
    { name: "Prize Winner", color: "#f9a825" },
    { name: "Participant", color: "#26a69a" },
    { name: "Poster", color: "#78a69a" },
    { name: "Invited Talk", color: "#26c6da" },
    { name: "Contributed Talk", color: "#26c6da" },
];

export function getRoleColor(role: string): string {
    return roleRegistry.find(r => r.name.toLowerCase() === role.toLowerCase())?.color ?? "#39e0c1";
}
