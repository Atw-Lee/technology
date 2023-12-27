/*
 * @Author: atwlee
 * @Date: 2023-12-17 14:59:33
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-26 21:53:53
 * @Description:
 * @FilePath: /technology/src/app/components/layout/header/index.tsx
 */
import Link from "next/link";
import Image from "next/image";
import MenuSwitch from "./components/menuSwitch";
import SwitchLang from "./components/switchLang";
import { LangType, getDashboardData } from "@/app/api/getDashboard";
import classNames from "classnames";

async function Index({ lang }: { lang: LangType }) {
  const data = await getDashboardData(lang);
  return (
    <div className="fixed top-0 w-screen flex justify-between h-[60px] bg-neutral-700 px-[4%] text-white z-10">
      <Link href={`/${lang}/dashboard`} className="flex items-center shrink-0">
        <Image
          src={data.logo}
          alt={"logo"}
          width={lang === "zh" ? 128 : 51.5}
          height={28}
          className={classNames({
            "mr-1": true,
            "w-[73px] h-[16px] md:w-[128px] md:h-[28px]": lang === "zh",
            "h-[28px] w-[51.5px]": lang === "en",
          })}
        />
      </Link>
      <div className="flex items-center text-[14px]">
        <p className="font-bold flex-shrink-0">
          {data.tel}
          {data.telNumber}
        </p>
        <MenuSwitch menus={data.menus} lang={lang} />
        <SwitchLang lang={lang} />
      </div>
    </div>
  );
}

export default Index;
