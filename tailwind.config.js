const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
};
