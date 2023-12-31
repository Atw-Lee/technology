/*
 * @Author: atwlee
 * @Date: 2023-12-17 14:29:42
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-31 12:20:48
 * @Description:
 * @FilePath: /technology/src/app/layout.tsx
 */
import "animate.css";
import "swiper/css";
import "./globals.css";
import { Metadata } from "next/types";
import { getMetaData } from "./api/getMeta";

export async function generateMetadata(): Promise<Metadata> {
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
