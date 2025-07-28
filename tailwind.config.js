/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "#FFFFFF",
        foreground: "#F5831F",
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#F5831F",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#F5831F",
        },
        primary: {
          DEFAULT: "#F5831F",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#434244",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F5F5F5",
          foreground: "#434244",
        },
        accent: {
          DEFAULT: "#F5831F",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#FF4D4F",
          foreground: "#FFFFFF",
        },
        border: "#434244",
        input: "#434244",
        ring: "#F5831F",
        chart: {
          1: "#F5831F",
          2: "#434244",
          3: "#FFFFFF",
          4: "#F5831F",
          5: "#434244",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
