/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //lightmode
        primary: {
          DEFAULT: "#FFFFFF",
          dark: "#1E272E",
        },
        secondary: {
          DEFAULT: "#FAFBFC",
          dark: "#2B343B",
        },
        tertiary: {
          DEFAULT: "#F6F7F9",
          dark: "#384047",
        },
        // Dark mode
        dark: {
          primary: "#1E272E",
          secondary: "#2B343B",
          tertiary: "#384047",
        },
      },
    },
  },
  plugins: [],
};
