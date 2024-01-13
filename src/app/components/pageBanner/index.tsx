/*
 * @Author: atwlee
 * @Date: 2024-01-01 18:51:52
 * @LastEditors: atwlee
 * @LastEditTime: 2024-01-13 13:07:57
 * @Description:
 * @FilePath: /technology/src/app/components/pageBanner/index.tsx
 */
import classNames from "classnames";
import Image from "next/image";
interface IProps {
  title: string;
  banner: string;
  titleClassName?: string;
}
function Banner(props: IProps) {
  const { title, banner, titleClassName } = props;
  return (
    <div className="relative h-60 sm:h-72 flex items-center justify-center text-white">
      <Image
        src={process.env.NEXT_PUBLIC_RESOURCE_HOST + banner}
        alt={title}
        width={1000}
        height={1000}
        quality={100}
        className="absolute w-full h-full object-cover"
      ></Image>
      <h1
        className={classNames([
          "relative text-2xl sm:text-4xl font-medium",
          titleClassName,
        ])}
      >
        {title}
      </h1>
    </div>
  );
}

export default Banner;
