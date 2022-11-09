/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ["Fraunces72ptsupersoft", "sans-serif"],
        fraunces144ptsupersoft: [
            "Fraunces144ptsupersoft",
            "sans-serif",
        ],
        geomanist: ["Geomanist", "sans-serif"],
    },
      colors:{
        "white": "#E4DED5",
        "brown":"#D4AC8E",
        "orange-bg": "#B55730",
        "orange-text": "#C47D57",
        "black":"#223240",
        "dark-blue":"#2D4850",
        "pink":"#D90F54",
        "twitter": "#1DA1F2",
        "linkedin":"#2977C9",  
        "fb":"#4267B2",
        "insta": "#E4405F",
        "youtube":"#C4302B",
        "clutch":"#16313A",
        "btn-top":"#525B73B3",
        "man":"#7C4E49",
        "svg-man":"#000009"
      }
    },
  },
  plugins: [],
}