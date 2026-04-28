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
        journal: "arXiv",
        details: "arXiv:2511.01723",
        link: "https://arxiv.org/abs/2511.01723v1",
    },
    {
        authors: "D. Kim, M. Dherbécourt, et al.",
        year: 2026,
        title: "Symmetry-controlled ultrastrong phonon–photon coupling in a terahertz cavity",
        journal: "Journal of Chemical Physics",
        details: "vol. 164, 104201",
        link: "https://doi.org/10.1063/5.0313120",
    }
];

const journalRegistry: { name: string; abbr: string; color: string }[] = [
    { name: "Physical Review Letters", abbr: "PRL",       color: "#e53935" },
    { name: "Physical Review X",       abbr: "PRX",       color: "#d81b60" },
    { name: "Physical Review A",       abbr: "PRA",       color: "#8e24aa" },
    { name: "Physical Review B",       abbr: "PRB",       color: "#8e24aa" },
    { name: "Journal of Chemical Physics", abbr: "JCP",   color: "#00838f" },
    { name: "arXiv",                   abbr: "arXiv",     color: "#546e7a" },
];

function findJournal(journal: string) {
    const lower = journal.toLowerCase();
    return journalRegistry.find(j => lower.includes(j.name.toLowerCase()));
}

export function getJournalColor(journal: string): string {
    return findJournal(journal)?.color ?? "#546e7a";
}

export function getJournalAbbr(journal: string): string {
    return findJournal(journal)?.abbr ?? journal;
}
