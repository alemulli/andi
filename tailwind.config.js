/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        drabDarkBrown: "#535234",
        delftBlue: "#424963",
        isabelline: "#EDE8E4",
      },
      fontFamily: {
        custom: ["Shantell Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
