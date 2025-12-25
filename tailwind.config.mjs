/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                cream: '#FDF6E3',
                dark: '#2D2D2D',
                accent: '#FF6B6B',
            },
            boxShadow: {
                hard: '4px 4px 0px 0px rgba(0,0,0,1)',
                'hard-sm': '2px 2px 0px 0px rgba(0,0,0,1)',
            }
        }
    },
    plugins: [],
};
