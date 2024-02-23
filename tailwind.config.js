/** @type {import('tailwindcss').Config} */
const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")
export default {
    theme: {
        extend: {
            colors: {
                primary: "#26A4FF",
                titleColor: "#CFD8F2",
                textColor: "#98A2BD",
                iconColor: "#98A2BD",
                borderColor: "#3C485B",
                backgroundLightColor: "#151a21",
                backgroundColor: "#0A0E14"
            }
        }
    },
    plugins: [
        iconsPlugin({
            collections: getIconCollections(["heroicons"]),
        }),
        function ({ addVariant }) {
            addVariant("child", "& > *"); // https://stackoverflow.com/questions/67119992/how-to-access-all-the-direct-children-of-a-div-in-tailwindcss
        }
    ],
}

