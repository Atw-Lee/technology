/*
 * @Author: atwlee
 * @Date: 2023-12-19 22:16:45
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-29 22:54:45
 * @Description:
 * @FilePath: /technology/src/app/components/dashboard/dataCenter/index.tsx
 */
"use client";
import { useRouter } from "next/navigation";
import classNames from "classnames";
import withWrapper from "../wrapperHoc";

interface IProps {
  title: string;
  subtitle: string;
  desc: string;
  lernaMore: string;
  isCover: boolean;
  link: string;
}

function Index(props: IProps) {
  const router = useRouter();
  const { title, subtitle, desc, lernaMore, isCover, link } = props;
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
          "w-[102px] h-10 leading-[38px] mt-6 mb-7 border border-white border-solid rounded-[20px] text-center hover:bg-cyan-500 hover:border-cyan-500 transition-colors":
            true,
          hidden: !isCover,
        })}
        onClick={handleClickLernaMore}
      >
        {lernaMore}
      </p>
      <hr
        className={classNames({
          "animate-width-process border-[1.5px]": true,
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
      <p
        className={classNames({
          "mt-10 text-sm hover:text-cyan-500 leading-6 animate__animated animate__fadeInUp":
            true,
          hidden: !isCover,
        })}
        onClick={handleClickLernaMore}
      >
        {desc}
      </p>
    </>
  );
}

export default withWrapper(Index);
