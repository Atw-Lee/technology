/*
 * @Author: atwlee
 * @Date: 2023-12-23 10:40:17
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-27 21:56:38
 * @Description:
 * @FilePath: /technology/src/app/[lang]/about/introduction/page.tsx
 */
import type { Metadata } from "next";
import type { PageProps } from "@/app/type";
import { getMetaData } from "@/app/api/getMeta";
import { getIntroductionData } from "@/app/api/getIntroduction";
import Layout from "@/app/components/layout";
import Content from "./content";

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { introduction } = await getMetaData(props.params.lang);
  return {
    ...introduction,
  };
}

async function Index(props: PageProps) {
  const { lang } = props.params;
  const data = await getIntroductionData(lang);

  return (
    <Layout lang={lang}>
      <Content data={data.data} />
    </Layout>
  );
}

export default Index;
