"use client";

import Image from "next/image";

const SidebarImage = ({ imgSource, maxWidth }) => {
  return (
    <div className="border border-[#ccc] bg-[#f5f5f5] p-[15px] shadow-[1px_1px_3px_1px_#ccc]">
      <Image
        alt=""
        src={imgSource}
        width={maxWidth || 400}
        height={maxWidth || 400}
        className="mx-auto h-auto max-w-full"
      />
    </div>
  );
};

export default SidebarImage;
