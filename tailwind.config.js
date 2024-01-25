/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#FAE9D7",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        wixText: ["Wix Madefor Text", "sans-serif"],
        rubik: ["Rubik Burned", "system-ui"],
        robotoSlab: ["Roboto Slab", " serif"],
        Lobster: ["Lobster", "sans-serif"],
      },
      keyframes: {
        profileAnimate: {
          '0%': {
            'border-radius': '60% 40% 30% 70%/60% 30% 70% 40%',
          },
          '50%': {
            'border-radius': '30% 60% 70% 40%/50% 60% 30% 60%',
          },
          '100%': {
            'border-radius': '60% 40% 30% 70%/60% 30% 70% 40%',
          },
        },
      },
      animation: {
        profileAnimate: 'profileAnimate 8s ease-in-out infinite 1s',
      },
      boxShadow: {
        'inseet': 'inset 0 0 0 9px rgb(255 255 255 / 30%)',
      },
    },
  },
  plugins: [],
};
