/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        logo: 'logo 0.5s ease-in-out',
      },
      keyframes: {
        logo: {
          '0%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(0deg)'},
        }
      }
    },
  },
  plugins: [],
}

