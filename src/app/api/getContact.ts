/*
 * @Author: atwlee
 * @Date: 2023-12-23 23:14:45
 * @LastEditors: atwlee
 * @LastEditTime: 2024-01-02 20:44:22
 * @Description:
 * @FilePath: /technology/src/app/api/getContact.ts
 */

import "server-only";
import request from "./request";

interface Item {
  id: number;
  title: string;
  address: string;
  phone: string;
  status: number;
}

export const getContactData = async () => {
  return request<Item[]>("api/get_page_data?type=contact");
};
