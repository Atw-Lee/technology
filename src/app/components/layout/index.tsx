/*
 * @Author: atwlee
 * @Date: 2023-12-17 15:30:53
 * @LastEditors: atwlee
 * @LastEditTime: 2024-01-15 22:15:25
 * @Description:
 * @FilePath: /technology/src/app/components/layout/index.tsx
 */
import Header from "@/app/components/layout/header";
import SideBar from "@/app/components/layout/sideBar";
import Footer from "@/app/components/layout/footer";
import { getDashboardData } from "@/app/api/getDashboard";
async function Layout({ children }: { children: React.ReactNode }) {
  const data = await getDashboardData();
  const webSit = data.site_settings[0];
  const sideBar = webSit.sidebar[0];
  const menus = data.menu_datas.filter((i) => i.isshowpc);

  return (
    <div>
      {/* Header部 */}
      <Header logo={webSit.logo} telephone={webSit.telephone} menus={menus} />
      {/* 右侧操作区 */}
      <SideBar
        topImg={sideBar.top}
        consultImg={sideBar.consult}
        consultUrl={sideBar.consultLink}
        tel={webSit.telephone}
        telImg={sideBar.tel}
        wechatImg={sideBar.wechat}
        wechatQRImg={sideBar.wechatQC}
        tiktokImg={sideBar.tiktok}
        tiktokQRImg={sideBar.tiktokQC}
      />
      <main className="pt-[60px]">{children}</main>
      {/* Footer部分 */}
      <Footer
        copyright={webSit.icp}
        copyrightLink={webSit.icp_link}
        internetContentProvider={webSit.wa}
        internetContentProviderLink={webSit.wa_link}
      />
    </div>
  );
}

export default Layout;
