/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:{
        montserrat:['Montserrat', 'sans-serif'],
        pattaya:['Pattaya', 'sans-serif'],
      },
      backgroundImage: {
        // 'hero-img': "url('./src/assets/daniel-leone-v7daTKlZzaw-unsplash-1.png')",
      },
    },
  },
  plugins: [],
}