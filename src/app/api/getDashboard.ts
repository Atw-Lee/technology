/*
 * @Author: atwlee
 * @Date: 2023-12-23 23:14:45
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-31 21:28:25
 * @Description:
 * @FilePath: /technology/src/app/api/getDashboard.ts
 */
import "server-only";
import request from "./request";

interface Data {
  banner_datas: BannerData[];
  site_settings: SiteSetting[];
  menu_datas: MenuData[];
}

interface MenuData {
  id: number;
  title: string;
  isshowpc: number;
  link: string;
  children: {
    title: string;
    link: string;
  }[];
}

interface SiteSetting {
  id: number;
  logo: string;
  join_us_link: string;
  telephone: string;
  icp: string;
  icp_link: string;
  wa: string;
  wa_link: string;
  qrcode: string;
  sidebar: Sidebar[];
}

interface Sidebar {
  top: string;
  tel: string;
  consult: string;
  consultLink?: any;
  wechat: string;
  wechatQC: string;
  tiktok: string;
  tiktokQC: string;
}

interface BannerData {
  id: number;
  type: string;
  title?: string;
  sub_title?: string;
  bannerdata?: {
    title: string;
    sub_title: string;
    link: string;
    image: string;
  }[];
  desc?: string;
  link?: string;
  video?: string;
}

export const getDashboardData = async () => {
  return request<Data>("api/get_index_data");
};
