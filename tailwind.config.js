const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,md,mdx,ts,tsx}'],
  },
  theme: {
    colors: {
      emerald: colors.emerald,
      warmGray: colors.warmGray,
      white: colors.white,
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
  },
  variants: {},
  plugins: [],
}
