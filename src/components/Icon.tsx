/* eslint-disable @next/next/no-img-element */
import React from "react";

const Icon = ({ img, w, h }: { img: string; w: string; h: string }) => {
  return (
    <div
      className={`${w} ${h} flex items-center justify-center cursor-pointer hover:scale-105`}>
      <img
        src={`/assets/${img}`}
        alt="icons"
        className="object-fill w-full h-full"
      />
    </div>
  );
};

export default Icon;
