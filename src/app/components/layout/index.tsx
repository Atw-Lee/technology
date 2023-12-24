/*
 * @Author: atwlee
 * @Date: 2023-12-17 15:30:53
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-24 00:33:17
 * @Description:
 * @FilePath: /technology/src/app/components/layout/index.tsx
 */
import Header from "@/app/components/layout/header";
import SideBar from "@/app/components/layout/sideBar";
import Footer from "@/app/components/layout/footer";
import { LangType } from "@/app/api/getDashboard";
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
      <div className="pt-[60px]">{children}</div>
      <Footer lang={lang} />
    </div>
  );
}

export default Layout;
