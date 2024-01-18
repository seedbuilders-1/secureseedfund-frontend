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
        primary: "#544A2E",
        span: "#F9A326",
        brandText: "#CBD5E1",
        btn: "#1AA657",
        bar: "#1AA657",
        cardTitle: "#334155",
        // primary: "#1AA657",
        sessionBg: "#F8FAFC",
        secondaryGreen: "#1AA657",
        footercolor: "#F8FAFC",
        gray: "#52525B",
        slatecolor: "#0F172A",
        grey: "#64748B",
        black: "#475569",
        secondaryblue: "#241A3F",
        purple: "#6434AA",
        secondarygreen: "#005327",
        brown: "rgba(249, 163, 38, 0.40)",
        arrowcolor: "#F1F5F9",
        graycolor: "#667085",
        dark: "#001D21",
        light: "#8A8F90",
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
        primary: ["var(--font-neue-haas)"],
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
