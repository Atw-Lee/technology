/*
 * @Author: atwlee
 * @Date: 2023-12-17 14:29:42
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-29 22:50:51
 * @Description:
 * @FilePath: /technology/src/app/layout.tsx
 */
import type { Metadata } from "next";
import { getMetaData } from "@/app/api/getMeta";
import "animate.css";
import "swiper/css";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const { layout } = await getMetaData();
  return {
    ...layout,
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
