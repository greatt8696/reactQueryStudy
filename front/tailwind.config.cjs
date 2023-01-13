/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        introX: "introFrameX 0.4s ease-in-out 1",
        introY: "introFrameY 0.4s ease-in-out 1",
        wiggle: "wiggle 0.2s ease-in-out infinite",
        "bounce-short": "bounce 0.2s ease-in-out infinite",
        "bounce-short": "bounce 0.2s ease-in-out infinite",
        "wiggle-once": "wiggle 0.4s ease-in-out 1",
        "blink-green": "blink-green 0.4s ease-in-out 1",
        "blink-red": "blink-red 0.4s ease-in-out 1",
        "blink-text-green": "blink-text-green 0.4s ease-in-out 1",
        "blink-text-red": "blink-text-red 0.4s ease-in-out 1",
        "blink-ba-green": "blink-ba-green 0.6s ease-in-out 1",
        "blink-ba-red": "blink-ba-red 0.6s ease-in-out 1",
        gradientLoading: "loadingFrame 0.8s linear infinite",
      },

      // 내가 원하는 animation-keyframes 지정
      keyframes: {
        loadingFrame: {
          "100%": {
            backgroundPosition: "0% 0%",
          },
          "0%": {
            backgroundPosition: "100% 100%",
          },
        },
        introFrameX: {
          "0%": { transform: "translateX(100px)", opacity: 0 },
          "50%": { transform: "translateX(-11px)", opacity: 25 },
          "70%": { transform: "translateX(3px)", opacity: 40 },
          "100%": { transform: "translateX(0px)", opacity: 100 },
        },
        introFrameY: {
          "0%": { transform: "translateY(100px)", opacity: 0 },
          "50%": { transform: "translateY(-11px)", opacity: 25 },
          "70%": { transform: "translateY(3px)", opacity: 40 },
          "100%": { transform: "translateY(0px)", opacity: 100 },
        },

        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "blink-green": {
          "0%, 100%": {
            "background-color": "transparent",
            transform: "rotate(-3deg)",
          },
          "50%": { "background-color": "#15803d", transform: "rotate(3deg)" },
        },
        "blink-red": {
          "0%, 100%": {
            "background-color": "transparent",
            transform: "rotate(-3deg)",
          },
          "50%": { "background-color": "#B22222", transform: "rotate(3deg)" },
        },

        "blink-bar-green": {
          "0%, 100%": {
            "background-color": "transparent",
          },
          "50%": { "background-color": "#15803d" },
        },
        "blink-bar-red": {
          "0%, 100%": {
            "background-color": "transparent",
          },
          "50%": { "background-color": "#b91c1c" },
        },

        "blink-text-green": {
          "0%, 100%": { color: "white", transform: "scale(1)" },
          "50%": { color: "#15803d", transform: "scale(1.2)" },
        },
        "blink-text-red": {
          "0%, 100%": { color: "white", transform: "scale(1)" },
          "50%": { color: "#B22222", transform: "scale(1.2)" },
        },
      },
    },
  },
  plugins: [],
};
