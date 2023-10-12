/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "credera-grey": "#3a3a3a",
        "credera-red": "#e55f4c",
        "credera-white": "#cfcfcf",
        "lancaster-red": "#b5121b",
      },
    },
  },
  plugins: [],
};
