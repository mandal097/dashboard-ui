import Lists from "@/components/Lists";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Title from "@/components/Title";
import React from "react";

const Home = () => {
  return (
    <div className="flex">
      <div className="w-fit top-0 h-auto">
        <Sidebar />
      </div>
      <div className="flex w-full flex-col">
        <Navbar />
        <div className="p-6">
          <Title />
          <Lists />
        </div>
      </div>
    </div>
  );
};

export default Home;
