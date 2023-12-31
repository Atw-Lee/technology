/*
 * @Author: atwlee
 * @Date: 2023-12-23 10:40:17
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-31 20:41:54
 * @Description:
 * @FilePath: /technology/src/app/about/introduction/page.tsx
 */
import { getIntroductionData } from "@/app/api/getIntroduction";
import Layout from "@/app/components/layout";
import Content from "./content";

async function Index() {
  const data = await getIntroductionData();

  return (
    <Layout>
      <Content
        data={data.map((i) => ({
          ...i,
          image: process.env.RESOURCE_HOST + i.image,
        }))}
      />
    </Layout>
  );
}

export default Index;
