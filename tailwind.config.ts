import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
  ],
  options: {
    safelist: ["font-bold", "bold", "orange"], // Add other classes if needed
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
        serif: ["Open Sans", "sans-serif"],
      },
      fontWeight: {
        thin: 100,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      screens: {
        sm: "640px", // Small screens (e.g., smartphones)
        md: "768px", // Medium screens (e.g., tablets)
        lg: "1024px", // Large screens (e.g., laptops)
        xl: "1280px",
        xls: "1920px", // Extra-large screens (e.g., desktops)
      },
      fontSize: {
        sm: "14px", // Small screens
        base: "16px", // Default font size for medium and larger screens
        lg: "18px", // Large screens
        xl: "20px",
        xls: "24px", // Extra-large screens
      },
      colors: {
        primary: "#007bff",
        blue: "#22577a",
        "light-blue": "#77cdd5", // Example primary color
        secondary: "#6c757d",
        back: "#000000",
        white: "#ffffff", // Example secondary color
        // Add more custom colors here
      },
      gradientColorStopPositions: {
        20: "20%",
      },
    },
  },
  variants: {},
  plugins: [],
};

export default config;
