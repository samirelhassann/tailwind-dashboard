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
      },

      colors: {
        "purple-50": "#FAF5FF",
        "purple-500": "#6941C6",
      },
    },
  },
  plugins: [],
};
export default config;
