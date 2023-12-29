/*
 * @Author: atwlee
 * @Date: 2023-12-23 10:40:17
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-29 22:51:56
 * @Description:
 * @FilePath: /technology/src/app/about/introduction/page.tsx
 */
import type { Metadata } from "next";
import { getMetaData } from "@/app/api/getMeta";
import { getIntroductionData } from "@/app/api/getIntroduction";
import Layout from "@/app/components/layout";
import Content from "./content";

export async function generateMetadata(): Promise<Metadata> {
  const { introduction } = await getMetaData();
  return {
    ...introduction,
  };
}

async function Index() {
  const data = await getIntroductionData();

  return (
    <Layout>
      <Content data={data.data} />
    </Layout>
  );
}

export default Index;
