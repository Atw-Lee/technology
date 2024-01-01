/*
 * @Author: atwlee
 * @Date: 2023-12-27 21:47:01
 * @LastEditors: atwlee
 * @LastEditTime: 2024-01-01 22:59:32
 * @Description:
 * @FilePath: /technology/src/app/api/getMeta.ts
 */
import "server-only";
import request from "./request";
import { Metadata } from "next/types";

// 这俩请求其实都是菜单详情单接口，只是要的数据不一样，一个要seo，一个要title，banner这些基本数据。

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

export const getMenuData = async (id: string) => {
  const data = await request<
    {
      title: string;
      banner: string;
    }[]
  >(`api/get_page_data?type=menuDetail&id=${id}`);

  return {
    title: data[0].title,
    banner: data[0].banner,
  };
};
