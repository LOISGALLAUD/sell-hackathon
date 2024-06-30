import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-sell": "#314EE7",
        "secondary-sell": "#FE9C9C",
        "tertiary-sell": "#F5F5F5",
      },
    },
  },
  plugins: [],
};
export default config;
