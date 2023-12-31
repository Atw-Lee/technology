/*
 * @Author: atwlee
 * @Date: 2023-12-23 23:14:45
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-31 11:54:11
 * @Description:
 * @FilePath: /technology/src/app/api/getDashboard.ts
 */
import "server-only";
import request from "./request";

const data = {
  logo: "/layout/logo-zh.svg",
  tel: "咨询电话：",
  telNumber: "400-880-2393",
  copyright: "Copyright © 2020 齐治科技 浙ICP备15004711号",
  internetContentProvider: "浙公网安备 33010602011402号",
  consult: "点我咨询",
  sideBar: {
    top: "/layout/top.png",
    tel: "/layout/tel.png",
    consult: "/layout/consult.png",
    wechat: "/layout/wechat.png",
    wechatQC: "/layout/wechatQC.png",
    tiktok: "/layout/tiktok.png",
    tiktokQC: "/layout/tiktokQC.jpeg",
  },
  learnMore: "了解更多",
  back: "返回",
  dataCenterSecurity: {
    title: "数据中心安全管理",
    subtitle: "构建数据中心安全管理体系\n提升客户的数字化安全能力",
    desc: "根据业务场景快速构建应用，按需集成，弹性扩展，帮助企业发现问题、解决问题、不出问题",
    link: "/about/data-center",
  },
  productionSolution: {
    title: "产品解决方案",
    subtitle: "持续创新十余年\n为解决客户复杂需求而生",
    systems: [
      {
        title: "RIS-ACA 齐治访问控制审计系统",
        desc: "自主研发堡垒机，解决了数据中心运维管理与行为审计难题",
        link: "/product/ris-aca",
      },
      {
        title: "PAM 齐治特权账号管理系统",
        desc: "业内率先推出特权账号管理产品，帮助用户摆脱账号、密码的管理困境",
        link: "/product/pam",
      },
      {
        title: "ASM 齐治资产安全管理系统",
        desc: "面向数据中心全部资产，为您深度发现并解决资产安全风险",
        link: "/product/asm",
      },
    ],
  },
  remainder: [
    {
      title: "大学 · 礼记",
      subtitle:
        "古之欲明德于天下者，先治其国\n欲治其国者，先齐其家\n身修而后家齐\n家齐而后国治\n国治而后天下平",
      link: "/about/introduction",
      img: "/dashboard/remainder0.png",
    },
    {
      title: "齐治2023校招",
      subtitle: "齐家治国，安数字天下\n加入齐治科技，奔向安全未来",
      link: "/about/recruit",
      img: "/dashboard/remainder1.png",
    },
    {
      title: "行业客户案例",
      subtitle: "已为3000+行业客户\n解决数据中心安全难题",
      link: "/business/case?category=gov",
      img: "/dashboard/remainder2.png",
    },
  ],
  menus: [
    {
      title: "产品服务",
      data: [
        {
          title: "RIS-ACA 齐治访问控制审计系统",
          link: "/product/ris-aca",
        },
        {
          title: "PAM 齐治特权账号管理系统",
          link: "/product/pam",
        },
        {
          title: "ASM 齐治资产安全管理系统",
          link: "/product/asm",
        },
      ],
    },
    {
      title: "行业案例",
      data: [
        {
          title: "政府",
          link: "/business/case?category=gov",
        },
        {
          title: "银行",
          link: "/business/case?category=back",
        },
        {
          title: "证券&保险",
          link: "/business/case?category=insurance",
        },
        {
          title: "互联网",
          link: "/business/case?category=net",
        },
        {
          title: "企业",
          link: "/business/case?category=enterprise",
        },
      ],
    },
    {
      title: "关于我们",
      data: [
        {
          title: "公司介绍",
          link: "/about/introduction",
        },
        {
          title: "新闻动态",
          link: "/about/news",
        },
        {
          title: "联系我们",
          link: "/about/relation",
        },
        {
          title: "加入齐治",
          link: "/about/recruit",
        },
      ],
    },
  ],
};

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
