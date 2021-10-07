module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "gradient-y": "gradient-y 10s ease infinite alternate",
      },
      keyframes: {
        "gradient-y": {
          "0%": {
            "background-size": "400% 400%",
            "background-position": "center top",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "center center",
          },
          "100%": {
            "background-size": "400% 400%",
            "background-position": "center bottom",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
