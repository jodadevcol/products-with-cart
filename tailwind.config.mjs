/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Red Hat Text Variable', defaultTheme.fontFamily.sans]
      },
      spacing: {
        21: '5.25rem',
        22: '5.5rem'
      },
      colors: {
        red: '#C73B0F',
        rose: {
          50: '#FCF8F6',
          100: '#F5EEEC',
          300: '#CAAFA7',
          400: '#AD8A85',
          500: '#87635A',
          900: '#260F08'
        },
        green: '#1EA575'
      }
    }
  },
  plugins: []
}
