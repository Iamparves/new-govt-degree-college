/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kalpurush: ["Kalpurush", "sans-serif"],
      },
      colors: {
        navOrange: "#FF6600",
        navRed: "#C40A2A",
        navPurple: "#84154D",
        navGreen: "#098346",
        navDarkRed: "#C0392B",
        navNavyBlue: "#182C61",
      },
    },
  },
  safelist: [
    "text-navOrange",
    "text-navRed",
    "text-navPurple",
    "text-navGreen",
    "text-navDarkRed",
    "text-navNavyBlue",
    "bg-navOrange",
    "bg-navRed",
    "bg-navPurple",
    "bg-navGreen",
    "bg-navDarkRed",
    "bg-navNavyBlue",
    "hover:bg-navOrange",
    "hover:bg-navRed",
    "hover:bg-navPurple",
    "hover:bg-navGreen",
    "hover:bg-navDarkRed",
    "hover:bg-navNavyBlue",
  ],
  plugins: [],
};
