/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  mode: "jit",
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
    options: {
      safelist: [/^animate-/, /^bg-/, /^text-/, /^border-/, /^from-/, /^to-/],
    },
  },
};
