/*
 * @Author: atwlee
 * @Date: 2023-12-27 21:47:01
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-27 22:04:08
 * @Description:
 * @FilePath: /technology/src/app/api/getMeta.ts
 */
import "server-only";
import type { LangType } from "@/app/type";

const data = {
  zh: {
    layout: {
      title: "齐治科技",
      description: "齐治科技",
      authors: [
        {
          name: "齐治科技",
        },
      ],
      keywords: [
        "齐治科技",
        "数据安全",
        "访问控制审计系统",
        "账号管理系统",
        "资产安全管理系统",
      ],
    },
    dashboard: {
      description: "齐治科技官网",
    },
    introduction: {
      title: "关于我们",
      description:
        "国内领先且具有完全自主知识产权的数据中心安全产品提供商，持续地创新帮用户解决复杂问题，理解用户的前瞻需求提供通用性解决方案，数据中心安全管理提升客户的安全能力",
    },
  },
  en: {
    layout: {
      title: "Qizhi Technology",
      description: "Qizhi Technology",
      authors: [
        {
          name: "Qizhi Technology",
        },
      ],
      keywords: ["Qizhi Technology", "Data security", "ris-aca", "pam", "asm"],
    },
    dashboard: {
      description: "Qizhi Technology Dashboard",
    },
    introduction: {
      title: "About US",
      description:
        "China's leading provider of data center security products with fully independent intellectual property rights continues to innovate to help users solve complex problems, understand the forward-looking needs of users to provide universal solutions, data center security management to enhance customers' security capabilities",
    },
  },
};

export const getMetaData = async (locale: LangType) => {
  return new Promise<(typeof data)["en"]>((resolve) => {
    resolve(data[locale]);
  });
};
