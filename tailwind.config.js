/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
      },
      fontSize: {
        base: "18px",
      },
      colors: {
        blue: {
          500: "hsl(220, 98%, 61%)",
        },
        checkGradient: {
          from: "hsl(192, 100%, 67%)",
          to: "hsl(280, 87%, 65%)",
        },
        light: {
          gray50: "hsl(0, 0%, 98%)",
          purple300: "hsl(234, 39%, 85%)",
          gray300: "hsl(233, 11%, 84%)",
          gray600: "hsl(236, 9%, 61%)",
          navy850: "hsl(235, 19%, 35%)",
        },
        dark: {
          navy950: "hsl(235, 21%, 11%)",
          navy900: "hsl(235, 24%, 19%)",
          purple300: "hsl(234, 39%, 85%)",
          purple100: "hsl(236, 33%, 92%)",
          purple600: "hsl(235, 16%, 43%)",
          purple700: "hsl(233, 14%, 35%)",
          purple800: "hsl(237, 14%, 26%)",
          gray600: "hsl(236, 9%, 61%)",
        },
      },
    },
  },
  plugins: [],
};
