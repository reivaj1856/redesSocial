/** @type {import('tailwindcss').Config} */

const flowbitePlugin = require('flowbite/plugin');

module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Archivos HTML y TS
    "./node_modules/flowbite/**/*.js", // Archivos de Flowbite
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

