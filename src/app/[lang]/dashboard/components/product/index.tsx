/*
 * @Author: atwlee
 * @Date: 2023-12-20 23:01:48
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-24 15:06:45
 * @Description:
 * @FilePath: /technology/src/app/[lang]/dashboard/components/product/index.tsx
 */
"use client";
import { useRouter } from "next/navigation";
import classNames from "classnames";
import { LangType } from "@/app/api/getDashboard";
import withWrapper from "../wrapperHoc";

interface IProps {
  lang: LangType;
  title: string;
  subtitle: string;
  isCover: boolean;
  systems: {
    title: string;
    desc: string;
    link: string;
  }[];
}

function Index(props: IProps) {
  const router = useRouter();
  const { title, subtitle, lang, isCover, systems } = props;

  return (
    <>
      <p className="font-bold text-xl sm:text-2xl md:text-[28px] mb-4">
        {title}
      </p>
      <hr
        className={classNames({
          "animate-width-process border-[1.5px] mt-9": true,
          hidden: !isCover,
        })}
      />
      <pre
        className={classNames({
          "text-sm leading-6 whitespace-break-spaces": true,
          hidden: isCover,
        })}
      >
        {subtitle}
      </pre>
      <ul
        className={classNames({
          "mt-10 animate__animated animate__fadeInUp": true,
          hidden: !isCover,
        })}
      >
        {systems.map((i, index) => (
          <li
            key={index}
            className="mt-5 hover:text-cyan-500"
            onClick={() => {
              router.push(`/${lang}${i.link}`);
            }}
          >
            <p className="font-bold leading-6 mb-2">{i.title}</p>
            <p className="leading-6 opacity-70">{i.desc}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default withWrapper(Index);
