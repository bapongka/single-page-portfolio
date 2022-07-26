/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#a78bfa",
        orange: "#fb923c",
        graphic: "#8b5cf6",
        uiux: "#fdba74",
        apps: "#fca5a5",
        photo: "#14b8a6",
        motion: "#831843",
        illus: "#f87171",
      },
    },
  },
  plugins: [],
};
