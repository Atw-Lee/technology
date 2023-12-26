/*
 * @Author: atwlee
 * @Date: 2023-12-17 14:29:42
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-26 21:49:47
 * @Description:
 * @FilePath: /technology/src/app/[lang]/layout.tsx
 */
import type { Metadata } from "next";
import { LangType } from "../api/getDashboard";
import "animate.css";
import "../globals.css";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "zh" }];
}

export const metadata: Metadata = {
  title: "齐治科技",
  description: "齐治科技",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    lang: LangType;
  };
}) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}
