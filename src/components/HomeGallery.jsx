"use client";

import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Image from "next/image";
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
          <div key={i} className="">
            <Image
              src={photo.src}
              width={photo.width}
              height={photo.height}
              className="h-full max-w-full cursor-pointer object-cover"
              alt=""
              onClick={() => setIndex(i)}
            />
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
