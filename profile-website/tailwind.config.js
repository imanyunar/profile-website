/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'media', // mengikuti preferensi sistem
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7C3AED', // purple utama
          dark: '#5B21B6' // shade lebih gelap
        },
        background: {
          light: '#F9F5FF',
          dark: '#1E1B2F'
        },
        foreground: {
          light: '#171717',
          dark: '#EDEDED'
        }
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'SFMono-Regular']
      }
    }
  },
  plugins: [],
};
