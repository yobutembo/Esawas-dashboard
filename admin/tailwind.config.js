/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    // colors: {
    //   blue: {
    //     50: "#ebf5ff", // Light blue background color
    //     100: "#d1e9ff", // Hover background for survey cards
    //     600: "#1d4ed8", // Text color for survey links
    //     700: "#1e40af", // Text color for headings
    //     800: "#1e3a8a", // Welcome message color
    //   },
    //   gray: {
    //     600: "#4b5563", // Text color for labels in table
    //   },
    //   white: "#ffffff",
    // },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
