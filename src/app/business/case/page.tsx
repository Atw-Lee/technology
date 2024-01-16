/*
 * @Author: atwlee
 * @Date: 2023-12-23 10:41:48
 * @LastEditors: atwlee
 * @LastEditTime: 2024-01-14 14:40:34
 * @Description:
 * @FilePath: /technology/src/app/business/case/page.tsx
 */
import { notFound } from "next/navigation";
import { getCaseData } from "@/app/api/getCase";
import { getDashboardData } from "@/app/api/getDashboard";
import Layout from "@/app/components/layout";
import Content from "./content";
import { getCaseTypeMetaData } from "@/app/api/getMeta";
import { caseToId } from "@/app/const/caseMap";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { type: keyof typeof caseToId };
}) {
  const metaData = await getCaseTypeMetaData(
    Number(caseToId[searchParams.type])
  );
  return {
    ...metaData,
  };
}

async function Index({
  searchParams,
}: {
  searchParams: { type: keyof typeof caseToId; active?: string };
}) {
  if (!searchParams.type) {
    notFound();
  }
  const { menu_datas } = await getDashboardData();
  const caseData = await getCaseData(caseToId[searchParams.type]);
  const caseTypes = menu_datas.find((i) => i.id === 3)?.children;

  return (
    <Layout>
      <Content
        caseTypes={caseTypes}
        caseType={searchParams.type}
        caseData={caseData}
        active={searchParams.active}
      />
    </Layout>
  );
}

export default Index;
