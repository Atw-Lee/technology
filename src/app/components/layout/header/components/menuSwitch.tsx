/*
 * @Author: atwlee
 * @Date: 2023-12-17 22:50:39
 * @LastEditors: atwlee
 * @LastEditTime: 2024-01-01 18:57:55
 * @Description:
 * @FilePath: /technology/src/app/components/layout/header/components/menuSwitch.tsx
 */
"use client";
import { Fragment } from "react";
import Link from "next/link";
import { Popover, Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import { useWindowSize } from "react-use";

export interface MenuItem {
  title: string;
  children: { title: string; link: string }[];
}

interface IProps {
  menus: MenuItem[];
}

function Index(props: IProps) {
  const { menus } = props;
  const { width } = useWindowSize();
  const isMobile = !!(width && width < 768); // 768 是tailwind的md
  return (
    <Popover className={"relative"}>
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames({
              "w-[40px] h-[40px] p-[7px] rounded-md group flex flex-col justify-center gap-[6px] cursor-pointer ml-6 focus:outline-none":
                true,
              "bg-primary ": open,
            })}
            aria-label="menu"
          >
            <span className="inline-block w-2/3 h-[3px] transition-all duration-300 group-hover:w-full bg-white" />
            <span className="inline-block w-full h-[3px] bg-white" />
            <span className="inline-block w-2/3 h-[3px] transition-all duration-300 group-hover:w-full bg-white" />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-500"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1"
          >
            <Popover.Panel
              className={classNames({
                "fixed top-[60px] left-0 w-screen bg-no-repeat bg-cover bg-[url('/layout/menu-bg.png')]":
                  true,
                "md:flex md:items-start md:justify-center md:py-10": !isMobile,
                "pl-10 pt-6 pr-14": isMobile,
              })}
              style={{
                height: isMobile ? "calc(100vh - 60px)" : "fit-content",
              }}
            >
              {isMobile ? (
                <>
                  {menus.map((menu, index) => (
                    <Disclosure key={index} as={"div"}>
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={
                              "flex items-center justify-between w-full text-xl h-16"
                            }
                          >
                            <span className="mr-[20%]">{menu.title}</span>
                            <ChevronUpIcon
                              className={classNames({
                                "w-7 h-7 transition-transform": true,
                                "rotate-90": !open,
                                "rotate-180 transform": open,
                              })}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel
                            as="ul"
                            className={"pl-5 text-base"}
                          >
                            {menu.children.map((m, index) => (
                              <li key={index}>
                                <Link
                                  href={m.link ?? "/"}
                                  className={"leading-10"}
                                >
                                  {m.title}
                                </Link>
                              </li>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </>
              ) : (
                <>
                  {menus.map((menu, index) => (
                    <div key={index} className="flex flex-1 justify-center">
                      <p className="font-medium text-lg">{menu.title}</p>
                      <ul
                        className={classNames({
                          "ml-3 pl-[14px] border-l border-white flex flex-col flex-wrap":
                            true,
                          "h-[84px]": index === 1,
                        })}
                      >
                        {menu.children.map((m, index) => (
                          <li
                            key={index}
                            className={classNames({ "mr-2": index === 1 })}
                          >
                            <Link
                              href={m.link ?? "/"}
                              className={"hover:text-primary leading-7"}
                            >
                              {m.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </>
              )}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

export default Index;
