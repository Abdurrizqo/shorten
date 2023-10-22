/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "orange-theme": "#F99417",
        "dark-theme": "#352F44",
      },
      screens: {
        phone: "480px",
        "small-phone": "320px",
      },
    },
  },
  plugins: [],
};
