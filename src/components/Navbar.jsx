"use client";

import navLinks from "@/data/navLinks";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoHome } from "react-icons/io5";
import NavListLink from "./NavListLink";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => setIsMenuActive(!isMenuActive);

  useEffect(() => {
    setIsMenuActive(false);
  }, [pathname]);

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
        className={`grid overflow-hidden  border-[#460303] transition-all duration-500 md:block md:overflow-visible md:border-b-0 ${
          isMenuActive
            ? "grid-rows-[1fr] border-b-[10px]"
            : "grid-rows-[0fr] border-b-0"
        }`}
      >
        <nav
          className={`flex max-h-[420px] min-h-0 flex-col gap-1 overflow-y-auto overflow-x-hidden md:flex md:max-w-none md:flex-row md:flex-wrap md:items-center md:overflow-x-visible md:overflow-y-visible md:border-b `}
        >
          <Link
            href="/"
            className="px-2 py-2.5 text-3xl transition-all duration-500 hover:bg-black hover:text-white"
          >
            <IoHome />
          </Link>
          {navLinks.map((navLink) => {
            return <NavListLink navLink={navLink} key={navLink.title} />;
          })}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
