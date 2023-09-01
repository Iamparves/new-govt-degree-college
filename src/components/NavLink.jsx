"use client";

import Link from "next/link";
import { useState } from "react";
import { HiChevronDown, HiChevronRight } from "react-icons/hi";

const NavListLink = ({ navLink }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  return (
    <div className="group relative md:text-sm lg:text-base" key={navLink.title}>
      <Link
        href={navLink.path}
        className={`flex items-center justify-between gap-1 px-[7px] py-1.5 transition-all duration-300 hover:text-white md:justify-start md:py-2.5 text-${
          navLink.color
        } hover:bg-${navLink.color} ${
          isActive ? "bg-" + navLink.color + " text-white" : ""
        }`}
      >
        <span>{navLink.title}</span>
        {navLink.childrens && (
          <>
            <span className="hidden md:block">
              <HiChevronDown />
            </span>
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-md border-2 border-navOrange/50 bg-white text-3xl text-navOrange md:hidden ${
                isActive ? "rotate-90 rounded-xl" : ""
              } transition-all duration-300`}
              onClick={toggleActive}
            >
              <HiChevronRight />
            </span>
          </>
        )}
      </Link>
      {navLink.childrens && (
        <div
          className={`grid overflow-hidden transition-all duration-300 md:block md:overflow-visible ${
            isActive ? "mt-1 grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div
            className={`left-0 top-[45px] z-10 ml-5 min-h-0 divide-y divide-gray-200/30 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 md:invisible md:absolute md:ml-0 md:w-52 md:translate-y-10 md:opacity-0 bg-${navLink.color}`}
          >
            {navLink.childrens.map((subLink) => {
              return (
                <div className="group/subLink relative" key={subLink.title}>
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
        </div>
      )}
    </div>
  );
};

export default NavListLink;
