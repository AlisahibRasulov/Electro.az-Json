/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': {'max': '575px'},
      // => @media (max-width: 768px) { ... }

      '2xs': {'min': '576px' , 'max': '767px'},
      // => @media (min-width: 767px) { ... }

      'sm': {'min': '768px', 'max': '991px'},
      // => @media (min-width: 768px and max-width: 991px) { ... }

      'md': {'min': '992px', 'max': '1199px'},
      // => @media (min-width: 992px and max-width: 1080px) { ... }

      'lg': {'min': '1200px', 'max': '1399px'},
      // => @media (min-width: 1081px and max-width: 1299px) { ... }

      'xl': {'min': '1400px'},
      // => @media (min-width: 1300px) { ... }

      // '2xl': {'min': '1881px'},
      // // => @media (min-width: 1880px) { ... }


      // 'xl': {'min': '1300px', 'max': '1535px'},
      // // => @media (min-width: 1300px and max-width: 1535px) { ... }

      // '2xl': {'min': '1536px'},
      // // => @media (min-width: 1536px) { ... }
    },
    // container: {
    //   padding: '2rem',
    //   margin_right:'auto',
    //   margin_left: 'auto',
    //   padding_right: '15px',
    //   padding_left: '15px',
    // },


    fontFamily: {
      'sans': ['"Inter"', 'sans-serif'],
    },
 
    fontSize: {
      's': '0.50rem',
      'xs': '0.60rem',
      '2xs': '0.75rem',
      'sm': '0.8rem',
      'base': '1rem',
      'xl': '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    }

  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}