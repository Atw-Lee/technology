/*
 * @Author: atwlee
 * @Date: 2023-12-17 14:59:33
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-29 22:28:12
 * @Description:
 * @FilePath: /technology/src/app/components/layout/header/index.tsx
 */
import Link from "next/link";
import Image from "next/image";
import MenuSwitch from "./components/menuSwitch";
import { getDashboardData } from "@/app/api/getDashboard";

async function Index() {
  const data = await getDashboardData();
  return (
    <div className="fixed top-0 w-screen flex justify-between h-[60px] bg-neutral-700 px-[4%] text-white z-10">
      <Link href={`/`} className="flex items-center shrink-0">
        <Image
          src={data.logo}
          alt={"logo"}
          width={128}
          height={28}
          className={"mr-1 w-[73px] h-[16px] md:w-[128px] md:h-[28px]"}
        />
      </Link>
      <div className="flex items-center text-[14px]">
        <p className="font-bold flex-shrink-0">
          {data.tel}
          {data.telNumber}
        </p>
        <MenuSwitch menus={data.menus} />
      </div>
    </div>
  );
}

export default Index;
