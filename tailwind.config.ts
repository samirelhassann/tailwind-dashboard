import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: "auto 1fr",
        profile: "max-content auto max-content",
        "form-row": "15vw minmax(25vw, 30vw)",
      },

      borderWidth: {
        6: "6px",
      },

      colors: {
        violet: {
          25: "#FCFAFF",
        },

        error: {
          25: "#FFFBFA",
          50: "#FEF3F2",
          100: "#FEE4E2",
          200: "#FECDCA",
          300: "#FDA29B",
          400: "#F97066",
          500: "#F04438",
          600: "#D92D20",
          700: "#B42318",
          800: "#912018",
          900: "#7A271A",
        },

        "purple-50": "#FAF5FF",
        "purple-500": "#6941C6",
      },

      keyframes: {
        slideDownAndFade: {
          from: { opacity: "0", transform: "translateY(-2px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },

      animation: {
        slideDownAndFade: "slideDownAndFade 0.7s cubic-bezier(0.16,1,0.3,1)",
      },
    },
  },

  plugins: [],
};
export default config;
