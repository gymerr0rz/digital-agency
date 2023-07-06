import animated from 'tailwindcss-animated';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        subtext: '#7B7B7B',
        maincolor: '#5C40C9',
        stroke: '#565859',
      },
    },
  },
  plugins: [animated],
};
