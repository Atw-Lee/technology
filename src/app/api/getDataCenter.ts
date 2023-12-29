/*
 * @Author: atwlee
 * @Date: 2023-12-28 20:42:34
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-29 22:49:41
 * @Description:
 * @FilePath: /technology/src/app/api/getDataCenter.ts
 */
import "server-only";
const data = {
  title: "数据中心安全管理",
  description: "提升客户的安全能力",
  headerBg: "/dataCenter/headerBg.png",
  dikw: {
    title: "DIKW能力模型",
    description:
      "通过“数据”到“智慧”层层递进的能力体系，解决客户需求并提升客户整体安全能力",
    img: "/dataCenter/dikw.png",
    content: [
      {
        title: "智慧",
        desc: "预测风险，自动编排，主动反击",
      },
      {
        title: "知识",
        desc: "洞察事件变化的背后行为原因，根本性解决问题",
      },
      {
        title: "信息",
        desc: "通过风险点的增加、减少、变化的信息/事件，发现“蛛丝马迹”",
      },
      {
        title: "数据",
        desc: "采集信息安全相关的“元数据”，确保数据全面、准确、即时",
      },
    ],
  },
  sma: {
    title: "安全管理架构",
    content:
      "基于DIKW理念，齐治自创贴合数据中心业务场景的整体安全管理架构\n针对三大数据中心安全管理问题，以客户实际应用为目标导向，纵向集成各层所需模块\n横向扩展各层新功能，形成无限应用、无限扩展的数据中心安全管理体系\n为企业发现问题、解决问题，并确保不出问题",
    img: "/dataCenter/sma.png",
    layers: [
      {
        title: "采集层：",
        description:
          "对应DIKW模型“数据”层，通过齐治产品队列及高兼容第三方接口，获取各类安全设备中的原生数据",
      },
      {
        title: "分析层：",
        description:
          "对应DIKW模型“信息”层，齐治独创的数据处理机制和分析技术，实现数据的搜索、调度、汇集",
      },
      {
        title: "应用层：",
        description:
          "对应DIKW模型“知识”层，基于分析层强大的数据加工能力，按照信息安全工作内容封装成场景，场景催生出应用，快速处理客户安全需求",
      },
      {
        title: "对象层：",
        description: "对应DIKW模型“智慧”层，预测风险，洞察未来",
      },
    ],
  },
};

export const getDataCenterData = async () => {
  return new Promise<typeof data>((resolve) => {
    resolve(data);
  });
};
