/*
 * @Author: atwlee
 * @Date: 2023-12-17 14:29:42
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-27 21:57:46
 * @Description:
 * @FilePath: /technology/src/app/[lang]/dashboard/page.tsx
 */
import { Metadata } from "next";
import { getDashboardData } from "@/app/api/getDashboard";
import { getMetaData } from "@/app/api/getMeta";
import type { PageProps } from "@/app/type";
import Layout from "@/app/components/layout";
import DataCenter from "./components/dataCenter";
import Product from "./components/product";
import Remainder from "./components/remainder";

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { dashboard } = await getMetaData(props.params.lang);
  return {
    ...dashboard,
  };
}

export default async function Home(props: PageProps) {
  const { lang } = props.params;
  const data = await getDashboardData(lang);
  const itemDefaultClass =
    "relative w-full h-1/3 md:w-1/3 md:h-full overflow-hidden";
  const videoDefaultClass = "absolute w-full h-full object-cover";

  return (
    <Layout lang={lang}>
      <main className="flex flex-wrap" style={{ height: "calc(100vh - 60px)" }}>
        <div className={`${itemDefaultClass}`}>
          <video
            src="/dashboard/item1.mp4"
            muted
            autoPlay
            loop
            poster="/dashboard/item1poster.png"
            className={videoDefaultClass}
          />
          <DataCenter
            lang={lang}
            lernaMore={data.learnMore}
            back={data.back}
            {...data.dataCenterSecurity}
          />
        </div>
        <div className={`${itemDefaultClass}`}>
          <video
            src="/dashboard/item2.mp4"
            muted
            autoPlay
            loop
            poster="/dashboard/item2poster.png"
            className={videoDefaultClass}
          />
          <Product lang={lang} back={data.back} {...data.productionSolution} />
        </div>
        <div className={`${itemDefaultClass}`}>
          <Remainder remainder={data.remainder} lang={lang} />
        </div>
      </main>
    </Layout>
  );
}
