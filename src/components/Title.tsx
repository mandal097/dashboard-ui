/* eslint-disable @next/next/no-img-element */
import React from "react";
import Icon from "./Icon";
import UserBadge from "./UserBadge";

const Title = () => {
  return (
    <div className="bg-[var(--dark2)] h-auto w-full p-4 rounded-xl grid grid-cols-2">
      {/* left part */}
      <div className="flex items-start gap-3 h-fit">
        <div className="flex items-start h-auto pt-1">
          <Icon img="back-arrow.png" w="w-4" h="h-4" />
        </div>
        <div className="flex flex-col justify-start items-start">
          <h2 className="text-white">School November Tasks</h2>
          <p className="text-[var(--gray1)] text-xs mt-2">
            Created by Instructor Day on November 31, 2022
          </p>
        </div>
      </div>

      {/* right part */}
      <div className="flex h-fit justify-end items-center gap-3 ">
        <div className="flex flex-col justify-end items-end">
          <h2 className="text-white text-sm">Centered Martial Arts</h2>
          <p className="text-[var(--gray1)] text-xs">Sunnyvale, Ca</p>
        </div>
        <div className="h-14 w-14 flex items-center justify-center">
          <img
            src="/assets/companyLogo.png"
            alt="logo_company"
            className="w-full h-full object-cover"
          />
        </div>
        {/* vert */}
        <div className="flex items-start h-fit ml-1">
          <Icon img="icVert.png" w="w-5" h="h-5" />
        </div>
      </div>

      {/* bottom */}
      <div className="col-span-4 flex items-center gap-4 w-full mt-3">
        {/* user badges */}
        <div className="flex items-center pl-7">
          <UserBadge border="border-[var(--dark)]" />
          <UserBadge border="border-[var(--dark)]" />
          <UserBadge border="border-[var(--dark)]" />
          <UserBadge border="border-[var(--dark)]" />
          <div
            className={`w-10 h-10 rounded-full -ml-3  bg-[var(--accent02)] border-2 border-[var(--dark1)] text-white text-xs flex items-center justify-center cursor-pointer hover:scale-105`}>
            5+
          </div>
        </div>
        {/* buttons */}
        <div className="flex  p-4 gap-4">
          <button className="btn bg-[var(--primary)] border-none- hover:bg-transparent border-[1px] border-[var(--primary)]">
            <img src="/assets/add-friend.png" alt="icon" className="h-4 w-4" />
            <span className="text-white text-xs">Invite People</span>
          </button>
          <button className="btn bg-transparent hover:bg-[var(--iris-col)] ">
            <span className="text-white text-xs">Private</span>
          </button>
          <button className="btn bg-[var(--iris-col)] hover:bg-transparent">
            <span className="text-white text-xs">Edit</span>
          </button>
          <button className="btn bg-transparent hover:bg-[var(--primary)]">
            <img src="/assets/chat_.png" alt="icon" className="h-4 w-4" />
            <span className="text-white text-xs">Invite People</span>
          </button>
        </div>

        {/* progress bar */}
        <div className="flex items-center gap-5 ml-auto">
          <span className="text-white text-sm">Total Progress 60%</span>
          <div className="relative h-3 w-48 bg-[var(--dark4)] overflow-hidden rounded-md">
            <div className="absolute top-0 left-0 h-full w-[60%] bg-[var(--primary)]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
