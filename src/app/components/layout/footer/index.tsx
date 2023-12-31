/*
 * @Author: atwlee
 * @Date: 2023-12-18 20:05:06
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-31 10:26:42
 * @Description:
 * @FilePath: /technology/src/app/components/layout/footer/index.tsx
 */
import Link from "next/link";
import Image from "next/image";

interface IProps {
  copyright: string;
  copyrightLink: string;
  internetContentProvider: string;
  internetContentProviderLink: string;
}

function Index(props: IProps) {
  const {
    copyright,
    copyrightLink,
    internetContentProvider,
    internetContentProviderLink,
  } = props;
  return (
    <div className="h-20 bg-neutral-700 text-neutral-400 text-xs flex flex-col gap-1 items-center justify-center sm:flex-row sm:gap-3">
      <Link href={copyrightLink} target="_blank" className="hover:text-white">
        {copyright}
      </Link>
      <div className={"flex gap-2 items-center"}>
        <Image
          src="/layout/icp.png"
          alt="icp"
          width={20}
          height={20}
          className="shrink-0 w-5 h-5"
        />
        <Link
          href={internetContentProviderLink}
          target="_blank"
          className="hover:text-white"
        >
          {internetContentProvider}
        </Link>
      </div>
    </div>
  );
}

export default Index;
