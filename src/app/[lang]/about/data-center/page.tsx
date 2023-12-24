/*
 * @Author: atwlee
 * @Date: 2023-12-20 22:49:10
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-23 23:25:53
 * @Description:
 * @FilePath: /technology/src/app/[lang]/about/data-center/page.tsx
 */
import { LangType } from "@/app/api/getDashboard";
import Layout from "@/app/components/layout";

function Index({
  params: { lang },
}: {
  params: {
    lang: LangType;
  };
}) {
  return (
    <Layout lang={lang}>
      <div>123</div>
    </Layout>
  );
}

export default Index;
