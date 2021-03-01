module.exports = {
  purge: ['./**/*.html', './**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        fira: ['Fira Sans', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        source: ['Source Sans Pro', 'sans-serif'],
        unkempt: ['Unkempt', 'cursive'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      spacing: {
        27.5: '6.875rem',
        100: '25rem',
        120: '30rem',
        140: '35rem',
        160: '40rem',
        180: '45rem',
        200: '50rem',
      },
      maxWidth: {
        'max-content': 'max-content',
      },
      margin: {
        26: '6.5rem',
      },
      inset: {
        '-13.5': '-3.375rem',
        '-26.5': '-6.625rem',
      },
      colors: {
        accent: {
          primary: '#C2FF01',
          secondary: '#00AA54',
        },
        danger: '#D40033',
        surface: '#161616',
        blue: {
          300: '#4FB9C7',
          400: '#43A7B4',
          500: '#3F8896',
          600: ' #1D737E',
          700: '#197081',
        },
      },
      letterSpacing: {
        extrawide: '0.2rem',
      },
    },
  },
  variants: {
    extend: {
      margin: ['even', 'first', 'last'],
      opacity: ['even', 'last'],
      padding: ['first', 'last'],
    },
  },
  plugins: [],
};
