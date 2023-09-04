"use client";

import navLinks from "@/data/navLinks";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { IoHome } from "react-icons/io5";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const toggleMenu = () => setIsMenuActive(!isMenuActive);

  return (
    <div>
      <div className="flex items-center bg-[#460303] p-3 md:hidden">
        <button
          className={`mobile__menu-toggle flex shrink-0 cursor-pointer flex-col gap-2 ${
            isMenuActive ? "active" : ""
          }`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <Link href="/" className="relative mx-auto h-12 w-[75%]">
          <Image
            src="/header-slider/logo.png"
            fill
            sizes="(max-width: 768px) 300px"
            className="object-contain"
            alt=""
          />
        </Link>
      </div>
      <div
        className={`grid overflow-hidden border-b-[10px] border-[#460303] p-3 transition-all duration-500 md:block md:overflow-visible md:border-b-0 md:p-0 ${
          isMenuActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <nav
          className={`flex max-h-[510px] min-h-0 flex-col gap-1 md:flex md:flex-row md:flex-wrap md:items-center md:border-b`}
        >
          <Link
            href="/"
            className="px-2 py-2.5 text-3xl transition-all duration-500 hover:bg-black hover:text-white"
          >
            <IoHome />
          </Link>
          {navLinks.map((navLink) => {
            return (
              <div
                className="group relative md:text-sm lg:text-base"
                key={navLink.title}
              >
                <Link
                  href={navLink.path}
                  className={`px-[7px] py-2.5 transition-all duration-300 hover:text-white text-${navLink.color} hover:bg-${navLink.color} flex items-center gap-1 `}
                >
                  <span>{navLink.title}</span>
                  {navLink.childrens && (
                    <span>
                      <HiChevronDown />
                    </span>
                  )}
                </Link>
                {navLink.childrens && (
                  <div
                    className={`invisible absolute left-0 top-[45px] translate-y-10 opacity-0 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 bg-${navLink.color} z-10 w-52 divide-y divide-gray-200/30 transition-all duration-300`}
                  >
                    {navLink.childrens.map((subLink) => {
                      return (
                        <div
                          className="group/subLink relative"
                          key={subLink.title}
                        >
                          <Link
                            href={subLink.path}
                            className={`flex items-center justify-between gap-1 px-4 py-3 text-white transition-all duration-300 hover:bg-black/60`}
                          >
                            <span>{subLink.title}</span>
                            {subLink.childrens && (
                              <span>
                                <HiChevronDown />
                              </span>
                            )}
                          </Link>
                          {subLink.childrens && (
                            <div
                              className={`invisible absolute left-full top-0 z-10 flex w-52 translate-y-10 flex-col divide-y divide-gray-200/30 bg-black/50 opacity-0 transition-all duration-300 group-hover/subLink:visible group-hover/subLink:translate-y-0 group-hover/subLink:opacity-100`}
                            >
                              {subLink.childrens.map((subChildrenLink) => {
                                return (
                                  <Link
                                    href={subChildrenLink.path}
                                    key={subChildrenLink.title}
                                    className={`px-4 py-3 text-white transition-all duration-300 hover:bg-black/60`}
                                  >
                                    <span>{subChildrenLink.title}</span>
                                  </Link>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
