const scale = { // Golden Ratio scale
    xxs: '0.236rem',
    xs: '0.382rem',
    sm: '0.618rem',
    base: '1rem',
    md: '1.618rem',
    lg: '2.618rem',
    xl: '4.236rem'
  }
  
  const colors = {
    flamingo: {
      '50':  '#f9f5f9',
      '100': '#f8e5f8',
      '200': '#f2c2f5',
      '300': '#ee9cf1',
      '400': '#ef6bee',
      '500': '#f041eb',
      '600': '#db09ef',
      '700': '#bd20c2',
      '800': '#931c95',
      '900': '#761973',
    },
    carrot: {
      '50':  '#faf7ec',
      '100': '#faf1d1',
      '200': '#f7e49c',
      '300': '#f3ce58',
      '400': '#edac21',
      '500': '#e9870d',
      '600': '#d86209',
      '700': '#b4490d',
      '800': '#8f3913',
      '900': '#722f14',
    },
    limegreen: {
      '50':  '#f6faf7',
      '100': '#eff9ea',
      '200': '#daf3c4',
      '300': '#b7e893',
      '400': '#6bd350',
      '500': '#32ba25',
      '600': '#249b17',
      '700': '#257b19',
      '800': '#215d1c',
      '900': '#1c491b',
    },
  }
  
  module.exports = {
    theme: {
      darkMode: 'class',
      extend: {
        margin: scale,
        padding: scale,
        space: scale,
        colors: colors,
      },
      maxWidth: {
        'hero': '120ch',
        'content': '70ch'
      }
    },
    plugins: [
      require('windicss/plugin/typography'),
      // require('windicss/plugin/forms'),
      // require('windicss/plugin/aspect-ratio'),
      // require('windicss/plugin/line-clamp'),
      // require('windicss/plugin/filters'),
      // ...
    ],
  };