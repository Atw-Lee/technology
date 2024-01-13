/*
 * @Author: atwlee
 * @Date: 2023-12-27 21:47:01
 * @LastEditors: atwlee
 * @LastEditTime: 2024-01-13 10:45:22
 * @Description:
 * @FilePath: /technology/src/app/api/getMeta.ts
 */
import "server-only";
import request from "./request";
import { Metadata } from "next/types";
import { getDashboardData } from "./getDashboard";

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

// 获取方案类型的meta数据
export const getCaseTypeMetaData = async (id: number): Promise<Metadata> => {
  const { menu_datas } = await getDashboardData();
  const caseTypes = menu_datas.find((i) => i.id === 3)?.children;
  const currentCaseType = caseTypes?.find((i) => i.id === id);
  return {
    title: currentCaseType?.seotitle,
    description: currentCaseType?.seodesc,
    keywords: currentCaseType?.seokeyword,
  };
};

//
export const getProductMetaData = async (id: number): Promise<Metadata> => {
  const data = await request<
    {
      children: {
        id: number;
        seotitle: string;
        seokeyword: string;
        seodesc: string;
      }[];
    }[]
  >(`api/get_page_data?type=menuDetail&id=2`);

  const currentProduct = data[0].children.find((i) => i.id === id);

  return {
    title: currentProduct?.seotitle,
    description: currentProduct?.seodesc,
    keywords: currentProduct?.seokeyword,
  };
};
