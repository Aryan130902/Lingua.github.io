/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        DEFAULT: '4px',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '12px',
        '5' : '3rem'
      },
      spacing: {
        '22': '86px',
      },
      padding: {
        '15': '15rem',
      },
      lineHeight: {
        'extra-loose': '2.5',
        '14': '4.5rem',
      },
      colors :{
        'primary': '#524FD5',
        'primaryheading':'#181B32',
        'secondary':'#666680',
        'secondarylight' : '#FECD6F',
        'bgcolor' : '#FFF5F1',
        'bgsecondary' : '#F8FAFE'

      },
      fontFamily:{

        'primaryfont' : ['Axiforma'],
        'primarylightfont' : ['Axiformalight'],
        'primarythinfont' : ['Axiformathin'],
      },
      container: {
        
        padding: {
          DEFAULT: '0rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },

    
  },
  plugins: [],
}
