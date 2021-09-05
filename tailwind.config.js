module.exports = {
  purge: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      Lobster: ["Lobster"],
    },
    extend: {
      colors: {
        green: "#00f260",
        pink: "#f0e6",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
