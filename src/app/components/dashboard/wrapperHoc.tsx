/*
 * @Author: atwlee
 * @Date: 2023-12-20 23:03:05
 * @LastEditors: atwlee
 * @LastEditTime: 2023-12-31 11:28:45
 * @Description:
 * @FilePath: /technology/src/app/components/dashboard/wrapperHoc.tsx
 */
"use client";
import classNames from "classnames";
import { useState } from "react";

type O = "isCover";

const withCover = <P,>(WrappedComponent: React.ComponentType<P>) => {
  const EnhancedComponent = (props: Omit<P, O>) => {
    const [isCover, setIsCover] = useState(false);
    return (
      <div
        className={classNames({
          "h-full text-white transition-color duration-500": true,
          "text-center relative": !isCover,
          "bg-[rgba(0,0,0,0.9)] md:bg-[rgba(0,0,0,0.7)]": isCover,
          "fixed top-0 h-[100vh] w-screen md:w-full md:h-full md:relative z-20":
            isCover,
        })}
        onMouseLeave={() => {
          setIsCover(false);
        }}
      >
        <div
          className={classNames({
            "absolute left-[7%] w-[86%] cursor-pointer transition-all duration-700":
              true,
            "top-1/2 -translate-y-1/2": !isCover,
            "top-10 md:top-[15%]": isCover,
          })}
          onMouseEnter={() => {
            setIsCover(true);
          }}
          onClick={() => {
            setIsCover(true);
          }}
        >
          <p
            className={classNames({
              "relative mb-10 pl-3 hover:text-primary w-fit": true,
              "before:content-[''] before:absolute before:left-0 before:top-1/2 before:-rotate-45 before:-translate-y-1/2 before:w-[6px] before:h-[6px] before:border-l before:border-t before:border-white hover:before:border-primary":
                true,
              hidden: !isCover,
              "block md:hidden": isCover,
            })}
            onClick={(e) => {
              e.stopPropagation();
              setIsCover(false);
            }}
          >
            返回
          </p>
          <WrappedComponent {...(props as P)} isCover={isCover} />
        </div>
      </div>
    );
  };
  EnhancedComponent.displayName = `withCover(${
    WrappedComponent.displayName || WrappedComponent.name
  })`;
  return EnhancedComponent;
};
export default withCover;
