import withMT from "@material-tailwind/react/utils/withMT";
import colors from "tailwindcss/colors";

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      neutral: colors.neutral,
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      emerald: colors.emerald,
      slate: colors.slate,
      sky: colors.sky,
      red: colors.red,
      yellow: colors.amber,
      green: colors.green,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.purple,
      pink: colors.pink,
    },
    fontFamily: {
      sans: ["graphic", "sans-serif"],
      serif: ["Merriweather", "serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
    },
  },
  plugins: [],
});
