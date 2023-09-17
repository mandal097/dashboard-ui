import React from "react";

const UserBadge = ({ border }: { border: string }) => {
  return (
    <div
      className={`w-10 h-10 rounded-full -ml-3  bg-[#C4C4C4] border-2 ${border} cursor-pointer hover:scale-105`}></div>
  );
};

export default UserBadge;
