import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "silver-tree": {
          "50": "#f1f8f4",
          "100": "#dcefe2",
          "200": "#bbdfc9",
          "300": "#8ec7a8",
          "400": "#64ac87",
          "500": "#3d8c66",
          "600": "#2b7050",
          "700": "#235942",
          "800": "#1e4736",
          "900": "#193b2d",
          "950": "#0d2119",
        },
      },
    },
  },
  plugins: [],
};
export default config;
