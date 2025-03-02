/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryTitle: '#121481',
        primaryContent: '#FFB1B1',
        primarySubContent: 'gray',
        primaryBase: '#FFB1B1',
        primaryAccent: '#7886C7',
        primaryBg: '#FFF2F2',
        primaryBg2: '#F1E3D3',
      }
    },
  },
  plugins: [],
}

