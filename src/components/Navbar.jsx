import navLinks from "@/utils/navLinks";
import Link from "next/link";
import { HiChevronDown } from "react-icons/hi";
import { IoHome } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="flex items-center gap-1 border-b">
      <Link
        href="/"
        className="px-2 py-2.5 text-3xl transition-all duration-500 hover:bg-black hover:text-white"
      >
        <IoHome />
      </Link>
      {navLinks.map((navLink, index) => {
        return (
          <div className="group relative">
            <Link
              href={navLink.path}
              key={index}
              className={`px-[7px] py-2.5 transition-all duration-300 hover:text-white text-${navLink.color} hover:bg-${navLink.color} flex items-center gap-1`}
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
                    <div className="group/subLink relative">
                      <Link
                        href={subLink.path}
                        key={index}
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
                                key={index}
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
  );
};

export default Navbar;
