const iconProps = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
};

const EmailIcon = () => (
    <svg {...iconProps}>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 6-10 7L2 6" />
    </svg>
);

const GitHubIcon = () => (
    <svg {...iconProps} fill="currentColor" stroke="none">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
);

const ScholarIcon = () => (
    <svg {...iconProps}>
        <path d="M22 10 12 5 2 10l10 5 10-5z" />
        <path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
    </svg>
);

const OrcidIcon = () => (
    <svg {...iconProps}>
        <circle cx="12" cy="12" r="10" />
        <path d="M9 8v8M12.5 8H14a4 4 0 0 1 0 8h-1.5z" />
        <circle cx="9" cy="5.5" r="0.2" fill="currentColor" />
    </svg>
);

export const email = "maxime.dherbecourt@gmail.com";

export const socialLinks = [
    { label: "Email", href: `mailto:${email}`, icon: <EmailIcon /> },
    { label: "GitHub", href: "https://github.com/xam4lor", icon: <GitHubIcon /> },
    { label: "Scholar", href: "https://scholar.google.com/citations?user=k8_CYVUAAAAJ", icon: <ScholarIcon /> },
    { label: "ORCID", href: "https://orcid.org/0009-0005-2834-4862", icon: <OrcidIcon /> },
];
