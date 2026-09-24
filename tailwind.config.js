/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        editorial: {
          ivory: '#F5F0E8',
          ivoryLight: '#FAF7F2',
          ink: '#171713',
          inkLight: '#2A2A24',
          sage: '#89917B',
          sageLight: '#E8EBE4',
          gold: '#C9A96E',
          goldLight: '#F4ECE0',
          blush: '#D9B8AF',
          charcoal: '#1F1F1B',
          darkBg: '#11110E',
          darkSurface: '#191915',
          darkBorder: '#2E2E28',
        },
        botanical: {
          forest: '#171713',
          forestHover: '#2A2A24',
          forestDark: '#11110E',
          sage: '#89917B',
          sageMuted: '#A2A997',
          sageLight: '#E8EBE4',
          sageSoft: '#F5F0E8',
          cream: '#F5F0E8',
          cardBg: '#FAF7F2',
          cardBorder: '#E6E0D4',
          charcoal: '#171713',
          gold: '#C9A96E',
          darkBg: '#11110E',
          darkSurface: '#191915',
          darkBorder: '#2E2E28',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', '"Cormorant Garamond"', 'serif'],
        heading: ['"Cormorant Garamond"', 'serif'],
      },
      boxShadow: {
        'editorial': '0 20px 40px -15px rgba(23, 23, 19, 0.08), 0 4px 12px -2px rgba(23, 23, 19, 0.03)',
        'editorial-lg': '0 30px 60px -20px rgba(23, 23, 19, 0.16), 0 10px 24px -4px rgba(23, 23, 19, 0.06)',
        'frosted': '0 8px 32px 0 rgba(0, 0, 0, 0.12)',
      }
    },
  },
  plugins: [],
}
