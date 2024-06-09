/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/tw-elements-react/dist/js/**/*.js"
    ],
    theme: {
        extend: {
            dropShadow: {
                '5xl': [
                '-5px 5px 5px rgba(0, 0, 0, 0.25)',
                '5px 0px 5px rgba(0, 0, 0, 0.25)'
                ]
            }
        },
    },
    darkMode: "class",
    plugins: [require("tw-elements-react/dist/plugin.cjs")]
    }