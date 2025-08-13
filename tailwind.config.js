/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}" // 이 경로가 가장 중요합니다.
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
            serif: ['"Source Serif 4"', 'serif'],
        },
    },
  },
  plugins: [],
}