/*
 * @Author: atwlee
 * @Date: 2023-12-31 21:14:54
 * @LastEditors: atwlee
 * @LastEditTime: 2024-01-01 21:59:50
 * @Description:
 * @FilePath: /technology/src/app/about/news/content.tsx
 */
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Pagination } from "@mui/material";
import { NewsData, getNewsList } from "@/app/api/getNewsList";
import Link from "next/link";

function Index() {
  const [data, setData] = useState<NewsData[]>([]);
  const [count, setCount] = useState(1);
  const getData = async (page?: number) => {
    const res = await getNewsList(page);
    setData(res.data);
    setCount(res.last_page);
  };

  const splitTimeStr = (dateTimeString?: string | null) => {
    if (!dateTimeString) return;
    const [year, month, day] = dateTimeString.split(" ")[0].split("-");
    return {
      year,
      date: month + "-" + day,
    };
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="pb-8 pt-16 sm:pt-28 sm:pb-20">
      <ul className="px-[5%] sm:px-[10%]">
        {data.map((i) => (
          <li key={i.id} onClick={() => {}}>
            <Link
              href={`/about/news-detail?id=${i.id}`}
              className="pb-6 mb-6 sm:pb-12 sm:mb-12 border-b border-dashed border-[#e5e5e5] group flex cursor-pointer flex-wrap sm:flex-nowrap"
            >
              <div className="w-full flex-shrink-0 sm:w-[280px] overflow-hidden mb-5 sm:mb-0">
                <Image
                  src={
                    process.env.NEXT_PUBLIC_RESOURCE_HOST + (i.thumbnail ?? "")
                  }
                  alt={i.title ?? ""}
                  width={1000}
                  height={1000}
                  quality={100}
                  className="w-full h-auto object-cover sm:h-[132px] group-hover:scale-110 transition-all duration-700"
                ></Image>
              </div>
              <div className="w-[80%] sm:w-[90%] min-w-0 px-0 pr-4 sm:px-8">
                <p className="text-lg text-[#333] font-medium whitespace-nowrap overflow-hidden text-ellipsis group-hover:text-cyan-500">
                  {i.title ?? ""}
                </p>
                <p className="text-sm text-[#999] ">{i.desc}</p>
              </div>
              <div className="w-[20%] sm:w-[15%] flex-shrink-0 border-l border-solid border-[#d2d2d2] flex flex-col justify-around pl-5">
                <span className="text-lg font-bold text-[#999]">
                  {splitTimeStr(i.created_at)?.date}
                </span>
                <span className="text-xs font-bold text-[#cdcccc]">
                  {splitTimeStr(i.created_at)?.year}
                </span>
                <span className="w-7 h-7 leading-[26px] sm:w-9 sm:h-9 sm:leading-[34px] rounded-[50%] bg-[#ccc] text-white text-center text-xs sm:text-base group-hover:bg-cyan-500">
                  {">>"}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Pagination
        color="primary"
        count={count}
        sx={{
          ".MuiPagination-ul": {
            justifyContent: "center",
          },
          "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: "rgb(6 182 212)",
            color: "white",
          },
          "& .MuiPaginationItem-root:hover": {
            backgroundColor: "rgb(6 182 212)",
            color: "white",
          },
        }}
        variant="outlined"
        shape="rounded"
        onChange={(_, page) => {
          getData(page);
        }}
      />
    </div>
  );
}

export default Index;
