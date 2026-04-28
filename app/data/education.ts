export type EducationEntry = {
    degree: string;
    institution: string;
    location: string;
    period: string;
    description?: string;
};

export const education: EducationEntry[] = [
    {
        degree: "PhD in Physics – Strong Light-Matter Coupling",
        institution: "Institut de Physique et Chimie des Matériaux de Strasbourg (IPCMS)", 
        location: "France",
        period: "2024 – Now",
        description: "Advisors: Guillaume Weick and David Hagenmüller.",
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

export const researchInterests = ["Polaritonics", "Condensed Matter", "Open Quantum Systems", "Many-Body Computational Methods"];
