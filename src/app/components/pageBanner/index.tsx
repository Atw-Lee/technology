/*
 * @Author: atwlee
 * @Date: 2024-01-01 18:51:52
 * @LastEditors: atwlee
 * @LastEditTime: 2024-01-02 20:27:46
 * @Description:
 * @FilePath: /technology/src/app/components/pageBanner/index.tsx
 */
import Image from "next/image";
interface IProps {
  title: string;
  banner: string;
}
function banner(props: IProps) {
  const { title, banner } = props;
  return (
    <div className=" relative h-60 sm:h-72 flex items-center justify-center text-white">
      <Image
        src={process.env.NEXT_PUBLIC_RESOURCE_HOST + banner}
        alt={title}
        width={1000}
        height={1000}
        quality={100}
        className="absolute w-full h-full object-cover"
      ></Image>
      <h1 className="relative text-2xl sm:text-4xl font-medium">{title}</h1>
    </div>
  );
}

export default banner;
