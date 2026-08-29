/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0d2b6e",
          deep: "#1349bf",
        },
        brand: {
          DEFAULT: "#23A4F5",
          light: "#52A8FF",
          dark: "#1a8cd8",
        },
        surface: "#f4f7fb",
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 12px 40px rgba(19, 73, 191, 0.12)",
      },
    },
  },
  plugins: [],
};
