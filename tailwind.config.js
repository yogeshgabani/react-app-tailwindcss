/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },'poppins' : ["Poppins"],
    // screens: {
    //   'tablet': '524px',
    //   // => @media (min-width: 524px) { ... }

    //   'mobile': '992px',
    //   // => @media (min-width: 992px) { ... }

    //   'laptop' : '1400px',
    //   // => @media (min-width: 1400px) { ... }
    // },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
        'homeimage' : "url('../src/22.jpg')",
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

