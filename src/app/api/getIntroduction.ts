/*
 * @Author: atwlee
 * @Date: 2023-12-23 23:14:45
 * @LastEditors: atwlee
 * @LastEditTime: 2024-01-02 20:43:58
 * @Description:
 * @FilePath: /technology/src/app/api/getIntroduction.ts
 */

import "server-only";
import request from "./request";

interface Item {
  id: number;
  image: string;
  title: string;
  desc: string;
}

export const getIntroductionData = async () => {
  return request<Item[]>("api/get_page_data?random=${Math.random()}&type=intro", {
    headers: {
      'Cache-Control': 'no-cache',
    }});
};
