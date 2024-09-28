/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Red Hat Text Variable', defaultTheme.fontFamily.sans]
      },
      fontSize: {
        '5xl': [
          '2.5rem',
          {
            lineHeight: '3.5rem'
          }
        ]
      },
      spacing: {
        3.5: '0.781rem',
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
      },
      boxShadow: {
        'inner-rose': 'inset 0 0 1px 1px rgb(173,138,133)'
      }
    }
  },
  plugins: []
}
