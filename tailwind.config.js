/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'avg': '300px',
        'med': '400px',
        'out': '500px'
      }
    },
  },
  plugins: [],
}

