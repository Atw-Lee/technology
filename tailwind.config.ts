/*
 * @Author: atwlee
 * @Date: 2023-12-17 14:29:42
 * @LastEditors: atwlee
 * @LastEditTime: 2024-01-03 21:50:54
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
      colors: {
        primary: "#25cad2",
      },
      keyframes: {
        "width-process": {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        "width-process": "width-process 700ms linear 1",
      },
    },
    // colors: {
    //   // primary: "#25cad2",
    //   blue: "#1fb6ff",
    //   purple: "#7e5bef",
    //   pink: "#ff49db",
    //   orange: "#ff7849",
    //   green: "#13ce66",
    //   yellow: "#ffc82c",
    //   "gray-dark": "#273444",
    //   gray: "#8492a6",
    //   "gray-light": "#d3dce6",
    //   white: "#fff",
    // },
  },
  plugins: [],
};
export default config;
