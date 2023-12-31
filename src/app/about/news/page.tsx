/*
 * @Author: atwlee
 * @Date: 2023-12-24 15:40:00
 * @LastEditors: atwlee
 * @LastEditTime: 2024-01-02 20:42:16
 * @Description:
 * @FilePath: /technology/src/app/about/news/page.tsx
 */
import Layout from "@/app/components/layout";
import Content from "./content";
import { getMenuData, getMetaData } from "@/app/api/getMeta";
import PageBanner from "@/app/components/pageBanner";

export async function generateMetadata() {
  const metaData = await getMetaData("6");
  return {
    ...metaData,
  };
}

async function Index() {
  const pageBannerData = await getMenuData("6");
  return (
    <Layout>
      <PageBanner {...pageBannerData} />
      <Content />
    </Layout>
  );
}

export default Index;
