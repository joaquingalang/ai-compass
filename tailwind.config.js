/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          turqoise: {
            400: "#0A6F66",
            300: "#0C9488",
            200: "#15B9A8",
            100: "#CCFCF0",
          },
          indigo: {
            400: "#1E293A",
            300: "#27354A",
            200: "#4B5461",
            100: "#F1F5F9",
          },
          green: "#F1F5F9",
          red: "#EF405F",
          yellow: "#E8A211",
          white: "#F1F5F9"
        }
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
}

