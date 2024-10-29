/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-1": "#192586",
        "blue-2": "#27379b",
        "blue-3": "#2f41a7",
        "blue-4": "#384bb4",
        "blue-5": "#3f54be",
        "blue-6": "#5c6dc9",
        "blue-7": "#7988d2",
        "blue-8": "#a0aadf",
        "blue-9": "#c6cbec",
      },
    },
  },
  plugins: [],
}