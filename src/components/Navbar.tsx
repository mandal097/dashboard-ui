"use client";
import React from "react";
import { AiOutlineMenu, AiOutlineCaretDown } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import Icon from "./Icon";

const Navbar = ({
  setSideShow,
}: {
  setSideShow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [show, setShow] = React.useState(false);
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const match = window.matchMedia("(max-width: 1024px)").matches;
    if (!match) {
      setShow(true);
    }
  }, []);

  React.useEffect(() => {
    const match = window.matchMedia("(max-width: 1024px)").matches;
    const checkClick = (e: MouseEvent) => {
      if (match && ref.current && !ref.current.contains(e.target as Node)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", checkClick);
    return () => {
      document.removeEventListener("mousedown", checkClick);
    };
  }, [setShow]);

  return (
    <div className="bg-[var(--dark2)] w-full h-20 flex items-center px-3 3xl:px-12 gap-6 lg:gap-4 lg:justify-between">
      {/* width for sidebar*/}
      {/* <div className="flex min-w-56 items-center text-white gap-3" /> */}

      <div
        onClick={() => setSideShow(true)}
        className="lg:hidden text-[var(--iris-col)] text-2xl">
        <AiOutlineMenu />
      </div>

      {/* search bar */}
      <div className="w-[50%] lg:w-fit flex items-center h-12 gap-4 bg-[#211A75] py-2 px-4 rounded-full ">
        <div className="text-[var(--iris-col)] text-xl rotate-90">
          <BiSearch />
        </div>

        <input
          type="text"
          placeholder="Search here"
          className="bg-transparent outline-none border-none text-white placeholder:text-sm h-fit w-full text-xs"
        />
      </div>

      {/* other menus */}
      <span className="hidden lg:block uppercase underline text-[var(--primary)] text-xs font-bold cursor-pointer">
        other menus
      </span>

      <div
        className={`${
          show ? "flex" : "hidden"
        } absolute top-[80px] right-4 rounded-xl bg-[var(--dark2)] p-5 lg:relative lg:top-0 lg:right-0 flex-col lg:flex-row lg:bg-transparent gap-4 items-center`}
        ref={ref}>
        <div className="flex flex-col gap-3 lg:hidden">
          <p className="text-white text-sm font-bold">Instructor Day</p>
          <span className="text-[var(--iris-col)] text-xs">Super Admin</span>
        </div>
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

        {/* country */}

        <div className="h-12 w-fit px-4 ml-8 py-2 bg-[#211A75] flex items-center rounded-full text-[var(--primary)] gap-3 cursor-pointer">
          <Icon img="united-states.png" w="w-6" h="h-6" />
          <span className="uppercase text-xs font-semibold text-white">
            english
          </span>
          <AiOutlineCaretDown />
        </div>
      </div>

      {/* line */}
      <div className="w-[1px] h-12 bg-[var(--dark4)]" />

      {/* profile  */}
      <div
        onClick={() => setShow(true)}
        className="h-12 w-fit px-4 py-2 flex items-center text-[var(--primary)] gap-3 cursor-pointer ml-auto lg:m-0">
        <div className="h-12 w-12 bg-[#C4C4C4] rounded-lg" />
        <div className="hidden lg:flex flex-col gap-3">
          <p className="text-white text-sm font-bold">Instructor Day</p>
          <span className="text-[var(--iris-col)] text-xs">Super Admin</span>
        </div>
        <AiOutlineCaretDown />
      </div>
    </div>
  );
};

export default Navbar;
