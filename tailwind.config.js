/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "hsr-container-bg": "#d6d6d6",
        "hsr-gray-dark": "#3c4047",
        "hsr-gray-light": "#7b7b7e",
        "hsr-message-sender": "#d4bd8b",
        "hsr-message-receiver": "#ebebeb",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
