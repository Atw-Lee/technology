/*
 * @Author: atwlee
 * @Date: 2023-12-27 21:47:01
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-28 20:44:25
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
    dataCenter: {
      title: "数据中心安全管理",
      description:
        "DIKW能力模型通过“数据”到“智慧”层层递进的能力体系，解决客户需求并提升客户整体安全能力 智慧预测风险，自动编排，主动反击知识洞察事件变化的背后行",
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
    dataCenter: {
      title: "Data center security management",
      description:
        "DIKW capability model through the 'data' to 'wisdom' layer by layer capability system, to solve customer needs and improve customer's overall security capability wisdom forecast risk, automatic arrangement, active counterattack knowledge insight behind the change of events",
    },
  },
};

export const getMetaData = async (locale: LangType) => {
  return new Promise<(typeof data)["en"]>((resolve) => {
    resolve(data[locale]);
  });
};
