/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e50914",
        ink: "#0b0b14",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(0,0,0,.35)",
      },
      borderRadius: { "2xl": "1.25rem" },
    },
  },
  plugins: [],
};
