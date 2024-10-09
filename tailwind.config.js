/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#141B42', 
        secondary: '#111827',
        tertiary: '#F549FF', 
      },
      backgroundImage: {
       'custom-gradient': 'linear-gradient(to right, #2783FF, #B345FF, #F549FF)'
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'], // Ajout de la police DM Sans
      },
    },
  },
  plugins: [],
}

