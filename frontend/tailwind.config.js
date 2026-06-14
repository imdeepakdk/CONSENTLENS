export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B1020",
        primary: "#4F46E5",
        secondary: "#7C3AED",
        accent: "#06B6D4",
      },

      boxShadow: {
        glow: "0 0 25px rgba(79,70,229,0.5)",
      },

      animation: {
        float: "float 5s ease-in-out infinite",
      },

      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
      },
    },
  },
  plugins: [],
};