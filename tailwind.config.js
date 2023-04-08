/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        green: {
          500: '#71eac6'
        },
        primary: {
          300: '#F2E4D0',
          500: '#FFFFFF',
          800: '#9D9180',
          900: '#3F3946',
        },
        dark: '#27232C',
        purple: '#B986F2'
      },
      fontFamily: {
        // 'helvetica': 'Inter, sans-serif',
        'DM-sans': 'DMSans-Regular',
        'DMSans-Medium': 'DMSans-Medium',
      },
      container: {
        center: true,
        screens: {
          md: '768px',
          lg: '984px',
          xl: '1440px',
          '2xl': '1300px',
        },
      },
      lineHeight: {
        '12': '3rem',
        '13': '3.5rem',
        '20': '6rem',
        '21': '7rem',
        '25': '7.5rem',
      },
      spacing: {
        '15': '4rem',
        '20': '6.5rem',
        '25': '7.5rem',
      },
      letterSpacing: {
        tight: "-0.03rem",
        
      },
      fontSize: {
        "8xl": "6.5rem"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tw-elements/dist/plugin')
  ],
};
