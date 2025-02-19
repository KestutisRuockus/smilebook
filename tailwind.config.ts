import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#7cade6",
        bgSecondary: "#bef285",
        bgLight: "#dcf0c7",
        textLight: "#B8B8B8",
        textDark: "#333333",
        errorColor: "#db3939",
        successColor: "#4CAF50",
        hoverLight: "#F8E71C",
        hoverDark: "#357ABD",
        borderColor: "#E4E4E4",
        shadowColor: "#D1D1D1",
        info: "#2196F3",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
