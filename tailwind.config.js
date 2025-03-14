/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        colors: {
          primary: {
            light: '#84ca0b', // Light mode main accent (slightly darker and more readable)
            dark: '#a5fd0e',  // Dark mode accent (original color)
          },
          achievement: {
            light: '#ff9500', // Light mode achievement accent (orange)
            dark: '#ff9500',  // Dark mode achievement accent (same orange)
          },
          accent: {
            purple: '#9333ea', // Purple accent for light mode
          }
        },
      },
    },
    plugins: [],
  }