import { atom } from 'nanostores';

export type Language = 'vi' | 'en';

// Helper to get initial language safely
const getInitialLanguage = (): Language => {
    return 'vi'; // Always default to 'vi' to prevent SSR/CSR mismatch
};

export const languageStore = atom<Language>(getInitialLanguage());

// Update localStorage when store changes, and sync on load
if (typeof window !== 'undefined') {
    // Sync from localStorage after a slight delay to allow hydration to complete (or just accept a re-render)
    const saved = localStorage.getItem('language');
    if (saved === 'en') {
        // We delay slightly to ensure initial render matches server
        setTimeout(() => {
            languageStore.set('en');
        }, 0);
    }

    languageStore.subscribe((value) => {
        console.log('Language changed to:', value);
        localStorage.setItem('language', value);
    });
}



export const toggleLanguage = () => {
    const current = languageStore.get();
    const next = current === 'vi' ? 'en' : 'vi';
    console.log('Toggling language:', current, '->', next);
    languageStore.set(next);
};
