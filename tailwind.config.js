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
        botanical: {
          forest: '#1E3D2F',
          forestHover: '#152C22',
          forestDark: '#0E2019',
          sage: '#799885',
          sageMuted: '#8EAFA0',
          sageLight: '#E8F0EA',
          sageSoft: '#F2F6F3',
          cream: '#FAF8F5',
          cardBg: '#F5F7F5',
          cardBorder: '#E2EAE4',
          charcoal: '#242826',
          gold: '#D4A373',
          darkBg: '#0D1914',
          darkSurface: '#14251E',
          darkBorder: '#1E382D',
        },
        wedding: {
          ivory: '#FAF8F5',
          cream: '#F5EFEB',
          stone: '#EFE6DD',
          espresso: '#2B2623',
          rose: '#8E5B47',
          roseHover: '#724534',
          roseLight: '#F7ECE6',
          sage: '#5B7566',
          sageLight: '#EBF2EE',
          darkBg: '#0D1914',
          darkSurface: '#14251E',
          darkBorder: '#1E382D',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        heading: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        'wedding': '0 10px 30px -10px rgba(30, 61, 47, 0.10), 0 4px 12px -2px rgba(36, 40, 38, 0.04)',
        'wedding-lg': '0 20px 40px -12px rgba(30, 61, 47, 0.18), 0 8px 20px -4px rgba(36, 40, 38, 0.06)',
        'frosted': '0 8px 32px 0 rgba(0, 0, 0, 0.12)',
      }
    },
  },
  plugins: [],
}
