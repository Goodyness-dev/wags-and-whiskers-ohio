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
          darkBg: '#1C1917',
          darkSurface: '#262220',
          darkBorder: '#3D3733',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'wedding': '0 10px 30px -10px rgba(142, 91, 71, 0.12), 0 4px 12px -2px rgba(43, 38, 35, 0.04)',
        'wedding-lg': '0 20px 40px -12px rgba(142, 91, 71, 0.20), 0 8px 20px -4px rgba(43, 38, 35, 0.08)',
      }
    },
  },
  plugins: [],
}
