module.exports = {
  purge: [],
  theme: {
    extend: {},
    screens: {
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    color: {
      home: {
        DEFAULT: "#FCFF5B",
      },
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      home: "#FCFF5B",
      white: "#F9F9F9",
      black: "#1A1A1A",
      pink: "#FFA8F6",
    }),
    fontFamily: {
      header: ["DM Sans"],
    },
  },
  variants: {},
  plugins: [],
};
