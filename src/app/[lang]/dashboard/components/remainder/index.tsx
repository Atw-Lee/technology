/*
 * @Author: atwlee
 * @Date: 2023-12-22 21:58:00
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-27 21:39:36
 * @Description:
 * @FilePath: /technology/src/app/[lang]/dashboard/components/remainder/index.tsx
 */
"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import classNames from "classnames";
import type { LangType } from "@/app/type";
import "./index.css";

interface IProps {
  lang: LangType;
  remainder: {
    title: string;
    subtitle: string;
    link: string;
    img: string;
  }[];
}

function Index(props: IProps) {
  const { remainder, lang } = props;
  return (
    <Swiper
      className="h-full dashboard-swiper-wrapper"
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      loop
      autoplay
      speed={1000}
      wrapperTag="ul"
    >
      {remainder.map((i, index) => {
        return (
          <SwiperSlide
            key={index}
            className="relative h-full bg-cover bg-no-repeat cursor-pointer"
            tag="li"
          >
            <Link
              href={`/${lang}${i.link}`}
              className="relative block w-full h-full"
            >
              <Image
                src={i.img}
                alt={i.title}
                width={500}
                height={500}
                quality={100}
                className="absolute w-full h-full"
              ></Image>
              <div
                className={classNames({
                  "absolute top-1/2 -translate-y-1/2 text-white": true,
                  "text-center w-full px-12": index !== 0,
                  "left-[15%] md:w-full md:left-0 md:px-[15%]": index === 0,
                })}
              >
                <p className="font-bold text-xl sm:text-2xl md:text-[28px] mb-4">
                  {i.title}
                </p>
                <pre className="text-sm leading-6 whitespace-break-spaces">
                  {i.subtitle}
                </pre>
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Index;
