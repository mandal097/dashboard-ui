import React from "react";
import Icon from "./Icon";
import UserBadge from "./UserBadge";

type CardProps = {
  bgCol: string;
  textCol: string;
  headTxt: string;
  info: string;
  progress: string;
  count: number;
};

const Card = ({ bgCol, textCol, headTxt, info, progress ,count}: CardProps) => {
  const divArray = new Array(count).fill(null);
  return (
    <div className="bg-[#211A75] min-h-fit w-full rounded-xl p-6">
      {/* head */}
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-3 h-3 rounded-full ${bgCol}`} />
        <p className={`text-sm font-semibold ${textCol}`}>{headTxt}</p>
        <div className="flex items-start h-fit ml-auto rotate-90">
          <Icon img="icVert.png" w="w-6" h="h-auto" />
        </div>
      </div>
      {/* info */}
      <p className="text-white">{info}</p>
      {/* progress bar */}
      <div className="flex items-center gap-5 ml-auto my-6">
        <div className="relative h-[6px] w-full bg-[var(--dark4)] overflow-hidden rounded-md">
          <div
            className={`absolute top-0 left-0 h-full ${progress} ${bgCol}`}></div>
        </div>
      </div>
      {/* user badges */}
      <div className="flex items-center justify-between">
        <div className="flex items-center pl-3">
          {divArray?.map((_, index) => (
            <UserBadge key={index} border="border-[#211A75]" />
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Icon img="clock1.png" w="w-4" h="h-4" />
          <p className="text-[var(--gray1)] text-sm font-semibold">
            Due in 4 days
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
