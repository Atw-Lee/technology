/*
 * @Author: atwlee
 * @Date: 2023-12-23 23:14:45
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-29 22:50:13
 * @Description:
 * @FilePath: /technology/src/app/api/getIntroduction.ts
 */

import "server-only";
const data = {
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
};

export const getIntroductionData = async () => {
  return new Promise<typeof data>((resolve) => {
    resolve(data);
  });
};
