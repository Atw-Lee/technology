/*
 * @Author: atwlee
 * @Date: 2023-12-27 21:47:01
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-31 12:21:29
 * @Description:
 * @FilePath: /technology/src/app/api/getMeta.ts
 */
import "server-only";
import request from "./request";
import { Metadata } from "next/types";

export const getMetaData = async (id: string): Promise<Metadata> => {
  const data = await request<
    {
      seoData: {
        seotitle: string;
        seokeyword: string;
        seodesc: string;
      };
    }[]
  >(`api/get_page_data?type=menuDetail&id=${id}`);

  return {
    title: data[0].seoData.seotitle,
    description: data[0].seoData.seodesc,
    keywords: data[0].seoData.seokeyword,
  };
};
