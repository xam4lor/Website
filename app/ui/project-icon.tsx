export function ProjectIcon({ type, size = 18 }: { type: string; size?: number }) {
    const shared = {
        width: size,
        height: size,
        viewBox: "0 0 24 24" as const,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round" as const,
        strokeLinejoin: "round" as const,
    };

    switch (type) {
        case 'flask':
            return (
                <svg {...shared}>
                    <path d="M9 3H15" />
                    <path d="M10 3v7.5L5 20h14L14 10.5V3" />
                </svg>
            );
        case 'globe':
            return (
                <svg {...shared}>
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                </svg>
            );
        case 'book':
            return (
                <svg {...shared}>
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
            );
        case 'code':
        default:
            return (
                <svg {...shared}>
                    <polyline points="16,18 22,12 16,6" />
                    <polyline points="8,6 2,12 8,18" />
                </svg>
            );
    }
}
