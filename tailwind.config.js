/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-pink': '#f72585',
        'neon-orange': '#fb5607',
        'neon-purple': '#7209b7'
      },
    },
  },
  plugins: [],
}