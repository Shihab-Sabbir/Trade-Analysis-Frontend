/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const plugin = require('tailwindcss/plugin');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#503AF2',
        light:"#f4f0ff",
        primaryHover:"#2413a3d4",
        secondary: '#63a8f8',
        error:"#ff4d4f",
        warning:"#faad14",
        success:"#52c41a",
      },
      screens: {
        xs: '480px',
        smAnt: '576px',
        lgAnt: '992px',
        xlAnt: '1200px',
        xxlAnt: '1600px',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme('fontSize.2xl') },
        h2: { fontSize: theme('fontSize.xl') },
        h3: { fontSize: theme('fontSize.lg') },
      });
    }),
  ],
  // corePlugins:{
  //   preflight:false
  // }
};
