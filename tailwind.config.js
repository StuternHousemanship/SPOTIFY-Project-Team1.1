/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            spacing: {
                500: "500px",
                914: "914px",
                70: "4.375rem",
            },
            colors: {
                "squazzle-background-grey-color": "#F0F0F0",
                "squazzle-grey-text-color": "#424242",
                "squazzle-white-background-color": "#FFFFFF",
            },
            fontFamily: {
                Inter: ["Inter"],
            },
        },
    },
    plugins: [],
}