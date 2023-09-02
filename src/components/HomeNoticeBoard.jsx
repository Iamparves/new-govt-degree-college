import { homeNotices } from "@/data/notices";
import Link from "next/link";
import { BiSolidRightArrow } from "react-icons/bi";

const HomeNoticeBoard = () => {
  return (
    <section className="mt-4 bg-gradient-to-b from-white to-[#ebebeb]">
      <div className="h-full w-full bg-[url(/bg-notice-board.png)] bg-no-repeat pl-[100px]">
        <div className="py-8 pr-4">
          <h2 className="mb-2 text-2xl font-bold text-dark">Notice Board</h2>
          <div className="mb-2 space-y-2">
            {homeNotices.map((notice, index) => (
              <Link
                key={index}
                href={`/notices/${notice.id}`}
                className="group flex items-center gap-2 leading-tight transition-all duration-300 hover:text-red-500"
              >
                <BiSolidRightArrow className="shrink-0 text-[9px] text-primary transition-all duration-300 group-hover:text-red-500" />
                {notice.title}
              </Link>
            ))}
          </div>
          <div className="text-right">
            <Link
              href="/notices"
              className="inline-block rounded-md bg-[#ddd] px-3 py-1.5 font-bold text-dark"
            >
              View All
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeNoticeBoard;
