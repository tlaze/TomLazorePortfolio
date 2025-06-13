/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      animation: {
        // creates a class `animate-spin-slow`
        'spin-slow': 'spin 20s linear infinite',
      },
    }
  },
  variants: {
    extend: {
      animation: ['hover'],   // allow `hover:animate-none` later
    }
  },
  plugins: [],
}