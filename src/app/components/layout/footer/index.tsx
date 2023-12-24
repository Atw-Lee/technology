/*
 * @Author: atwlee
 * @Date: 2023-12-18 20:05:06
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-23 23:24:17
 * @Description:
 * @FilePath: /technology/src/app/components/footer/index.tsx
 */
import Link from "next/link";
import Image from "next/image";
import { LangType, getDashboardData } from "@/app/api/getDashboard";

async function Index({ lang }: { lang: LangType }) {
  const data = await getDashboardData(lang);

  return (
    <div className="h-20 bg-neutral-700 text-neutral-400 text-xs flex flex-col gap-1 items-center justify-center sm:flex-row sm:gap-3">
      <Link
        href={
          "https://www.baidu.com/link?url=iLhMsBb8iGIS7ZIQaKyGRwnoThq2sxaLkJzWICEATewwA1PYiiIIliUMxJaTLC9O&wd=&eqid=c37364be00083bbc000000065f352d03"
        }
        target="_blank"
        className="hover:text-white"
      >
        {data.copyright}
      </Link>
      <div
        className={`${lang === "en" ? "hidden" : ""} flex gap-2 items-center`}
      >
        <Image
          src="/layout/icp.png"
          alt="icp"
          width={20}
          height={20}
          className="shrink-0 w-5 h-5"
        />
        <Link
          href={
            "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010602011402"
          }
          target="_blank"
          className="hover:text-white"
        >
          {data.internetContentProvider}
        </Link>
      </div>
    </div>
  );
}

export default Index;
