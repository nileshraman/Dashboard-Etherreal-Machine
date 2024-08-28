import type { Config } from "tailwindcss";
import scrollbar from "tailwind-scrollbar";

/** @type {Config} */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html", 
  ],
  theme: {
    extend: {
      colors: {
        "navbar-bg": "#2b2a2a",
        "icon-default": "#5a5b5a",
        "icon-hover": "#f74242",
        "label-color-growth": "#1C791D",
        "label-color-loss": "#cc0000",
        "custom-bg": "#323233",
        "scrollbar-thumb": "#454445", 
        "scrollbar-track": "#333332", 
      },
      animation: {
        "custom-bounce": "customBounce 1s ease-in-out",
      },
      keyframes: {
        customBounce: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
      },
    },
  },
  plugins: [scrollbar({})],
};

export default config;
