/*
 * @Author: atwlee
 * @Date: 2023-12-17 14:29:42
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-21 20:57:21
 * @Description:
 * @FilePath: /technology/tailwind.config.ts
 */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "width-process": {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        }
      },
      animation: {
        "width-process": "width-process 700ms linear 1"
      },
    },
  },
  plugins: [],
};
export default config;
