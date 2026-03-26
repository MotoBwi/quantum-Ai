module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // Paths to all of your components and pages
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#7859f5",
      },
      fontFamily: {
        sans: ['"Poppins"', "sans-serif"],
      },
      animation: {
        none: "none",
        borderRotate: "borderRotate 2s linear infinite",
        spin: "spin 1s linear infinite",
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        pulse1s: "pulse1sLarge 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounce: "bounce 1s infinite",
        ripple: "ripple2 2s infinite cubic-bezier(0.23, 1, 0.32, 1)",
        spin3s: "spin 3s linear infinite",
        rippleCustom2s: "ripple 2s infinite ease-in-out",
        rippleCustom3s: "ripple 3s infinite ease-in-out",
        rippleCustom: "ripple 4s infinite ease-in-out",
        bounceCustom: "bounceCustom 1s infinite",
        rotate: "rotate 10s linear infinite",
        "infinite-scroll": "infinite-scroll 25s linear infinite",
        "spin-slow": "spin 10s linear infinite",
        "text-slide":
          "text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "text-slide-2":
          "text-slide-2 5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "text-slide-3":
          "text-slide-3 7.5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "text-slide-4":
          "text-slide-4 10s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "text-slide-5":
          "text-slide-5 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "text-slide-6":
          "text-slide-6 15s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "text-slide-7":
          "text-slide-7 17.5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "text-slide-8":
          "text-slide-8 20s cubic-bezier(0.83, 0, 0.17, 1) infinite",
      },
      keyframes: {
        borderRotate: {
          "0%, 100%": {
            "--border-angle": "0deg",
          },
          "50%": {
            "--border-angle": "180deg",
          },
          "100%": {
            "--border-angle": "360deg",
          },
        },
        pulse1sLarge: {
          "0%, 100%": {
            opacity: "1",
            transform: "scale(1)",
          },
          "50%": {
            opacity: ".5",
            transform: "scale(1.2)",
          },
        },
        ripple2: {
          "0%": { transform: "scale(0)", opacity: "0.8" },
          "100%": { transform: "scale(3)", opacity: "0" },
        },
        ripple: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.3)" },
          "100%": { transform: "scale(1)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg) scale(10)" },
          "100%": { transform: "rotate(-360deg) scale(10)" },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "text-slide-2": {
          "0%, 40%": {
            transform: "translateY(0%)",
          },
          "50%, 90%": {
            transform: "translateY(-33.33%)",
          },
          "100%": {
            transform: "translateY(-66.66%)",
          },
        },
        "text-slide-3": {
          "0%, 26.66%": {
            transform: "translateY(0%)",
          },
          "33.33%, 60%": {
            transform: "translateY(-25%)",
          },
          "66.66%, 93.33%": {
            transform: "translateY(-50%)",
          },
          "100%": {
            transform: "translateY(-75%)",
          },
        },
        "text-slide-4": {
          "0%, 20%": {
            transform: "translateY(0%)",
          },
          "25%, 45%": {
            transform: "translateY(-20%)",
          },
          "50%, 70%": {
            transform: "translateY(-40%)",
          },
          "75%, 95%": {
            transform: "translateY(-60%)",
          },
          "100%": {
            transform: "translateY(-80%)",
          },
        },
        "text-slide-5": {
          "0%, 16%": {
            transform: "translateY(0%)",
          },
          "20%, 36%": {
            transform: "translateY(-16.66%)",
          },
          "40%, 56%": {
            transform: "translateY(-33.33%)",
          },
          "60%, 76%": {
            transform: "translateY(-50%)",
          },
          "80%, 96%": {
            transform: "translateY(-66.66%)",
          },
          "100%": {
            transform: "translateY(-83.33%)",
          },
        },
        "text-slide-6": {
          "0%, 13.33%": {
            transform: "translateY(0%)",
          },
          "16.66%, 30%": {
            transform: "translateY(-14.28%)",
          },
          "33.33%, 46.66%": {
            transform: "translateY(-28.57%)",
          },
          "50%, 63.33%": {
            transform: "translateY(-42.85%)",
          },
          "66.66%, 80%": {
            transform: "translateY(-57.14%)",
          },
          "83.33%, 96.66%": {
            transform: "translateY(-71.42%)",
          },
          "100%": {
            transform: "translateY(-85.71%)",
          },
        },
        "text-slide-7": {
          "0%, 11.43%": {
            transform: "translateY(0%)",
          },
          "14.28%, 25.71%": {
            transform: "translateY(-12.5%)",
          },
          "28.57%, 40%": {
            transform: "translateY(-25%)",
          },
          "42.85%, 54.28%": {
            transform: "translateY(-37.5%)",
          },
          "57.14%, 68.57%": {
            transform: "translateY(-50%)",
          },
          "71.42%, 82.85%": {
            transform: "translateY(-62.5%)",
          },
          "85.71%, 97.14%": {
            transform: "translateY(-75%)",
          },
          "100%": {
            transform: "translateY(-87.5%)",
          },
        },
        "text-slide-8": {
          "0%, 10%": {
            transform: "translateY(0%)",
          },
          "12.5%, 22.5%": {
            transform: "translateY(-11.11%)",
          },
          "25%, 35%": {
            transform: "translateY(-22.22%)",
          },
          "37.5%, 47.5%": {
            transform: "translateY(-33.33%)",
          },
          "50%, 60%": {
            transform: "translateY(-44.44%)",
          },
          "62.5%, 72.5%": {
            transform: "translateY(-55.55%)",
          },
          "75%, 85%": {
            transform: "translateY(-66.66%)",
          },
          "87.5%, 97.5%": {
            transform: "translateY(-77.77%)",
          },
          "100%": {
            transform: "translateY(-88.88%)",
          },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
