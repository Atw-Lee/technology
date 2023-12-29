/*
 * @Author: atwlee
 * @Date: 2023-12-17 15:30:53
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-29 22:24:45
 * @Description:
 * @FilePath: /technology/src/app/components/layout/index.tsx
 */
import Header from "@/app/components/layout/header";
import SideBar from "@/app/components/layout/sideBar";
import Footer from "@/app/components/layout/footer";
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <SideBar />
      <main className="pt-[60px]">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
