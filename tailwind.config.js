/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cardColor: "#FFFFFF",
        createCardBorder: "#E6E6E6",
        primaryColor: "#1597E4",
        ErrorColor: "#D86161",
        darkFontColor: "#212121",
        lighFontColor: "#FAFAFA",
        placeholderColor: "#7A7A7A",
        jobCardBorderColor: "#DADEDF",
        modalBackgroundColor: "rgba(0, 0, 0, 0.5)",
        black1: "#212427",
        grey1: "#D8D8D8",
        grey2: "#182021",
      },
      borderRadius: {
        borderRadius1: "0.3rem",
        borderRadius2: "0.625rem",
      },
      padding: {
        "30px": "1.875rem",
      },
    },
  },
  plugins: [],
};
