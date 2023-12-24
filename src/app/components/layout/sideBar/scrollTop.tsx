/*
 * @Author: atwlee
 * @Date: 2023-12-18 23:38:08
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-24 00:20:41
 * @Description:
 * @FilePath: /technology/src/app/components/sideBar/scrollTop.tsx
 */
"use client";
import Image from "next/image";

function Index({ img }: { img: string }) {
  return (
    <div
      className="w-[50px] h-full flex items-center justify-center"
      onClick={() => {
        scroll({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <Image
        src={img}
        alt={"top"}
        width={16}
        height={14}
        className="w-[16px] h-[14px]"
      />
    </div>
  );
}

export default Index;
