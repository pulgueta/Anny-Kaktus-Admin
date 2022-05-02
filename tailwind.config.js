module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        flora: {
          base: "#4baf56",
          second: "#e73f3f",
          hover: "#4bffaa",
          secondhover: "#ff3f3f",
          black: "#393939",
          white: "#f1f7f2",
        },
      },

      textColor: {
        flora: {
          base: "#4baf56",
          second: "#e73f3f",
          hover: "#4bffaa",
          secondhover: "#e73f3f",
          black: "#393939",
          white: "#f1f7f2",
        },
      },
    },
  },
  plugins: [],
};
