/** @type {import('tailwindcss').Config} */
module.exports = {
    future: {
      hoverOnlyWhenSupported: true,
    },
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    purge: [
        "./public/**/*.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
