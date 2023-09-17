import React from "react";
import { AiOutlineMenu, AiOutlineCaretDown } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import Icon from "./Icon";

const Navbar = () => {
  return (
    <div className="bg-[var(--dark2)] w-full h-20 flex items-center px-3 3xl:px-12 gap-4 justify-between">
      {/* width for sidebar*/}
      {/* <div className="flex min-w-56 items-center text-white gap-3" /> */}

      {/* search bar */}
      <div className="flex items-center h-12 gap-4 bg-[#211A75] py-2 px-4 rounded-full ">
        <div className="text-[var(--iris-col)] text-xl rotate-90">
          <BiSearch />
        </div>

        <input
          type="text"
          placeholder="Search here"
          className="bg-transparent outline-none border-none text-white placeholder:text-sm h-fit"
        />
      </div>

      {/* other menus */}
      <span className=" uppercase underline text-[var(--primary)] text-xs font-bold cursor-pointer">
        other menus
      </span>

      <div className="flex items-center gap-3 h-10">
        <div className="flex items-center justify-center relative h-10 w-10">
          <Icon img="bell.png" w="w-6" h="h-6" />
          <div className="flex items-center justify-center bg-[var(--shadow-blue)] absolute top-0 right-0 w-5 h-5 rounded-full">
            <span className="text-xs  font-bold text-[var(--dark1)]">12</span>
          </div>
        </div>

        <div className="flex items-center justify-center relative h-10 w-10">
          <Icon img="Video_lesson_2_2.png" w="w-6" h="h-6" />
          <div className="flex items-center justify-center bg-[var(--shadow-blue)] absolute top-0 right-0 w-5 h-5 rounded-full">
            <span className="text-xs  font-bold text-[var(--dark1)]">5</span>
          </div>
        </div>

        <div className="flex items-center justify-center relative h-10 w-10">
          <Icon img="checkbox.png" w="w-6" h="h-6" />
          <div className="flex items-center justify-center bg-[var(--shadow-blue)] absolute top-0 right-0 w-5 h-5 rounded-full">
            <span className="text-xs  font-bold text-[var(--dark1)]">2</span>
          </div>
        </div>

        <div className="flex items-center justify-center relative h-10 w-10">
          <Icon img="office.png" w="w-6" h="h-6" />
          <div className="flex items-center justify-center bg-[var(--accent02)] absolute top-0 right-0 w-5 h-5 rounded-full">
            <span className="text-xs  font-bold text-[var(--dark1)]">!</span>
          </div>
        </div>
      </div>

      {/* coundtry */}

      <div className="h-12 w-fit px-4 py-2 bg-[#211A75] flex items-center rounded-full text-[var(--primary)] gap-3 cursor-pointer">
        <Icon img="united-states.png" w="w-6" h="h-6" />
        <span className="uppercase text-xs font-semibold text-white">
          english
        </span>
        <AiOutlineCaretDown />
      </div>

      {/* line */}
      <div className="w-[1px] h-12 bg-[var(--dark4)]" />

      {/* profile  */}
      <div className="h-12 w-fit px-4 py-2 flex items-center text-[var(--primary)] gap-3 cursor-pointer">
        <div className="h-12 w-12 bg-[#C4C4C4] rounded-lg" />
        <div className="flex flex-col gap-3">
          <p className="text-white text-sm font-bold">Instructor Day</p>
          <span className="text-[var(--iris-col)] text-xs">Super Admin</span>
        </div>
        <AiOutlineCaretDown />
      </div>
    </div>
  );
};

export default Navbar;
