/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],

  theme: {
    extend: {
      animation: {
        slideKiri: "slideKiri 1s ",
        slideKanan: "slideKanan 1s",
        wiggle: "wiggle 1s ease-in-out infinite",
        wiggle2 : "wiggle2 1s ease-in-out infinite"
      },
      keyframes: {
        slideKiri: {
          "0%": {
            transform: "translateX(100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        slideKanan: {
          "0%": {
            transform: "translateX(-100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        wiggle2 : {
          "0%, 100%": { transform: "rotate(3deg)" },
          "50%": { transform: "rotate(-3deg)" },
        }
      },
      colors: {
        "color-background": "#282C33",
        primary: "#C778DD",
        abu: "#ABB2BF",
      },
      fontFamily: {
        FiraCode: "Fira Code",
      },
    },
  },
  plugins: [],
  safelist: [
    "!duration-[0ms]",
    "!delay-[0ms]",
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],
};
