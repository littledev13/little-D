/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        sm: "620px",
        md: "880px",
      },
      fontFamily: {
        Gugi: ["Gugi"],
        Poppins: ["Poppins"],
        Rubik: ["Rubik Moonrocks"],
      },
      backgroundImage: {
        profile: "url('./Img/Profile.png')",
      },
    },
  },
  variants: {},
  plugins: [],
};
