/*
 * @Author: atwlee
 * @Date: 2024-01-01 22:01:23
 * @LastEditors: atwlee
 * @LastEditTime: 2024-01-01 22:22:34
 * @Description: 
 * @FilePath: /technology/src/app/api/getNewsDetail.ts
 */
import request from "./request";

interface RootObject {
  id: number;
  type: string;
  title: string;
  desc: string;
  content: string;
  created_at: string;
}

export const getNewsDetail = async (id: string) => {
  return request<RootObject>(`api/get_page_data?random=${Math.random()}&type=newsDetail&id=${id}`, {
    headers: {
      'Cache-Control': 'no-cache',
    }});
};
