/*
 * @Author: atwlee
 * @Date: 2023-12-17 14:29:42
 * @LastEditors: atwlee
 * @LastEditTime: 2024-01-01 23:10:48
 * @Description:
 * @FilePath: /technology/src/app/layout.tsx
 */
// export const dynamic = 'force-dynamic';

import "animate.css";
import "swiper/css";
import "./globals.css";
import { Metadata } from "next/types";
import { getMetaData } from "./api/getMeta";

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
