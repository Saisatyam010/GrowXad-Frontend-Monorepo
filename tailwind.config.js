/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      fontSize: {
        '18px':'18px',
        '34px': '34px',    
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}