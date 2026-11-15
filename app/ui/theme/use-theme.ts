'use client'

import { useSyncExternalStore } from 'react';

export type Theme = 'light' | 'dark';

const THEME_STORAGE_KEY = 'theme';
const THEME_CHANGE_EVENT = 'themechange';
const DARK_QUERY = '(prefers-color-scheme: dark)';

function readTheme(): Theme {
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
}

function applyTheme(theme: Theme) {
    if (theme === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
    else document.documentElement.removeAttribute('data-theme');
    window.dispatchEvent(new CustomEvent(THEME_CHANGE_EVENT, { detail: theme }));
}

function hasStoredTheme(): boolean {
    try {
        const stored = localStorage.getItem(THEME_STORAGE_KEY);
        return stored === 'light' || stored === 'dark';
    } catch {
        return false;
    }
}

export function setTheme(theme: Theme) {
    try {
        localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
        // Storage can be unavailable (private browsing)
    }
    applyTheme(theme);
}

function subscribe(callback: () => void) {
    const media = window.matchMedia(DARK_QUERY);
    // Follow OS changes until the visitor picks a theme explicitly
    const onSystemChange = () => {
        if (!hasStoredTheme()) applyTheme(media.matches ? 'dark' : 'light');
    };
    media.addEventListener('change', onSystemChange);
    window.addEventListener(THEME_CHANGE_EVENT, callback);
    window.addEventListener('storage', callback);
    return () => {
        media.removeEventListener('change', onSystemChange);
        window.removeEventListener(THEME_CHANGE_EVENT, callback);
        window.removeEventListener('storage', callback);
    };
}

/** Explicit choice if any, otherwise the system preference. */
export function useEffectiveTheme(): Theme {
    return useSyncExternalStore(subscribe, readTheme, () => 'light');
}
