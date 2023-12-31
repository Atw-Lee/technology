/*
 * @Author: atwlee
 * @Date: 2023-12-23 10:40:17
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-31 12:11:24
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
      <Content data={data.data} />
    </Layout>
  );
}

export default Index;
