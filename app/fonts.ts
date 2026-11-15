import { IBM_Plex_Sans, Instrument_Sans } from "next/font/google";

export const sansFont = IBM_Plex_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    style: ["normal", "italic"],
    variable: "--font-sans",
    display: "swap",
});

export const displayFont = Instrument_Sans({
    subsets: ["latin", "latin-ext"],
    weight: "variable",
    variable: "--font-display",
    display: "swap",
});
