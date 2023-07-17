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
        montSerrat: ["Montserrat", "sans-serif"],
        styleScript: ["Style Script", "cursive"]
      },
      container: {
        center: true,
        screens: {
          sm: "592px",
          md: "720px",
          lg: "976px",
          xl: "976px",
          "2xl": "976px",
        },
      },
    },
  },
  plugins: [],
};
