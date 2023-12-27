/*
 * @Author: atwlee
 * @Date: 2023-12-17 14:29:42
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-27 21:52:58
 * @Description:
 * @FilePath: /technology/src/app/[lang]/layout.tsx
 */
import type { Metadata } from "next";
import type { LangType, PageProps } from "@/app/type";
import "animate.css";
import "swiper/css";
import "../globals.css";
import { getMetaData } from "../api/getMeta";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "zh" }];
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { layout } = await getMetaData(props.params.lang);
  return {
    ...layout,
  };
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: PageProps["params"];
}) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}
