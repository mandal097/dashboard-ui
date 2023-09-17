"use client";
import Lists from "@/components/Lists";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Title from "@/components/Title";
import React from "react";

const Home = () => {
  const [sideShow, setSideShow] = React.useState<boolean>(false);
  return (
    <div className="flex overflow-hidden-">
      <div className="w-fit top-0 h-auto">
        <Sidebar sideShow={sideShow} setSideShow={setSideShow} />
      </div>
      <div className="flex w-full flex-col">
        <Navbar setSideShow={setSideShow} />
        <div className="p-6">
          <Title />
          <Lists />
        </div>
      </div>
    </div>
  );
};

export default Home;
