export type NavItem = {
    label: string;
    href: string;
    page: string | null;
};

export const navItems: NavItem[] = [
    { label: "About",        href: "/#about",      page: null },
    { label: "Publications", href: "/#publications", page: null },
    { label: "Activities",   href: "/#activities",   page: null },
    { label: "Projects",     href: "/projects",     page: "/projects" },
];
