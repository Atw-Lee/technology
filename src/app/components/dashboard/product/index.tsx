/*
 * @Author: atwlee
 * @Date: 2023-12-20 23:01:48
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-31 12:01:25
 * @Description:
 * @FilePath: /technology/src/app/components/dashboard/product/index.tsx
 */
"use client";
import { useRouter } from "next/navigation";
import classNames from "classnames";
import withWrapper from "../wrapperHoc";

interface IProps {
  title: string;
  subtitle: string;
  isCover: boolean;
  desc: string;
  link: string;
  // systems: {
  //   title: string;
  //   desc: string;
  //   link: string;
  // }[];
}

function Index(props: IProps) {
  const router = useRouter();
  const { title, subtitle, isCover, desc, link } = props;
  const handleClickLernaMore = () => {
    router.push(link);
  };
  return (
    <>
      <p className="font-bold text-xl sm:text-2xl md:text-[28px] mb-4">
        {title}
      </p>
      <p
        className={classNames({
          "w-[102px] h-10 leading-[38px] mt-6 mb-7 border border-white border-solid rounded-[20px] text-center  transition-colors":
            true,
          "hover:bg-cyan-500 hover:border-cyan-500": true,
          hidden: !isCover,
        })}
        onClick={handleClickLernaMore}
      >
        了解更多
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
      {/* <ul
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
              router.push(i.link);
            }}
          >
            <p className="font-bold leading-6 mb-2">{i.title}</p>
            <p className="leading-6 opacity-70">{i.desc}</p>
          </li>
        ))}
      </ul> */}
      <pre
        className={classNames({
          "mt-10 animate__animated animate__fadeInUp whitespace-break-spaces":
            true,
          hidden: !isCover,
        })}
      >
        {desc}
      </pre>
    </>
  );
}

export default withWrapper(Index);
