'use client'

import { useSyncExternalStore } from 'react';

export type Theme = 'light' | 'dark';

const THEME_STORAGE_KEY = 'theme';
const THEME_CHANGE_EVENT = 'themechange';

function readSystemTheme(): Theme {
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function readEffectiveTheme(): Theme {
    const explicit = document.documentElement.getAttribute('data-theme');
    if (explicit === 'light' || explicit === 'dark') return explicit;
    return readSystemTheme();
}

export function setTheme(theme: Theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try {
        localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
        // Ignore storage errors (e.g. private browsing)
    }
    window.dispatchEvent(new CustomEvent(THEME_CHANGE_EVENT, { detail: theme }));
}

function subscribe(callback: () => void) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    mediaQuery.addEventListener('change', callback);
    window.addEventListener(THEME_CHANGE_EVENT, callback);
    window.addEventListener('storage', callback);

    return () => {
        mediaQuery.removeEventListener('change', callback);
        window.removeEventListener(THEME_CHANGE_EVENT, callback);
        window.removeEventListener('storage', callback);
    };
}

function getServerSnapshot(): Theme {
    return 'dark';
}

/**
 * Tracks the theme currently applied to the page (explicit user choice, or
 * the system preference when the user hasn't chosen one), staying in sync
 * with toggles in this tab, other tabs, and OS-level changes.
 */
export function useEffectiveTheme(): Theme {
    return useSyncExternalStore(subscribe, readEffectiveTheme, getServerSnapshot);
}
