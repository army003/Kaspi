/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(330px * 7)" },
        },
      },
      animation: {
        "auto-scroll": "scroll 40s linear infinite",
      },
    },
  },
  plugins: [],
};
