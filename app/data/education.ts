export type EducationEntry = {
    degree: string;
    institution: string;
    location: string;
    period: string;
    description?: string;
    /** Thesis or internship title, shown in italics below the degree */
    thesis?: string;
};

export const education: EducationEntry[] = [
    {
        degree: "PhD in Physics – Strong Light-Matter Coupling",
        institution: "IPCMS, Strasbourg",
        location: "France",
        period: "2024 – Now",
        description: "Advisors: Guillaume Weick and David Hagenmüller.",
        thesis: "Vibrational strong coupling in optical cavities",
    },
    {
        degree: "Master Internship – Strong Light-Matter Coupling",
        institution: "CESQ & IPCMS, Strasbourg",
        location: "France",
        period: "2024",
        description: "Advisors: Guillaume Weick and David Hagenmüller.",
        thesis: "Impact of dephasing on the dark states of molecular polaritons",
    },
    {
        degree: "Master Degree – International Center for Fundamental Physics (ICFP)",
        institution: "Ecole Normale Supérieure de Paris",
        location: "France",
        period: "2023 – 2024",
        description: "Condensed Matter track. Graduated with honors.",
    },
    {
        degree: "Magistère de Physique Fondamentale",
        institution: "Université de Strasbourg",
        location: "France",
        period: "2021 – 2024",
    },
    {
        degree: "Bachelor Degree – Advanced Mathematics and Physics",
        institution: "Université de Strasbourg",
        location: "France",
        period: "2019 – 2022",
    },
];

export const researchInterests = ["Light-Matter Interactions", "Condensed Matter", "Open Quantum Systems"];
