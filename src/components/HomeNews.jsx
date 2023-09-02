"use client";

import { homeNotices } from "@/data/notices";
import Link from "next/link";
import { BiSolidRightArrow } from "react-icons/bi";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HomeNews = () => {
  return (
    <section className="my-5 grid grid-cols-1 items-center justify-items-center gap-x-10 gap-y-3 bg-[#E6E7E8] px-4 py-2 md:grid-cols-[auto_1fr_auto]">
      <h3 className="text-dark text-lg font-bold">News:</h3>
      <Swiper
        direction="vertical"
        speed={1000}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="h-16 md:h-14"
      >
        {homeNotices.map((notice) => (
          <SwiperSlide
            key={notice.id}
            className="!flex flex-col justify-center"
          >
            <Link
              href={`/news/${notice.id}`}
              className="flex items-start gap-1"
            >
              <BiSolidRightArrow className="mt-2 shrink-0 text-[9px] text-primary" />
              <span className="text-black transition-all duration-300 hover:text-primary">
                {notice.title}
              </span>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <Link
        href="/news"
        className="text-dark rounded-md bg-[#ddd] px-3 py-1 font-bold"
      >
        All
      </Link>
    </section>
  );
};

export default HomeNews;
