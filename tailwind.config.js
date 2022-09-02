/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        red: '#F94F4F',
        'bg-black': '#191921',
        white: '#FFFFFF',
        'text-black': '#000000',
      },
    },
  },
  plugins: [],
};
