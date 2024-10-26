module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-1": "#151619",
        "dark-2": "#1D1F22",
        "dark-3": "#2B2D31",
        "dark-4": "#35393F",
        "gray-1": "#5A6069",
        "gray-2": "#7C8187",
        "gray-3": "#C1C4CB",
        "gray-4": "#E4E4E4",
        "light-gray": "#F5F5F5",
        white: "#FFFFFF",
        "primary-orange": "#E46643",
        "secondary-orange": "#F39765",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Roboto Slab", "serif"],
        mono: ["Roboto Mono", "monospace"],
      },
      fontSize: {
        h1: ["32px", { lineHeight: "1.2" }],
        h2: ["28px", { lineHeight: "1.2" }],
        h3: ["24px", { lineHeight: "1.2" }],
        h4: ["20px", { lineHeight: "1.2" }],
        h5: ["16px", { lineHeight: "1.2" }],
        h6: ["14px", { lineHeight: "1.2", color: "#E46643" }],
        paragraph: ["14px", { lineHeight: "24px" }],
        small: ["13px", { lineHeight: "1.5" }],
      },
    },
  },
  plugins: [],
};
