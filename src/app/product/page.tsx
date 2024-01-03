/*
 * @Author: atwlee
 * @Date: 2023-12-31 11:58:42
 * @LastEditors: atwlee
 * @LastEditTime: 2024-01-03 21:14:02
 * @Description:
 * @FilePath: /technology/src/app/product/page.tsx
 */
import Image from "next/image";
import { notFound } from "next/navigation";
import Layout from "@/app/components/layout";
import { getProductDetail } from "@/app/api/getProductDetail";
import PageBanner from "@/app/components/pageBanner";

async function Index({ searchParams }: { searchParams: { id: string } }) {
  if (!searchParams.id) {
    notFound();
  }
  const { title, banner, core_function } = await getProductDetail(
    searchParams.id
  );
  return (
    <Layout>
      <PageBanner title={title} banner={banner} />
      <div className="mt-16">
        <div className="px-[4%] pb-8">
          <h2 className="text-center text-2xl text=[#333] font-bold">
            核心功能
          </h2>
          <ul className="mt-10 flex flex-wrap">
            {core_function.map((i, index) => (
              <li
                key={index}
                className="w-full h-auto sm:h-52 sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center justify-center mb-4 transition-all duration-500"
              >
                <Image
                  src={process.env.NEXT_PUBLIC_RESOURCE_HOST + banner}
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
        <div className="px-[4%] pt-8 bg-cyan-500">
          <h2 className="text-center text-2xl text=[#333] font-bold">
            应用场景
          </h2>
          <ul className="mt-10 flex flex-wrap">
            {core_function.map((i, index) => (
              <li
                key={index}
                className="w-full h-auto sm:h-52 sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center justify-center mb-4 transition-all duration-500"
              >
                <Image
                  src={process.env.NEXT_PUBLIC_RESOURCE_HOST + banner}
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
      </div>
    </Layout>
  );
}

export default Index;
