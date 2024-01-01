/*
 * @Author: atwlee
 * @Date: 2023-12-31 21:13:01
 * @LastEditors: atwlee
 * @LastEditTime: 2024-01-01 18:46:57
 * @Description:
 * @FilePath: /technology/src/app/api/getNewsList.ts
 */
import request from "./request";

interface RootObject {
  current_page: number;
  data: NewsData[];
  last_page: number;
}

export interface NewsData {
  id: number;
  type: string;
  thumbnail?: string;
  title?: string;
  desc: string;
  content?: string;
  tags?: any[];
  status: number;
  rank: number;
  created_at?: string;
  updated_at?: any;
  deleted_at?: any;
}

export const getNewsList = async (page = 1) => {
  return request<RootObject>(`api/get_page_data?type=newsList&page=${page}`);
};
