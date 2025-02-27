/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      maxWidth: {
        layout: "1920px",
        content: "1440px",
        sidebar: "280px",
      },
      minWidth: {
        sidebar: "250px",
        mobile: "320px",
      },

      colors: {
        secondary: "#FBF6E8",
        primary: "#BD0000",
        kuning: "#CFD43E",
        hitam: "#3A2D2D",
        textnav: "#424242",
        profile: "#F5F5F5",
        third: "#1658A4",
        blue: "#0154D1",
      },
      margin: {
        "90px": "90px",
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
  },

  plugins: [],
};
