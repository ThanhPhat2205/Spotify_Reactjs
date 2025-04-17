/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend:
    {
      backgroundImage: {
      'spotify-dark': "linear-gradient(180deg, #181818, #000000)",
      },
            },
  },
  plugins: [],
};


