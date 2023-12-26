/*
 * @Author: atwlee
 * @Date: 2023-12-17 14:29:42
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-25 21:39:34
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
