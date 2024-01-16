/*
 * @Author: atwlee
 * @Date: 2023-12-19 22:16:45
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-31 12:00:28
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
  isCover: boolean;
  link: string;
}

function Index(props: IProps) {
  const router = useRouter();
  const { title, subtitle, desc, isCover, link } = props;
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
          "hover:bg-primary hover:border-primary": true,
          hidden: !isCover,
        })}
        onClick={handleClickLernaMore}
      >
        了解更多
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
          "mt-10 text-sm leading-6 animate__animated animate__fadeInUp": true,
          "hover:text-primary": false,
          hidden: !isCover,
        })}
        // onClick={handleClickLernaMore}
      >
        {desc}
      </p>
    </>
  );
}

export default withWrapper(Index);
