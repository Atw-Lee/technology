/*
 * @Author: atwlee
 * @Date: 2023-12-17 14:29:42
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-31 12:20:16
 * @Description:
 * @FilePath: /technology/src/app/page.tsx
 */
import { getDashboardData } from "@/app/api/getDashboard";
import Layout from "@/app/components/layout";
import DataCenter from "./components/dashboard/dataCenter";
import Product from "./components/dashboard/product";
import Remainder from "./components/dashboard/remainder";

export default async function Home() {
  const data = await getDashboardData();
  const dataCenter = data.banner_datas[0];
  const product = data.banner_datas[1];
  const remainder = data.banner_datas[2].bannerdata;

  const itemDefaultClass =
    "relative w-full h-1/3 md:w-1/3 md:h-full overflow-hidden";
  const videoDefaultClass = "absolute w-full h-full object-cover";

  return (
    <Layout>
      <main className="flex flex-wrap" style={{ height: "calc(100vh - 60px)" }}>
        <div className={`${itemDefaultClass}`}>
          <video
            src={process.env.RESOURCE_HOST + (dataCenter.video ?? "")}
            muted
            autoPlay
            loop
            className={videoDefaultClass}
          />
          <DataCenter
            link={dataCenter.link ?? "/"}
            title={dataCenter.title ?? ""}
            desc={dataCenter.desc ?? ""}
            subtitle={dataCenter.sub_title ?? ""}
          />
        </div>
        <div className={`${itemDefaultClass}`}>
          <video
            src={process.env.RESOURCE_HOST + (product.video ?? "")}
            muted
            autoPlay
            loop
            className={videoDefaultClass}
          />
          <Product
            title={product.title ?? ""}
            subtitle={product.sub_title ?? ""}
            desc={product.desc ?? ""}
            link={product.link ?? "/"}
          />
        </div>
        <div className={`${itemDefaultClass}`}>
          <Remainder
            remainder={(remainder ?? []).map((i) => ({
              ...i,
              image: process.env.RESOURCE_HOST + i.image,
            }))}
          />
        </div>
      </main>
    </Layout>
  );
}
