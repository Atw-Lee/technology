/*
 * @Author: atwlee
 * @Date: 2023-12-27 21:33:04
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-27 21:37:37
 * @Description: 
 * @FilePath: /technology/src/app/type.ts
 */
export type LangType = "en" | "zh";

export type PageProps = {
  params: {
    lang: LangType;
  };
};
