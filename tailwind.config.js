/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        betPinkColor: "#B87A85",
        goldenColor: "#EFB873",
        rejectPink: "#FF647E",
        successGreen: "#03CD5D",
      },
      fontSize: {
        "10px": "10px",
        "12px": "12px",
        "14px": "14px",
      },
      fontFamily: {
        "sf-font": ["var(--sf-fonts)"],
        "inter-font": ["var(----inter-font)"],
      },
    },
  },
  plugins: [],
  prefix: "tw-",
}
