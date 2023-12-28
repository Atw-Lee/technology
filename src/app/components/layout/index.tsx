/*
 * @Author: atwlee
 * @Date: 2023-12-17 15:30:53
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-28 21:01:03
 * @Description:
 * @FilePath: /technology/src/app/components/layout/index.tsx
 */
import Header from "@/app/components/layout/header";
import SideBar from "@/app/components/layout/sideBar";
import Footer from "@/app/components/layout/footer";
import type { LangType } from "@/app/type";
function Layout({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: LangType;
}) {
  return (
    <div>
      <Header lang={lang} />
      <SideBar lang={lang} />
      <main className="pt-[60px]">{children}</main>
      <Footer lang={lang} />
    </div>
  );
}

export default Layout;
