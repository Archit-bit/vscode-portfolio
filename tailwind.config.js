/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // <– critical
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        panel: "var(--panel)",
        "panel-2": "var(--panel-2)",
        border: "var(--border)",
        muted: "var(--muted)",

        red: "var(--red)",
        orange: "var(--orange)",
        yellow: "var(--yellow)",
        green: "var(--green)",
        purple: "var(--purple)",
        pink: "var(--pink)",
        cyan: "var(--cyan)",
      },
    },
  },
  plugins: [],
};
