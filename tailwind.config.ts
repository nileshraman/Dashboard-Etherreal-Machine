import type { Config } from 'tailwindcss';
import scrollbar from 'tailwind-scrollbar';

/** @type {Config} */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navbar-bg': '#2b2a2a',
        'icon-default': '#5a5b5a',
        'icon-hover': '#dadada',
        'label-color-growth': '#497b54',
        'label-color-loss': '#994144',
        'custom-bg': '#323233',
        'scrollbar-thumb': '#454445', // Custom scrollbar thumb color
        'scrollbar-track': '#333332', // Custom scrollbar track color
      },
    },
  },
  plugins: [
    scrollbar({}), // Pass an empty object or configuration options if needed
  ],
};

export default config;
