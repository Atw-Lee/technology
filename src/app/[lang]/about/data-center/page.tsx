/*
 * @Author: atwlee
 * @Date: 2023-12-20 22:49:10
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-27 21:38:54
 * @Description:
 * @FilePath: /technology/src/app/[lang]/about/data-center/page.tsx
 */
import type { LangType } from "@/app/type";
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
