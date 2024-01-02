/*
 * @Author: atwlee
 * @Date: 2024-01-01 18:50:17
 * @LastEditors: atwlee
 * @LastEditTime: 2024-01-02 20:30:34
 * @Description:
 * @FilePath: /technology/src/app/about/news-detail/page.tsx
 */
import { notFound } from "next/navigation";
import Layout from "@/app/components/layout";
import { getNewsDetail } from "@/app/api/getNewsDetail";
import { getMenuData } from "@/app/api/getMeta";
import PageBanner from "@/app/components/pageBanner";

async function Index({ searchParams }: { searchParams: { id: string } }) {
  if (!searchParams.id) {
    notFound();
  }
  const pageBannerData = await getMenuData("6");
  const { title, created_at, content } = await getNewsDetail(searchParams.id);
  return (
    <Layout>
      <PageBanner {...pageBannerData} />
      <div className="mt-16 mx-auto w-[92%] md:w-[740px]">
        <h1 className="text-xl sm:text-2xl text-[#333] text-center">{title}</h1>
        <p className="text-xs text-[#ccc] mt-2 text-center">
          发布时间：{" "}
          <time dateTime={created_at}>{created_at.split(" ")[0]}</time>{" "}
        </p>
        <div
          className="py-4 sm:py-12 border-b border-solid border-[#e5e5e5] mb-14"
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        ></div>
      </div>
    </Layout>
  );
}

export default Index;
