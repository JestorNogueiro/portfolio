module.exports = {
  purge: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      Lobster: ["Lobster"],
    },
    extend: {
      colors: {
        green: "#00f260",
        pink: "#f0e6",
        darkcolor: "#121212",
        darkback: "#0a0b0e",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
