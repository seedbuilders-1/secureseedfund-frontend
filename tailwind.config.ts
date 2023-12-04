/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#1AA657",
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(90deg, #5C34B2 0%, #96357D 50.26%, #7C365F 100%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        primary: ["var(--font-inter)"],
        secondary: ["var(--font-ibm-plex-sans)"],
      },
      boxShadow: {
        "stat-card":
          "-1px 2px 4px 0px rgba(0, 0, 0, 0.02), -4px 6px 8px 0px rgba(0, 0, 0, 0.02), -9px 15px 10px 0px rgba(0, 0, 0, 0.01), -17px 26px 12px 0px rgba(0, 0, 0, 0.00), -26px 40px 13px 0px rgba(0, 0, 0, 0.00)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
