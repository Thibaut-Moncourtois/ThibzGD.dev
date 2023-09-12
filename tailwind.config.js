/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        burtons: 'burtons',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
