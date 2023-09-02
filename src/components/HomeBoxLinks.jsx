import Link from "next/link";
import { BiSolidRightArrow } from "react-icons/bi";

import homeBoxLinks from "@/data/homeBoxLinks";
import Image from "next/image";

const HomeBoxLinks = () => {
  return (
    <section>
      <div className="grid grid-cols-1 gap-x-7 gap-y-5 md:grid-cols-2">
        {homeBoxLinks.map((boxLinks, index) => (
          <div
            key={index}
            className="min-h-[180px] border border-[#ccc] bg-[#f5f5f5] p-2.5 shadow-md"
          >
            <h3 className="mb-3 text-xl">{boxLinks.name}</h3>
            <div className="grid grid-cols-[3fr_7fr] gap-2">
              <div>
                <Image
                  src={boxLinks.image}
                  width={110}
                  height={100}
                  alt={boxLinks.name}
                />
              </div>
              <div className="space-y-1.5">
                {boxLinks.links?.map((boxLink, index) => (
                  <>
                    <Link
                      key={index}
                      href={boxLink.url}
                      className="flex items-center gap-1 text-[15px] leading-tight transition-all duration-300 hover:text-black/60 hover:underline"
                    >
                      <BiSolidRightArrow className="shrink-0 text-[8px] text-[#29c944]" />
                      {boxLink.title}
                    </Link>
                    {boxLink.childrens?.length > 0 && (
                      <div className="space-y-1.5 pl-2">
                        {boxLink.childrens.map((boxChildLink, index) => (
                          <Link
                            key={index}
                            href={boxChildLink.url}
                            className="flex items-center gap-1 text-[13px] leading-tight transition-all duration-300 hover:text-black/60 hover:underline"
                          >
                            <BiSolidRightArrow className="shrink-0 text-[8px] text-[#29c944]" />
                            {boxChildLink.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeBoxLinks;
