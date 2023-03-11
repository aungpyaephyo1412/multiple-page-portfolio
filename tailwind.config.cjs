/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "poppins": 'Poppins'
            },
            colors: {
                "primary": "#f5eaea",
                "secondary":"#50796f"
            }
        },
    },
    plugins: [],
}
