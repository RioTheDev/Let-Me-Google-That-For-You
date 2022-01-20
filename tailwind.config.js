module.exports = {
    important: true,
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            keyframes: {
                blinking: {
                    "0%": {
                        opacity: 0,
                    },
                    "100%": {
                        opacity: 1,
                        "background-color": "white",
                    },
                },
                movecursor: {
                    "0%": {
                        left: "0px",
                        right: "0px",
                    },
                    "100%": {
                        left: "100px",
                        right: "0px",
                    },
                },
            },
            animation: {
                blink: "blinking 1.2s steps(2) infinite",
                cursormove: "movecursor 2s linear infinite",
            },
        },
    },
    plugins: [],
};
