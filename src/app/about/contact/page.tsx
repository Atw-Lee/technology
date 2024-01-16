/*
 * @Author: atwlee
 * @Date: 2023-12-24 15:40:50
 * @LastEditors: atwlee
 * @LastEditTime: 2024-01-02 21:35:23
 * @Description:
 * @FilePath: /technology/src/app/about/contact/page.tsx
 */
import Layout from "@/app/components/layout";
import { getMenuData, getMetaData } from "@/app/api/getMeta";
import PageBanner from "@/app/components/pageBanner";
import { getContactData } from "@/app/api/getContact";

export async function generateMetadata() {
  const metaData = await getMetaData("7");
  return {
    ...metaData,
  };
}

async function Index() {
  const pageBannerData = await getMenuData("7");
  const data = await getContactData();
  return (
    <Layout>
      <PageBanner {...pageBannerData} />
      <ul className="py-6 sm:py-16 w-[92%] mx-auto flex justify-between flex-wrap">
        {data.map((i) => (
          <li
            key={i.id}
            className="w-full md:w-[49%] mb-6 px-8 py-1 text-sm leading-6 text-[#666] cursor-pointer rounded hover:bg-[#f5f5f5] group"
          >
            <p className="font-bold group-hover:text-primary">{i.title}</p>
            {i.address && <p>办公地址：{i.address}</p>}
            {i.phone && <p>总部电话：{i.phone}</p>}
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default Index;
