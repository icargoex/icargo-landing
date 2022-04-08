const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["manrope", ...defaultTheme.fontFamily.sans],
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
}
