import Link from "next/link";

const HomeNoticeBoard = () => {
  return (
    <section className="h-80 bg-gradient-to-b from-white to-[#ebebeb]">
      <div className="h-full w-full bg-[url(/bg-notice-board.png)] bg-no-repeat pl-[100px]">
        <div className="py-8 pr-4">
          <h2 className="text-dark mb-2 text-2xl font-bold">Notice Board</h2>
          <div className="text-right">
            <Link
              href="/notices"
              className="text-dark inline-block rounded-md bg-[#ddd] px-3 py-1.5 font-bold"
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
