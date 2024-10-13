/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        purple: {
          100: "#DBD1FC",
          500: "#7551DC",
        },
        yellow: {
          100: "#F9EEE2",
          500: "#FFCC6A",
        },
        white: "#FFFFFF",
        black: "#121212",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      fontSize: {
        "preset-1": ["62px", { lineHeight: "93.5%", letterSpacing: "-3px" }],
        "preset-2": ["40px", { lineHeight: "90%", letterSpacing: "-2px" }],
        "preset-3": ["32px", { lineHeight: "87.5%", letterSpacing: "-2px" }],
        "preset-4": ["18px", { lineHeight: "111%", letterSpacing: "0px" }],
      },
      spacing: {
        500: "40px",
        400: "32px",
        300: "24px",
        200: "16px",
        100: "8px",
      },
    },
  },
  plugins: [],
};
