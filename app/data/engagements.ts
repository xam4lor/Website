export type EngagementItem = {
    role: string;
    description: string;
    venue?: string;
    period: string;
};

export type EngagementCategory = {
    name: string;
    items: EngagementItem[];
};

export const engagements: EngagementCategory[] = [
    {
        name: "Conferences",
        items: [
            { role: "Talk",   description: '"Your Talk Title"',   venue: "Conference Name, City", period: "2024" },
            { role: "Poster", description: '"Your Poster Title"', venue: "Conference Name, City", period: "2023" },
        ],
    },
    {
        name: "Teaching",
        items: [
            { role: "Lecture", description: "Lecture Topic or Course Title", venue: "Institution Name", period: "2024" },
        ],
    },
    {
        name: "Awards",
        items: [
            { role: "Prize", description: "Prize Name for Popularization Article", venue: "Awarding Organization", period: "2023" },
        ],
    },
    {
        name: "Reviewing",
        items: [
            { role: "Reviewer", description: "Physical Review Letters", venue: "American Physical Society", period: "2023 – present" },
            { role: "Reviewer", description: "Physical Review A",       venue: "American Physical Society", period: "2024 – present" },
        ],
    },
    {
        name: "Outreach",
        items: [
            { role: "Organizer", description: "Public Challenge Name", venue: "Association Name", period: "2022" },
        ],
    },
];
