/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  server: {
    proxy: {
      'api' : {
        target: 'http://localhost:5000/',
        changeOrigin: true
      }
    }
  }
}

