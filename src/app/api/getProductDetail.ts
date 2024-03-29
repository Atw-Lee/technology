/*
 * @Author: atwlee
 * @Date: 2024-01-01 22:01:23
 * @LastEditors: atwlee
 * @LastEditTime: 2024-01-14 14:44:20
 * @Description:
 * @FilePath: /technology/src/app/api/getProductDetail.ts
 */
import request from "./request";

interface RootObject {
  id: number;
  title: string;
  banner: string;
  core_function: Core[];
  application_scene: Application[];
  classic_case: Classic[];
  seoData: {
    seotitle: string;
    seokeyword: string;
    seodesc: string;
  };
}

interface Classic {
  aldatas: {
    title: string;
    desc: string;
    id: number;
    type: string;
  }[];
  images: string[];
}

interface Application {
  desc: string;
  icon: string;
  title: string;
}

interface Core {
  desc: string;
  icon1: string;
  title: string;
}

export const getProductDetail = async (id: string) => {
  return request<RootObject>(`api/get_page_data?random=${Math.random()}&type=product&id=${id}`, {
    headers: {
      'Cache-Control': 'no-cache',
    }});
};
