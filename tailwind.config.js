const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,md,mdx,ts,tsx}'],
  plugins: [],
  theme: {
    colors: {
      emerald: colors.emerald,
      stone: colors.stone,
      white: colors.white,
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
  },
  variants: {},
}
