/*
 * @Author: atwlee
 * @Date: 2023-12-17 14:29:42
 * @LastEditors: atwlee
 * @LastEditTime: 2024-01-15 22:13:38
 * @Description:
 * @FilePath: /technology/src/app/layout.tsx
 */
import "animate.css";
import "swiper/css";
import "./globals.css";
import { getMetaData } from "./api/getMeta";

// 首页的Meta数据
export async function generateMetadata() {
  const metaData = await getMetaData("1");
  return {
    ...metaData,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={"zh"}>
      <body>{children}</body>
    </html>
  );
}
