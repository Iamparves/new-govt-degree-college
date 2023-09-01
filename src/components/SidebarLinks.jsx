import Link from "next/link";
import { BiSolidRightArrow } from "react-icons/bi";

const SidebarLinks = ({ links }) => {
  return (
    <>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.link}
          className="group flex items-center gap-2 leading-tight transition-all duration-300 hover:text-red-500"
          target="_blank"
        >
          <BiSolidRightArrow className="shrink-0 text-[9px] text-[#29c944] transition-all duration-300 group-hover:text-red-500" />
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default SidebarLinks;
