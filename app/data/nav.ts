export type NavItem = {
    label: string;
    href: string;
    page: string | null;
};

export const navItems: NavItem[] = [
    { label: "About",        href: "/#about",      page: null },
    { label: "Highlights",  href: "/#highlights", page: null },
    { label: "Publications", href: "/publications", page: "/publications" },
    { label: "Projects",     href: "/projects",     page: "/projects" },
];
