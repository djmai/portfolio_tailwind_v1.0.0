module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
    screens: {
      // 'sm': { 'max': '515px' },
      'sm': { 'raw': 'screen and (max-width: 515px)' },
      // 'md': { 'max': '767px' },
      'md': { 'raw': 'screen and (max-width: 767px)' },
      // 'lg': { 'max': '991px' },
      'lg': { 'raw': 'screen and (max-width: 991px)' },
      'xl': { 'max': '1200px', 'min': '991px' },
      '2xl': { 'min': '1201px' },
    },
    extend: {
      keyframes: {
        'sk-bounce': {
          '0%, 100%': { transform: 'scale(0.0)' },
          '50%': { transform: 'scale(1.0)' },
        },
        'sk-rotate': {
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'skbounce': 'sk-bounce 2.0s infinite ease-in-out',
        'spinner': 'sk-rotate 2s infinite linear',
      },
      transitionTimingFunction: {
        'ease': 'ease',
       }
    },
    animationDelay: {
      '1': "-1s",
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}