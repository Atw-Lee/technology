/*
 * @Author: atwlee
 * @Date: 2023-12-23 23:14:45
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-27 21:39:47
 * @Description:
 * @FilePath: /technology/src/app/api/getIntroduction.ts
 */

import "server-only";
import type { LangType } from "@/app/type";

const data = {
  zh: {
    data: [
      {
        title: "我们是",
        img: "/introduction/we-are.jpeg",
        content: ["国内领先且具有完全自主知识产权的", "数据中心安全产品提供商"],
      },
      {
        title: "我们的能力",
        img: "/introduction/our-highlights.jpeg",
        content: ["持续地创新", "帮用户解决复杂问题"],
      },
      {
        title: "我们的产品逻辑",
        img: "/introduction/our-product.jpeg",
        content: ["理解用户的前瞻需求", "提供通用性解决方案"],
      },
      {
        title: "我们的目标",
        img: "/introduction/our-goals.jpeg",
        content: ["数据中心安全管理", "提升客户的安全能力"],
      },
    ],
  },
  en: {
    data: [
      {
        title: "We are",
        img: "/introduction/we-are.jpeg",
        content: [
          "Leading data center security product provider",
          "with independent intellectual property rights",
        ],
      },
      {
        title: "Our Highlights",
        img: "/introduction/our-highlights.jpeg",
        content: [
          "Continuous Innovations",
          "Help Users Resolve Complex Problems",
        ],
      },
      {
        title: "Our Product Logic",
        img: "/introduction/our-product.jpeg",
        content: [
          "Understand Future User Needs",
          "Provide General-purpose Forward-looking Solutions",
        ],
      },
      {
        title: "Our Goals",
        img: "/introduction/our-goals.jpeg",
        content: [
          "Data Center Security Management",
          "Improve Customers' Security Capabilities",
        ],
      },
    ],
  },
};

export const getIntroductionData = async (locale: LangType) => {
  return new Promise<(typeof data)["en"]>((resolve) => {
    resolve(data[locale]);
  });
};
