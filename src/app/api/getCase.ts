/*
 * @Author: atwlee
 * @Date: 2023-12-23 23:14:45
 * @LastEditors: atwlee
 * @LastEditTime: 2024-01-12 22:42:15
 * @Description:
 * @FilePath: /technology/src/app/api/getCase.ts
 */

import "server-only";
import request from "./request";

export interface CaseItem {
  id: number;
  image: string;
  title: string;
  content: string;
}

export const getCaseData = async (id: string) => {
  return request<CaseItem[]>(`api/get_page_data?type=anli&id=${id}`);
};
