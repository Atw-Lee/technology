/*
 * @Author: atwlee
 * @Date: 2024-01-12 22:38:15
 * @LastEditors: atwlee
 * @LastEditTime: 2024-01-13 10:11:47
 * @Description:
 * @FilePath: /technology/src/app/business/case/content.tsx
 */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CaseItem } from "@/app/api/getCase";
import classNames from "classnames";

interface IProps {
  caseTypes?: {
    title: string;
    link: string;
  }[];
  caseData: CaseItem[];
  active?: string;
  caseType: string;
}

function Index(props: IProps) {
  const router = useRouter();
  const { caseTypes, caseData, caseType, active } = props;
  const [caseActive, setCaseActive] = useState<number>();

  useEffect(() => {
    active && setCaseActive(Number(active));
  }, [active]);

  const handleClickCaseType = (link: string) => {
    router.push(link);
    setCaseActive(undefined);
  };

  const currentCaseData = caseActive
    ? caseData.find((i) => i.id === caseActive)
    : caseData[0];

  return (
    <>
      <ul className="relative w-[90%] mx-auto flex justify-center flex-wrap rounded-t-3xl border-t border-l border-r border-white border-solid mt-[-89px] sm:mt-[-61px] overflow-hidden">
        {caseTypes?.map((i, index) => (
          <li
            key={i.link}
            className={classNames({
              "h-11 w-1/3 font-bold text-white text-xl text-center leading-[44px] border-r border-b border-white border-solid cursor-pointer":
                true,
              "sm:h-[60px] sm:w-1/6 sm:leading-[60px] last:border-r-0 sm:border-b-0 hover:bg-[#037f8d]":
                true,
              "bg-transparent": !i.link.includes(caseType),
              "bg-[#037f8d]": i.link.includes(caseType),
              "border-r-0 sm:border-r": index === 2,
              "border-b-0": index > 2,
            })}
            onClick={() => handleClickCaseType(i.link)}
          >
            {i.title}
          </li>
        ))}
      </ul>
      <div className="pt-9 sm:pt-11 px-[4%] flex flex-col sm:flex-row">
        <ul className="w-full pb-9 sm:pt-0 sm:w-[270px] pr-4 flex-shrink-0">
          {caseData.map((i) => (
            <li
              key={i.id}
              className={classNames({
                "text-[#666] text-sm mt-3 cursor-pointer relative pl-4": true,
                "text-primary": i.id === currentCaseData?.id,
                "before:content-[''] before:absolute before:top-[5px] before:left-0 before:border-[5px] before:border-l-gray-600 before:border-t-transparent before:border-b-transparent before:border-r-0":
                  true,
              })}
              onClick={() => setCaseActive(i.id)}
            >
              {i.title}
            </li>
          ))}
        </ul>
        <div className="border-t sm:border-t-0 sm:border-l border-solid border-[#d2d2d2] pb-16 sm:px-12">
          <h2 className="text-[#333] text-2xl text-center mb-9 mt-7 sm:m-0">
            {currentCaseData?.title}
          </h2>
          <div
            dangerouslySetInnerHTML={{
              __html: currentCaseData?.content ?? "",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Index;
