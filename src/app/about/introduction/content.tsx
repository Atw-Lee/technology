/*
 * @Author: atwlee
 * @Date: 2023-12-26 22:02:07
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-31 20:42:12
 * @Description:
 * @FilePath: /technology/src/app/about/introduction/content.tsx
 */
"use client";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import Image from "next/image";
import classNames from "classnames";
import { debounce } from "lodash-es";

function Index({
  data,
}: {
  data: {
    title: string;
    image: string;
    desc: string;
  }[];
}) {
  const [active, setActive] = useState<number>();
  const swiperRef = useRef<SwiperRef>(null);

  // 解决刚进来第一张就有动画的需求
  useEffect(() => {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      setActive(0);
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative w-screen" style={{ height: "calc(100vh - 60px)" }}>
      <Swiper
        modules={[EffectFade]}
        loop
        className="h-full"
        effect="fade"
        ref={swiperRef}
        onSlideChange={debounce((swiper) => {
          setActive(swiper.realIndex);
        }, 100)}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index} className="h-full">
              <Image
                src={item.image}
                alt={item.title}
                width={1000}
                height={1000}
                quality={100}
                className={classNames({
                  "w-full h-full object-cover transition-transform duration-[2500ms]":
                    true,
                  "scale-100": active !== index,
                  "scale-110": active === index,
                })}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <ul
        className={
          "absolute z-20 left-[8%] top-[70%] sm:top-[18%] text-base leading-8 sm:text-lg sm:leading-[54px]"
        }
      >
        {data.map((i, index) => (
          <li
            key={index}
            className={classNames({
              "relative w-fit text-white hover:opacity-100 cursor-pointer after:content-[''] after:absolute after:h-[1px] after:bg-white after:top-4 sm:after:top-[27px] after:right-[-50px] after:transition-all after:duration-[600ms]":
                true,
              "opacity-70 after:w-0": index !== active,
              "opacity-100 after:w-[34px] after:max-w-[34px]": index === active,
            })}
            onClick={() => {
              swiperRef.current?.swiper.slideToLoop(index);
            }}
          >
            {i.title}
          </li>
        ))}
      </ul>
      {data.map((i, index) => (
        <div
          className={classNames({
            "absolute top-[40%] z-10 w-screen px-[3.5%] text-2xl leading-[34px] sm:text-4xl text-white text-center sm:leading-[60px]":
              true,
            hidden: active !== index,
            block: active === index,
          })}
          key={index}
        >
          <p
            key={index}
            className="animate__animated animate__fadeInDown whitespace-pre-wrap"
            style={{
              animationDelay: "0.3s",
            }}
          >
            {i.desc}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Index;
