"use client";

import Image from "next/image";
import { useState } from "react";
import { MdOutlineZoomOutMap } from "react-icons/md";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const photos = [
  {
    src: "/gallery/gallery-1.jpg",
    width: 1200,
    height: 800,
  },
  {
    src: "/gallery/gallery-2.jpg",
    width: 1200,
    height: 800,
  },
  {
    src: "/gallery/gallery-3.jpg",
    width: 1200,
    height: 800,
  },
  {
    src: "/gallery/gallery-4.jpeg",
    width: 1200,
    height: 881,
  },
];

const HomeGallery = () => {
  const [index, setIndex] = useState(-1);

  return (
    <section className="mt-7">
      <h3 className="mb-5 text-3xl font-bold text-dark">Photo Gallery</h3>
      <div className="grid grid-cols-2 gap-1 md:grid-cols-4">
        {photos.map((photo, i) => (
          <div key={i} className="group relative" onClick={() => setIndex(i)}>
            <Image
              src={photo.src}
              width={photo.width}
              height={photo.height}
              className="h-full max-w-full cursor-pointer object-cover"
              alt=""
            />
            <div className="absolute left-0 top-0 flex h-full w-full cursor-pointer items-center justify-center bg-black/50 text-2xl text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <MdOutlineZoomOutMap />
            </div>
          </div>
        ))}
      </div>
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails]}
      />
    </section>
  );
};

export default HomeGallery;
