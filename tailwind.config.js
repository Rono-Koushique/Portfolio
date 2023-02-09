/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                roboCon: ["var(--robotoCondensed-font)", ...fontFamily.sans],
                robo: ["var(--roboto-font)", ...fontFamily.serif],
            },
            animation: {
                marquee: "marquee 2s linear infinite",
                marquee2: "marquee2 2s linear infinite",
                rotate: "rotate 16s linear infinite",
                float: "float 8s linear infinite",
            },
            keyframes: {
                marquee: {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(100%)" },
                },
                marquee2: {
                    "0%": { transform: "translateX(-100%)" },
                    "100%": { transform: "translateX(0%)" },
                },
                rotate: {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(360deg)" },
                },
                float: {
                    "0%": { transform: "translateY(0rem)" },
                    "25%": { transform: "translateY(0.5rem)" },
                    "50%": { transform: "translateY(0rem)" },
                    "75%": { transform: "translateY(-0.5rem)" },
                    "100%": { transform: "translateY(-0rem)" },
                },
            },
        },
    },
    plugins: [],
};
