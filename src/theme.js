import { writable } from 'svelte/store';

export const currentTheme = writable('light');

export function setInitialTheme() {
    if (typeof window !== "undefined") {
        const theme = window.localStorage.getItem('theme');
        if (theme) {
            document.documentElement.setAttribute('data-theme', theme);
            currentTheme.set(theme);
        }
    }
}

export function toggleTheme() {
    if (typeof window !== "undefined") {
        const theme = window.localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
        window.localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
        currentTheme.set(theme);
    }
}
