/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    global: {
      colors: {
        icon: '#ffff',
      }
    },
    extend: {
      backgroundImage: {
        'background': "url('../images/background.svg')",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["fantasy"],
  },
}