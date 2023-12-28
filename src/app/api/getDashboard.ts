/*
 * @Author: atwlee
 * @Date: 2023-12-23 23:14:45
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-28 20:42:43
 * @Description:
 * @FilePath: /technology/src/app/api/getDashboard.ts
 */
import "server-only";
import type { LangType } from "@/app/type";

const data = {
  zh: {
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
  },
  en: {
    logo: "/layout/logo-en.svg",
    tel: "Tel:",
    telNumber: "400-880-2393",
    copyright: "Copyright © 2020 Qizhi Technologies, Co. , Ltd.",
    internetContentProvider: "Zhejiang Public network Anbei 33010602011402",
    consult: "Consult",
    sideBar: {
      top: "/layout/top.png",
      tel: "/layout/tel.png",
      consult: "/layout/consult.png",
      wechat: "/layout/wechat.png",
      wechatQC: "/layout/wechatQC.png",
      tiktok: "/layout/tiktok.png",
      tiktokQC: "/layout/tiktokQC.jpeg",
    },
    learnMore: "Learn More",
    back: "Back",
    dataCenterSecurity: {
      title: "Data Center Security Management",
      subtitle:
        "Building a Data Center Security Management System\nImproving Customer Digital Security",
      desc: "Rapidly develop and integrate applications based on business needs with flexible scaling to help businesses find and solve problems",
    },
    productionSolution: {
      title: "Product Solutions",
      subtitle:
        "Over Ten Years of Continuous Innovation\nDeveloped to Solve Complex Customer Needs",
      systems: [
        {
          title: "Access Control Audit System (ACA)",
          desc: "Proprietary bastion host solves data center O&M management, as well as operational audit challenges",
          link: "/product/ris-aca",
        },
        {
          title: "Privileged Account Management System (PAM)",
          desc: "The first in the industry to launch a privileged account management product that helps users resolve account and password management issues",
          link: "/product/pam",
        },
        {
          title: "Asset Security Management System (ASM)",
          desc: "Identify and fix in-depth asset security risks across all data center assets",
          link: "/product/asm",
        },
      ],
    },
    remainder: [
      {
        title: "Book of Rites",
        subtitle:
          "When their persons are cultivated\ntheir families are harmonized\nThen their states are rightly managed\nWhen their families are harmonized, their states are rightly managed\nFinally, the whole country is made tranquil and happy",
        link: "/about/introduction",
        img: "/dashboard/remainder0.png",
      },
      {
        title: "Campus Recruitment",
        subtitle:
          "Harmonize the families and manage the states\nby securing the Digital World\nJoin us for a secure future",
        link: "/about/recruit",
        img: "/dashboard/remainder1.png",
      },
      {
        title: "Industry Case Studies",
        subtitle:
          "3000+ industry customers served and\ndata center security issues resolved",
        link: "/business/case",
        img: "/dashboard/remainder2.png",
      },
    ],
    menus: [
      {
        title: "Product Services",
        data: [
          {
            title: "Access Control Audit System",
            link: "/product/ris-aca",
          },
          {
            title: "Privileged Account Management System",
            link: "/product/pam",
          },
          {
            title: "Asset Security Management System",
            link: "/product/asm",
          },
        ],
      },
      {
        title: "Case",
        data: [
          {
            title: "Government",
            link: "/business/case?category=gov",
          },
          {
            title: "Bank",
            link: "/business/case?category=back",
          },
          {
            title: "Finance",
            link: "/business/case?category=insurance",
          },
          {
            title: "Internet",
            link: "/business/case?category=net",
          },
          {
            title: "Company",
            link: "/business/case?category=enterprise",
          },
        ],
      },
      {
        title: "About As",
        data: [
          {
            title: "Our Company",
            link: "/about/introduction",
          },
          {
            title: "News",
            link: "/about/news",
          },
          {
            title: "Contact Us",
            link: "/about/relation",
          },
          {
            title: "Join Us",
            link: "/about/recruit",
          },
        ],
      },
    ],
  },
};

export const getDashboardData = async (locale: LangType) => {
  return new Promise<(typeof data)["en"]>((resolve) => {
    resolve(data[locale]);
  });
};
