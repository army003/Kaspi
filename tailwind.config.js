/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      keyframes: {
        carousel: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-1120px)" },
        },
      },
      animation: {
        "carousel-scroll": "carousel 20s linear infinite",
      },
    },
  },
  plugins: [],
};
