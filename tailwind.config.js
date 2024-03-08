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
            },

            // thanks to https://gist.github.com/krishaantechnology/245b29cfbb25eb456c09fce63673decc
            animation:{
                'shake': 'shake 0.1s cubic-bezier(.36,.07,.19,.97) both infinite',
            },
            keyframes: {
                'shake' : {
                    '10%, 90%': {
                        transform: 'translate(-1px, 0.5px)'
                    },
                    '50%': {
                        transform: 'translate(1px, -0.5px)'
                    }
                }
            }
        }
    },
    plugins: [
        iconsPlugin({
            collections: getIconCollections(["heroicons", "bxl"]),
        }),
        function ({ addVariant }) {
            addVariant("child", "& > *"); // https://stackoverflow.com/questions/67119992/how-to-access-all-the-direct-children-of-a-div-in-tailwindcss
        }
    ],
}

