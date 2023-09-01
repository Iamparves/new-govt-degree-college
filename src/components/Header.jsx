"use client";

import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  "/header-slider/slide-1.jpg",
  "/header-slider/slide-2.jpg",
  "/header-slider/slide-3.jpg",
  "/header-slider/slide-4.jpg",
  "/header-slider/slide-5.jpg",
  "/header-slider/slide-6.jpg",
  "/header-slider/slide-7.jpg",
  "/header-slider/slide-8.jpg",
  "/header-slider/slide-9.jpg",
  "/header-slider/slide-10.jpg",
];

const Header = () => {
  return (
    <header className="header-slider border-t-[10px] border-[#683091]">
      <div className="relative border-t-[5px] border-[#8BC643]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            prevEl: ".header-slider-prev",
            nextEl: ".header-slider-next",
          }}
          speed={1000}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[50vw] w-full sm:h-[300px] md:h-[500px]">
                <Image
                  src={slide}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1200px) 960px"
                  alt=""
                />
                <div className="absolute left-0 top-0 h-full w-full bg-black/30"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute left-0 top-1/2 z-[99] flex h-[200px] w-full -translate-y-1/2 items-center justify-between p-2">
          <button className="header-slider-prev shrink-0 p-2 text-2xl text-white">
            <FaChevronLeft />
          </button>
          <div className="relative hidden h-full w-[85%] md:block">
            <Image
              alt="Mountains"
              src="/header-slider/logo.png"
              fill
              className="object-contain"
            />
          </div>
          <button className="header-slider-next shrink-0 p-2 text-2xl text-white">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
