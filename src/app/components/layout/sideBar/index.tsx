/*
 * @Author: atwlee
 * @Date: 2023-12-17 15:32:48
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-29 22:28:30
 * @Description:
 * @FilePath: /technology/src/app/components/layout/sideBar/index.tsx
 */
import Link from "next/link";
import Image from "next/image";
import ScrollTop from "./scrollTop";
import { getDashboardData } from "@/app/api/getDashboard";

async function Index() {
  const data = await getDashboardData();

  const defaultClass =
    "absolute left-0 h-[50px] bg-neutral-950 rounded-l-md hover:bg-cyan-500 cursor-pointer";

  const qrCodeClass =
    "relative w-[50px] h-full flex items-center justify-center after:content-[''] after:w-[10px] after:h-[10px] after:hidden group-hover:after:block after:absolute after:left-[-14px] after:top-[-10px] after:bg-gradient-to-bl after:from-white after:from-50% after:to-50%";

  return (
    <ul className="fixed w-[50px] right-0 top-[45vh] hidden sm:block z-10">
      <li className={`${defaultClass} top-0`}>
        <ScrollTop img={data.sideBar.top} />
      </li>
      <li
        className={`${defaultClass} w-32 top-[51px] flex items-center justify-start hover:left-[-78px] transition-all duration-300`}
      >
        <div className="w-[50px] h-full flex items-center justify-center">
          <Image
            src={data.sideBar.consult}
            alt={"top"}
            width={18}
            height={18}
            className="w-[18px] h-[18px]"
          />
        </div>
        <span className="font-bold text-white">{data.consult}</span>
      </li>
      <li
        className={`${defaultClass} w-44 top-[102px] hover:left-[-126px] transition-all duration-300`}
      >
        <Link
          href={`tel:${data.telNumber}`}
          className="w-full h-full flex items-center justify-start"
        >
          <div className="w-[50px] h-full flex items-center justify-center">
            <Image
              src={data.sideBar.tel}
              alt={"top"}
              width={18}
              height={18}
              className="w-[18px] h-[18px]"
            />
          </div>
          <span className="font-bold text-white">{data.telNumber}</span>
        </Link>
      </li>
      <li className={`${defaultClass} top-[153px] group`}>
        <div className={qrCodeClass}>
          <Image
            src={data.sideBar.wechat}
            alt={"top"}
            width={18}
            height={18}
            className="w-[18px] h-[18px]"
          />
          <Image
            src={data.sideBar.wechatQC}
            alt="wechatQC"
            width={120}
            height={120}
            className="absolute right-[54px] bottom-[60px] hidden w-[120px] max-w-none h-[120px] bg-white group-hover:block"
          />
        </div>
      </li>
      <li className={`${defaultClass} top-[204px] group`}>
        <div className={qrCodeClass}>
          <Image
            src={data.sideBar.tiktok}
            alt={"top"}
            width={18}
            height={18}
            className="w-[18px] h-[18px]"
          />
          <Image
            src={data.sideBar.tiktokQC}
            alt="tiktokQC"
            width={120}
            height={120}
            className="absolute right-[54px] bottom-[60px] hidden w-[120px] max-w-none h-[120px] group-hover:block"
          />
        </div>
      </li>
    </ul>
  );
}

export default Index;
