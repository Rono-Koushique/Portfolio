/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            sm: "321px",
            md: "426px",
            lg: "769px",
            xl: "1025px",
        },
        extend: {
            screens: {
                mg: "626px",
                "2xl": "1441px",
            },
            fontFamily: {
                roboto: ["var(--font-roboto)"],
                playball: ["var(--font-playball)"],
            },
        },
    },
    plugins: [],
};
