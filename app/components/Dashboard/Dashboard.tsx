"use client";
import React from "react";
import StatusCard from "./StatusCard";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import ProductivityChart from "./ProductivityChart";
import AlarmList from "./AlarmList";
import MachineStatus from "./MachineStatus";
import LineChart from "../Charts/LineChart";
import { IoLogOutOutline } from "react-icons/io5";

export default function Dashboard() {
  const lineData = [5, 3, 7, 20];
  const lineLabels = ["07/26", "07/27", "07/28", "07/29"];

  return (
    <div className="flex flex-col min-h-screen p-6">
      <div className="relative flex justify-end mb-4">
        <div className="relative group">
          <IoLogOutOutline className="text-[#6e6f70] text-2xl hover:text-red-500 cursor-pointer" />
          <div className="absolute hidden group-hover:block -top-6 right-0 bg-gray-700 text-white text-xs rounded py-1 px-2 z-10">
            Logout
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
        <StatusCard
          title="Active"
          value="20%"
          color="bg-[#3cd2b0]"
          icon={IoMdArrowDropup}
          unit="20%"
          lableColor="text-label-color-growth"
        />
        <StatusCard title="Setup" value="0%" color="bg-[#7cbac5]" />
        <StatusCard
          title="Stall"
          value="80%"
          color="bg-[#42b0f1]"
          icon={IoMdArrowDropup}
          unit="20%"
          lableColor="text-label-color-growth"
        />
        <StatusCard
          title="Machine Hours"
          value="10.4hr"
          color="bg-[#f5fa64]"
          icon={IoMdArrowDropdown}
          unit="36hrs"
          lableColor="text-label-color-loss"
        />
        <StatusCard
          title="Time Stalled"
          value="502min"
          color="bg-[#ccfc70]"
          icon={IoMdArrowDropup}
          unit="2276min"
          lableColor="text-label-color-growth"
        />
        <StatusCard title="Parts Made" value="0" color="bg-[#b8acf8]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <ProductivityChart />
        <LineChart data={lineData} labels={lineLabels} />
        <AlarmList />
      </div>

      <div className="mt-6">
        <MachineStatus />
      </div>
    </div>
  );
}
