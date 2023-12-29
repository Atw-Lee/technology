/*
 * @Author: atwlee
 * @Date: 2023-12-17 14:29:42
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-29 22:50:59
 * @Description:
 * @FilePath: /technology/src/app/page.tsx
 */
import { Metadata } from "next";
import { getDashboardData } from "@/app/api/getDashboard";
import { getMetaData } from "@/app/api/getMeta";
import Layout from "@/app/components/layout";
import DataCenter from "./components/dashboard/dataCenter";
import Product from "./components/dashboard/product";
import Remainder from "./components/dashboard/remainder";

export async function generateMetadata(): Promise<Metadata> {
  const { dashboard } = await getMetaData();
  return {
    ...dashboard,
  };
}

export default async function Home() {
  const data = await getDashboardData();
  const itemDefaultClass =
    "relative w-full h-1/3 md:w-1/3 md:h-full overflow-hidden";
  const videoDefaultClass = "absolute w-full h-full object-cover";

  return (
    <Layout>
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
          <Product back={data.back} {...data.productionSolution} />
        </div>
        <div className={`${itemDefaultClass}`}>
          <Remainder remainder={data.remainder} />
        </div>
      </main>
    </Layout>
  );
}
