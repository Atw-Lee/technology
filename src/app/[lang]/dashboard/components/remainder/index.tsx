/*
 * @Author: atwlee
 * @Date: 2023-12-22 21:58:00
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-24 00:09:28
 * @Description:
 * @FilePath: /technology/src/app/[lang]/dashboard/components/remainder/index.tsx
 */
"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import classNames from "classnames";
import { LangType } from "@/app/api/getDashboard";
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
  const glideContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!glideContainer.current) return;
    new Glide(glideContainer.current, {
      type: "carousel",
      gap: 0,
      perView: 2,
      autoplay: 5000,
    }).mount();
    return () => {};
  }, []);

  const sliderClass =
    "glide__slide relative h-full bg-cover bg-no-repeat cursor-pointer";
  const bulletClass = "glide__bullet w-5 h-1 bg-white mx-1";

  return (
    <div ref={glideContainer} className="glide relative h-full">
      <div className="glide__track h-full" data-glide-el="track">
        <ul className="glide__slides h-full">
          {remainder.map((i, index) => {
            return (
              <li key={index} className={classNames([sliderClass])}>
                <Link
                  href={`/${lang}${i.link}`}
                  className="relative block w-full h-full"
                >
                  <Image
                    src={i.img}
                    alt={""}
                    width={500}
                    height={500}
                    quality={100}
                    className="absolute w-full h-full"
                  ></Image>
                  <div
                    className={classNames({
                      "absolute top-1/2 -translate-y-1/2 text-white": true,
                      "text-center w-full px-12": index !== 0,
                      "left-[15%] md:w-full md:left-0 md:px-10": index === 0,
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
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className="glide__bullets text-center -translate-y-10 w-1/2"
        data-glide-el="controls[nav]"
      >
        <button className={bulletClass} data-glide-dir="=0"></button>
        <button className={bulletClass} data-glide-dir="=1"></button>
        <button className={bulletClass} data-glide-dir="=2"></button>
      </div>
    </div>
  );
}

export default Index;
