/*
 * @Author: atwlee
 * @Date: 2023-12-17 23:22:21
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-23 23:26:51
 * @Description:
 * @FilePath: /technology/src/app/components/header/components/switchLang.tsx
 */
"use client";
import { LangType } from "@/app/api/getDashboard";

function Index({ lang }: { lang: LangType }) {
  const handleSwitch = () => {
    location.href = location.href.replace(lang, lang === "en" ? "zh" : "en");
  };
  return (
    <p
      className="text-slate-200 hover:text-white cursor-pointer"
      onClick={handleSwitch}
    >
      {lang === "en" ? "中文" : "English"}
    </p>
  );
}

export default Index;
