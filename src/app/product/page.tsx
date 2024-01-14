/*
 * @Author: atwlee
 * @Date: 2023-12-31 11:58:42
 * @LastEditors: atwlee
 * @LastEditTime: 2024-01-14 14:45:29
 * @Description:
 * @FilePath: /technology/src/app/product/page.tsx
 */
import Image from "next/image";
import { notFound } from "next/navigation";
import Layout from "@/app/components/layout";
import { getProductDetail } from "@/app/api/getProductDetail";
import PageBanner from "@/app/components/pageBanner";
import { getProductMetaData } from "@/app/api/getMeta";
import Link from "next/link";
import { idToCase } from "@/app/const/caseMap";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const metaData = await getProductMetaData(searchParams.id);
  return {
    ...metaData,
  };
}

async function Index({ searchParams }: { searchParams: { id: string } }) {
  if (!searchParams.id) {
    notFound();
  }
  const { title, banner, core_function, application_scene, classic_case } =
    await getProductDetail(searchParams.id);
  return (
    <Layout>
      <PageBanner title={title} banner={banner} />
      <div className="mt-16">
        {/* 核心功能 */}
        <div className="px-[4%] pb-8">
          <h2 className="text-center text-2xl text=[#333] font-bold">
            核心功能
          </h2>
          <ul className="mt-10 flex flex-wrap max-w-6xl mx-auto">
            {core_function.map((i, index) => (
              <li
                key={index}
                className="w-full h-auto sm:h-52 sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center justify-center mb-4 transition-all duration-500"
              >
                <Image
                  src={process.env.NEXT_PUBLIC_RESOURCE_HOST + i.icon1}
                  alt={i.title}
                  width={100}
                  height={100}
                  quality={100}
                  className="w-11 h-11 flex-shrink-0"
                ></Image>
                <p className="mt-3 mb-5 text-xl text-[#666] font-bold">
                  {i.title}
                </p>
                <pre className="text-xs text-[#999] text-center">{i.desc}</pre>
              </li>
            ))}
          </ul>
        </div>
        {/* 应用场景 */}
        <div className="px-[4%] py-10 sm:py-14 bg-primary">
          <h2 className="text-center text-2xl text-white font-bold">
            应用场景
          </h2>
          <ul className="mt-10 flex flex-wrap max-w-6xl mx-auto">
            {application_scene.map((i, index) => (
              <li
                key={index}
                className="w-full flex flex-col sm:flex-row items-center mb-4"
              >
                <div className="bg-white mb-[1px] sm:mb-0 sm:mr-[1px] w-full sm:w-[220px] h-[120px] sm:h-[180px] flex-shrink-0 flex flex-col justify-center items-center rounded-t sm:rounded-l">
                  <Image
                    src={process.env.NEXT_PUBLIC_RESOURCE_HOST + i.icon}
                    alt={i.title}
                    width={40}
                    height={40}
                  ></Image>
                  <p className="mt-3 text-base sm:text-lg text-[#666] font-bold">
                    {i.title}
                  </p>
                </div>
                <div className="flex-1 min-w-0 w-full bg-white sm:h-[180px] rounded-b sm:rounded-r flex items-center px-5 py-6 sm:py-0 sm:px-10">
                  <pre className="text-xs text-[#666] leading-[30px] w-full whitespace-pre-wrap">
                    {i.desc}
                  </pre>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* 典型案例 */}
        <div className="px-[4%] pb-8 pt-16">
          <h2 className="text-center text-2xl text=[#333] font-bold">
            典型案例
          </h2>
          <ul className="mt-10">
            {classic_case[0].aldatas.map((i) => (
              <li
                key={i.id}
                className="px-5 py-[18px] sm:py-6 rounded group hover:bg-[#f5f5f6] cursor-pointer"
              >
                <Link
                  href={`/business/case?type=${idToCase[i.type]}&active=${
                    i.id
                  }`}
                >
                  <p className="text-sm whitespace-nowrap text-ellipsis overflow-hidden group-hover:text-primary">
                    {i.title}
                  </p>
                  <p className="text-xs mt-2 whitespace-nowrap text-ellipsis overflow-hidden text-[#999]">
                    {i.desc}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-10 sm:mt-16 flex flex-wrap max-w-6xl mx-auto gap-[2%]">
            {classic_case[0].images.map((i, index) => (
              <li key={index} className="w-[48%] md:w-[32%] lg:w-[12.5%] mb-8">
                <Image
                  src={process.env.NEXT_PUBLIC_RESOURCE_HOST + i}
                  alt={i}
                  width={340}
                  height={100}
                  quality={100}
                  className="w-full"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
