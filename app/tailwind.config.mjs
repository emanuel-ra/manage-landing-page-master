/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(12, 88%, 59%)",
        secondary: "hsl(228, 39%, 23%)",
        light: "hsl(227, 12%, 61%)",
        "light-primary": "hsl(13, 100%, 96%)",
      },
    },
  },
  plugins: [],
};
