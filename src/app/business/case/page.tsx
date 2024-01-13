/*
 * @Author: atwlee
 * @Date: 2023-12-23 10:41:48
 * @LastEditors: atwlee
 * @LastEditTime: 2024-01-13 10:28:37
 * @Description:
 * @FilePath: /technology/src/app/business/case/page.tsx
 */
import { notFound } from "next/navigation";
import { getCaseData } from "@/app/api/getCase";
import { getDashboardData } from "@/app/api/getDashboard";
import Layout from "@/app/components/layout";
import PageBanner from "@/app/components/pageBanner";
import Content from "./content";
import { getCaseTypeMetaData } from "@/app/api/getMeta";

const typeObj = {
  gov: "1",
  net: "2",
  bank: "3",
  electric: "4",
  insurance: "5",
  enterprise: "6",
};

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { type: keyof typeof typeObj };
}) {
  const metaData = await getCaseTypeMetaData(
    Number(typeObj[searchParams.type])
  );
  return {
    ...metaData,
  };
}

async function Index({
  searchParams,
}: {
  searchParams: { type: keyof typeof typeObj; active?: string };
}) {
  if (!searchParams.type) {
    notFound();
  }
  const { menu_datas } = await getDashboardData();
  const caseData = await getCaseData(typeObj[searchParams.type]);
  const caseTypes = menu_datas.find((i) => i.id === 3)?.children;

  return (
    <Layout>
      <PageBanner
        title={"3000+大型客户"}
        banner={caseData[0]?.image}
        titleClassName="mt-[-40px] sm:mt-0"
      />
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
