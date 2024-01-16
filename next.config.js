/*
 * @Author: atwlee
 * @Date: 2023-12-17 14:29:42
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-31 10:52:15
 * @Description:
 * @FilePath: /technology/next.config.js
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: process.env.SERVER_PROTOCOL,
        hostname: process.env.SERVER_DOMAIN,
        port: process.env.SERVER_PORT,
      },
    ],
  },
  // output: "export"
};

module.exports = nextConfig;
