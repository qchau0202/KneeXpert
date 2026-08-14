/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0067da', // Your requested blue
        black: '#000000',
        white: '#ffffff',
      },
      fontFamily: {
        // Assuming you have Google Sans loaded
        sans: ['"Google Sans"', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}