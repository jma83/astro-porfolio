/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#5849a7",
          200: "#504dbd",
          300: "#4751d2",
          400: "#4155e8",
          500: "#3e64ff",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        mono: [
          "Menlo",
          "Monaco",
          "Lucida Console",
          "Liberation Mono",
          "DejaVu Sans Mono",
          "Bitstream Vera Sans Mono",
          "Courier New",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};
