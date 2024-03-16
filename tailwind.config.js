/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "credera-grey": "#3a3a3a",
        "credera-red": "#e55f4c",
        "credera-white": "#cfcfcf",
        "credera-baby-blue": "#d7ecf3",
        "credera-dark-blue": "#496a86",
        "lancaster-red": "#b5121b",
        "lancaster-grey": "#B0B7BC",
      },
      fontFamily: {
        azonix: ["Azonix", "sans-serif"],
      },
    },
  },
  plugins: [],
};
