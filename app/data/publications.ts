export type Publication = {
    authors: string;
    year: number;
    title: string;
    journal: string;
    details?: string;
    link?: string;
    image?: string;
};

export const publications: Publication[] = [
    {
        authors: "M. Dherbécourt, J. Bellessa, C. Symonds, G. Weick and D. Hagenmüller",
        year: 2026,
        title: "Spontaneous Raman Scattering under Vibrational Strong Coupling: The Critical Role of Polariton Spatial Mode Coherence",
        journal: "Physical Review Letters",
        details: "137, 116901",
        link: "https://doi.org/10.1103/m138-4w64",
        image: "/publications/2026_raman.png",
    },
    {
        authors: "D. Kim, M. Dherbécourt, et al.",
        year: 2026,
        title: "Symmetry-controlled ultrastrong phonon–photon coupling in a terahertz cavity",
        journal: "The Journal of Chemical Physics",
        details: "164, 104201",
        link: "https://doi.org/10.1063/5.0313120",
        image: "/publications/2026_symmetry.png",
    }
];

const journalRegistry: { name: string; abbr: string; color: string }[] = [
    { name: "Physical Review Letters", abbr: "PRL", color: "#c8372d" },
    { name: "Physical Review X",       abbr: "PRX", color: "#b8336a" },
    { name: "Physical Review A",       abbr: "PRA", color: "#7a4cc2" },
    { name: "Physical Review B",       abbr: "PRB", color: "#5b54c9" },
    { name: "The Journal of Chemical Physics", abbr: "JCP", color: "#1f6fb2" },
    { name: "arXiv preprint",          abbr: "arXiv", color: "#7d7c76" },
];

function findJournal(journal: string) {
    const lower = journal.toLowerCase();
    return journalRegistry.find(j => lower.includes(j.name.toLowerCase()));
}

export function getJournalAbbr(journal: string): string {
    return findJournal(journal)?.abbr ?? journal;
}

export function getJournalColor(journal: string): string {
    return findJournal(journal)?.color ?? "#7d7c76";
}
