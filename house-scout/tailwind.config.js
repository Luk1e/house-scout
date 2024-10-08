/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        firaGo: ["FiraGo", "sans-serif"],
        helveticaNeue: ["HelveticaNeue", "sans-serif"],
      },

      screens: {
        "1700px": "1700px",
        "1600px": "1600px",
        "2xl": "1560px",
      },

      fontWeight: {
        firaGo400: 400,
        firaGo500: 500,
        firaGo700: 700,
      },
      boxShadow: {
        modalShadow: "5px 5px 4px 0px rgba(0, 0, 0, 0.08)",
        cardShadow: "5px 5px 12px 0px rgba(2, 21, 38, 0.08)",
      },
    },
  },
  plugins: [],
};
