/*
 * @Author: atwlee
 * @Date: 2024-01-01 22:01:23
 * @LastEditors: atwlee
 * @LastEditTime: 2024-01-03 20:43:03
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
}

interface Classic {
  alid: string[];
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
  return request<RootObject>(`api/get_page_data?type=product&id=${id}`);
};
