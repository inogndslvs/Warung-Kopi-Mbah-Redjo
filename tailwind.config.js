/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      secondary: "#FBF6E8",
      primary: "#BD0000",
      kuning: "#CFD43E",
      hitam: "#3A2D2D",
      textnav: "#424242",
      profile: "#F5F5F5",
      third: "#1658A4",
    },

    extend: {
      margin: {
        "90px": "90px",
      },
    },
    fontFamily: {
      display: ["Poppins"],
      body: ['"Open Sans"'],
      bright: ['"bright_demoregular"'],
    },
    fontWeight: {
      thin: "2",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
  },
  plugins: [],
};
