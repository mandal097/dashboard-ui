import React from "react";
import { AiOutlineMenu, AiOutlineRight, AiOutlineDown } from "react-icons/ai";

import Icon from "./Icon";

const SidebarItem = ({ img }: { img: string }) => {
  return (
    <div className="flex items-center gap-2 h-8 w-60 bg-red-300">
      <Icon img={img} w="w-5" h="h-5" />
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="w-60 h-screen sticky bg-[var(--dark2)] top-0 left-0 px-8 overflow-hidden overflow-y-scroll shadow-xl shadow-[var(--dark1)]">
      {/* logo */}
      <div className="flex h-20 w-60 items-center bg-[var(--dark2)] justify-center- text-white gap-6 cursor-pointer sticky top-0">
        <p className="text-lg">weframeteh</p>
        <div className="text-[var(--iris-col)] text-lg">
          <AiOutlineMenu />
        </div>
      </div>
      {/* main menu */}
      <div className="flex flex-col items-start">
        <span className="text-xs font-bold text-[#C7C7C7] mb-6">MAIN MENU</span>

        <div className="flex items-center gap-2 h-10 w-full cursor-pointer">
          <Icon img="dashboard.png" w="w-5" h="h-5" />
          <span className="text-xs text-[#464366]">Dashboard</span>
        </div>

        <div className="flex items-center gap-2 h-10 w-full cursor-pointer">
          <Icon img="email.png" w="w-5" h="h-5" />
          <span className="text-xs text-[#464366] mr-auto">Email</span>
          <div className="flex items-center justify-center bg-[var(--shadow-blue)] w-5 h-5 rounded-full">
            <span className="text-xs font-bold text-white">17</span>
          </div>
          <p className="text-[var(--iris-col)] text-xs">
            <AiOutlineDown />
          </p>
        </div>

        <div className="flex items-center gap-2 h-10 w-full cursor-pointer">
          <Icon img="comment.png" w="w-5" h="h-5" />
          <span className="text-xs text-[var(--iris-col)]">Chat</span>
        </div>

        <div className="flex items-center gap-2 h-10 w-full cursor-pointer relative">
          <Icon img="thumbnail.png" w="w-5" h="h-5" />
          <span className="text-xs text-[#6418C3]">Kanban</span>
          <p className="text-[var(--iris-col)] text-xs ml-auto">
            <AiOutlineRight />
          </p>
          <div className="absolute h-10 w-1 rounded-full bg-[#6418C3] top-0 -right-8"></div>
        </div>

        <div className="flex items-center gap-2 h-10 w-full cursor-pointer">
          <Icon img="contact.png" w="w-5" h="h-5" />
          <span className="text-xs text-[var(--iris-col)]">Contact</span>
          <div className="flex items-center justify-center bg-[var(--accent02)] w-fit h-5 p-2 rounded-full ml-auto">
            <span className="text-xs  font-bold text-white">New</span>
          </div>
        </div>

        <div className="flex items-center gap-2 h-10 w-full cursor-pointer">
          <Icon img="calendar.png" w="w-5" h="h-5" />
          <span className="text-xs text-[var(--iris-col)]">Calendar</span>
        </div>

        <div className="flex items-center gap-2 h-10 w-full cursor-pointer">
          <Icon img="Video_lesson_2_1.png" w="w-5" h="h-5" />
          <span className="text-xs text-[var(--iris-col)]">Courses</span>
          <p className="text-[var(--iris-col)] text-xs ml-auto">
            <AiOutlineRight />
          </p>
        </div>

        <div className="flex items-center gap-2 h-10 w-full cursor-pointer">
          <Icon img="online-shopping.png" w="w-5" h="h-5" />
          <span className="text-xs text-[var(--iris-col)]">Shop</span>
        </div>

        <div className="flex items-center gap-2 h-10 w-full cursor-pointer">
          <Icon img="invoice.png" w="w-5" h="h-5" />
          <span className="text-xs text-[var(--iris-col)]">Invoices</span>
          <p className="text-[var(--iris-col)] text-xs ml-auto">
            <AiOutlineRight />
          </p>
        </div>

        <div className="flex items-center gap-2 h-10 w-full cursor-pointer">
          <Icon img="setting.png" w="w-5" h="h-5" />
          <span className="text-xs text-[var(--iris-col)]">Settings</span>
        </div>

        {/* square box */}
        <div className="w-full h-36 bg-gradient-to-bl from-[#076ECD] to-[#1CBBFF] my-12 mb-16 rounded-2xl relative overflow-hidden p-4 z-50">
          <div className="absolute w-24 h-24 rounded-tl-[40px] rounded-bl-[30px] -bottom-8 -right-7  bg-gradient-to-bl from-[#A0F9FF] to-[#A0F9FF] z-0" />
          <Icon img="dots.png" w="w-6" h="h-7" />
          <p className="text-white text-sm font-semibold my-2">Increase your work <br /> with Kanban  </p>
          <Icon img="right-arrow.png" w="w-5" h="h-2" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
