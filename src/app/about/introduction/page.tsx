/*
 * @Author: atwlee
 * @Date: 2023-12-23 10:40:17
 * @LastEditors: atwlee
 * @LastEditTime: 2024-01-01 23:10:23
 * @Description:
 * @FilePath: /technology/src/app/about/introduction/page.tsx
 */
import { getMetaData } from "@/app/api/getMeta";
import { getIntroductionData } from "@/app/api/getIntroduction";
import Layout from "@/app/components/layout";
import Content from "./content";

export async function generateMetadata() {
  const metaData = await getMetaData("5");
  return {
    ...metaData,
  };
}

async function Index() {
  const data = await getIntroductionData();

  return (
    <Layout>
      <Content
        data={data.map((i) => ({
          ...i,
          image: process.env.NEXT_PUBLIC_RESOURCE_HOST + i.image,
        }))}
      />
    </Layout>
  );
}

export default Index;
