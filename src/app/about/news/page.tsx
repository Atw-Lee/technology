/*
 * @Author: atwlee
 * @Date: 2023-12-24 15:40:00
 * @LastEditors: atwlee
 * @LastEditTime: 2024-01-01 23:10:29
 * @Description:
 * @FilePath: /technology/src/app/about/news/page.tsx
 */
import { Metadata } from "next/types";
import Layout from "@/app/components/layout";
import Content from "./content";
import Banner from "./banner";
import { getMetaData } from "@/app/api/getMeta";

export async function generateMetadata() {
  const metaData = await getMetaData("6");
  return {
    ...metaData,
  };
}

async function Index() {
  return (
    <Layout>
      <Banner />
      <Content />
    </Layout>
  );
}

export default Index;
