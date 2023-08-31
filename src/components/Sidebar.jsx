import { importanLinks, quickLinks, sidebarMenu } from "@/utils/sidebarLinks";
import Link from "next/link";
import { BiSolidRightArrow } from "react-icons/bi";

const Sidebar = () => {
  return (
    <aside className="space-y-3">
      <div className="">
        <p className="bg-primary p-1 text-center text-white">
          Message from Principal
        </p>
        <div className="border"></div>
      </div>
      <div className="">
        <p className="bg-primary p-1 text-center text-white">Important Links</p>
        <div className="text-darkBlue space-y-2 border p-2.5">
          {importanLinks.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className="group flex items-center gap-2 leading-tight transition-all duration-300 hover:text-red-500"
            >
              <BiSolidRightArrow className="text-primary shrink-0 text-xs transition-all duration-300 group-hover:text-red-500" />
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="">
        <p className="bg-primary p-1 text-center text-white">Quick Links</p>
        <div className="text-darkBlue space-y-2 border p-2.5">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className="group flex items-center gap-2 leading-tight transition-all duration-300 hover:text-red-500"
            >
              <BiSolidRightArrow className="text-primary shrink-0 text-xs transition-all duration-300 group-hover:text-red-500" />
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="">
        <p className="bg-primary p-1 text-center text-white">Sidebar Menu</p>
        <div className="text-darkBlue space-y-2 border p-2.5">
          {sidebarMenu.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className="group flex items-center gap-2 leading-tight transition-all duration-300 hover:text-red-500"
            >
              <BiSolidRightArrow className="text-primary shrink-0 text-xs transition-all duration-300 group-hover:text-red-500" />
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
