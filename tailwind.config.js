/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkBlue: '#000B1B',
        darkPurple: '#1D0021'
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #000B1B 0%, #1D0021 100%)',
        'gradient-light': 'radial-gradient(circle, rgba(245,221,231,1) 0%, rgba(201,217,236,1) 100%)'
      }
    },
  },
  plugins: [],
};
