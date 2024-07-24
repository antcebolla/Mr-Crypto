/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        'kanit-black':['kanit-black', 'serif'],
        'Roboto-slab':['kanit-black', 'serif']
      }
    },
  },
  plugins: [],
}

