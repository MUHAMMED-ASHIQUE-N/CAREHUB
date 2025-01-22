/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"],
        ptSerif: ["PT Serif", "serif"],
        reemKufi: ["Reem Kufi", "sans-serif"],
        viga: ["Viga", "sans-serif"],
      },
      colors: {
        primaryColor: "#1A76D1",
        buttonColor: "#009DE6",
      },
    },
  },
  plugins: [],
};