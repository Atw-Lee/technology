/*
 * @Author: atwlee
 * @Date: 2023-12-31 09:40:07
 * @LastEditors: atwlee
 * @LastEditTime: 2024-01-13 09:46:56
 * @Description:
 * @FilePath: /technology/src/app/api/request.ts
 */
export default async function request<T = {}>(url: string, init?: RequestInit) {
  const res = await fetch(process.env.NEXT_PUBLIC_REQUEST_HOST + url, {
    next: {
      revalidate: 3600,
    },
    ...init,
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const resJson = await res.json();
  return resJson.data as T;
}
