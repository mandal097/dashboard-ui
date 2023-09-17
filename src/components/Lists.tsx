import React from "react";
import Card from "./Card";

const ListHead = ({
  head,
  bgCol,
  textCol,
}: {
  head: string;
  bgCol: string;
  textCol: string;
}) => {
  return (
    <div className="flex items-center justify-between mb-4 px-4">
      <span className="text-white font-semibold">{head}</span>
      <div
        className={`w-10 h-10 rounded-lg ${bgCol} flex items-center justify-center text-xl ${textCol}  font-bold cursor-pointer`}>
        +
      </div>
    </div>
  );
};

const Lists = () => {
  return (
    <div className="w-full p-4 rounded-xl grid md:grid-cols-2 lg:grid-cols-3 mt-6 gap-4">
      {/* todo list */}
      <div className="h-auto flex flex-col gap-4 mt-6">
        <ListHead
          head="To-Do List(24)"
          bgCol="bg-[var(--primary)]"
          textCol="text-white"
        />
        <Card
          bgCol="bg-[var(--yellow)]"
          textCol="text-[var(--yellow)]"
          headTxt="Important"
          info="Create sign up sheet for holiday student/parent conferences."
          progress="w-[30%]"
          count={4}
        />

        <Card
          bgCol="bg-[var(--accent02)]"
          textCol="text-[var(--accent02)]"
          headTxt="Instructor Meeting"
          info="Plan holiday demonstration program. Create outline."
          progress="w-[45%]"
          count={3}
        />
        <Card
          bgCol="bg-[var(--green)]"
          textCol="text-[var(--green)]"
          headTxt="Database"
          info="Determine how many boards need to be ordered for testing and demo."
          progress="w-[45%]"
          count={2}
        />
      </div>

      {/* In Progress */}
      <div className="h-auto flex flex-col gap-4 mt-6">
        <ListHead
          head="In Progress (2)"
          bgCol="bg-[#211A75]"
          textCol="text-[var(--primary)]"
        />
        <Card
          bgCol="bg-[var(--accent01)]"
          textCol="text-[var(--accent01)]"
          headTxt="Video"
          info="Create sparring tutorial video for the weekly class."
          progress="w-[85%]"
          count={3}
        />
        <Card
          bgCol="bg-[var(--red)]"
          textCol="text-[var(--red)]"
          headTxt="BUGS FIXING"
          info="Payment gateway needs reauthorization."
          progress="w-[85%]"
          count={4}
        />
      </div>

      {/* Done  */}
      <div className="h-auto flex flex-col gap-4 mt-6">
        <ListHead
          head="Done (3)"
          bgCol="bg-[#211A75]"
          textCol="text-[var(--primary)]"
        />
        <Card
          bgCol="bg-[var(--red)]"
          textCol="text-[var(--red)]"
          headTxt="BUGS FIXING"
          info="Action Button needed for Google Maps visits."
          progress="w-[99%]"
          count={4}
        />
        <Card
          bgCol="bg-[var(--green)]"
          textCol="text-[var(--green)]"
          headTxt="Database"
          info="Update new instructor photos."
          progress="w-[100%]"
          count={4}
        />
        <Card
          bgCol="bg-[var(--accent02)]"
          textCol="text-[var(--accent02)]"
          headTxt="Instructor Meeting"
          info="Review/correct yellow belt techniques."
          progress="w-[100%]"
          count={4}
        />
      </div>

      {/* Revised */}
      <div className="h-auto flex flex-col gap-4 mt-6">
        <ListHead
          head="Revised (0)"
          bgCol="bg-[#211A75]"
          textCol="text-[var(--primary)]"
        />
        <div className="bg-[#211A75] h-28 w-full rounded-xl p-6">
            <div className="bg-[var(--dark2)] flex items-center justify-center rounded-2xl border-dashed border-2 border-[var(--iris-col)] w-full h-full text-[var(--iris-col)]">Move card here</div>
        </div>
      </div>
    </div>
  );
};

export default Lists;
