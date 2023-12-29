/*
 * @Author: atwlee
 * @Date: 2023-12-20 22:49:10
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-29 22:51:24
 * @Description:
 * @FilePath: /technology/src/app/about/data-center/page.tsx
 */
import { Metadata } from "next";
import Layout from "@/app/components/layout";
import { getMetaData } from "@/app/api/getMeta";
import { getDataCenterData } from "@/app/api/getDataCenter";
import Image from "next/image";

export async function generateMetadata(): Promise<Metadata> {
  const { dataCenter } = await getMetaData();
  return {
    ...dataCenter,
  };
}

async function Index() {
  const data = await getDataCenterData();

  return (
    <Layout>
      <div className="relative h-60 sm:h-72 flex items-center justify-center flex-col text-white">
        <Image
          src={data.headerBg}
          alt={data.title}
          width={1000}
          height={1000}
          quality={100}
          className="absolute w-full h-full object-cover"
        ></Image>
        <h1 className="relative text-2xl sm:text-4xl font-medium">
          {data.title}
        </h1>
        <p className="relative text-xs sm:text-sm border border-white border-solid mt-4 px-3 py-1 rounded-2xl">
          {data.description}
        </p>
      </div>
      <div className="py-8 sm:py-16 px-[5%] sm:px-[15%] text-center">
        <h2 className="text-xl sm:text-2xl text-[#333] font-bold mb-[10px] sm:mb-3">
          {data.dikw.title}
        </h2>
        <p className="text-sm text-[#666] leading-6">{data.dikw.description}</p>
        <div className="flex flex-col-reverse lg:relative mt-9 lg:mt-[70px] mb-[50px] lg:mb-[130px] text-left">
          <ul className="pt-6 lg:pt-[30px] lg:w-4/5">
            {data.dikw.content.map((i, index) => (
              <li
                key={index}
                className="lg:flex flex-col justify-end pt-5 pb-3 lg:pb-2 lg:h-[85px] border-b border-cyan-500 border-dashed text-[#666]"
              >
                <h4 className="text-base font-bold">{i.title}</h4>
                <p className="w-full lg:w-[65%] text-sm leading-6">{i.desc}</p>
              </li>
            ))}
          </ul>
          <Image
            src={data.dikw.img}
            alt={data.dikw.title}
            width={1000}
            height={1000}
            quality={100}
            className="w-full h-auto lg:absolute right-0 top-0 lg:h-[370px] lg:w-auto"
          ></Image>
        </div>
        <h2 className="text-2xl text-[#333] font-bold mb-3">
          {data.sma.title}
        </h2>
        <pre className="text-sm text-[#666] leading-6 mb-7 sm:mb-16 whitespace-pre-wrap">
          {data.sma.content}
        </pre>
        <Image
          src={data.sma.img}
          alt={data.sma.title}
          width={1000}
          height={1000}
          quality={100}
          className="w-full"
        ></Image>
        <ul className="text-left mt-8 sm:mt-14 text-sm leading-6 text-[#666]">
          {data.sma.layers.map((i, index) => (
            <li key={index}>
              <span className="font-bold">{i.title}</span>
              <span>{i.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export default Index;
