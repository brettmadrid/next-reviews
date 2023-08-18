/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.jsx", // Note the addition of the `app` directory.
    "./components/**/*.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["var(--font-orbitron)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
