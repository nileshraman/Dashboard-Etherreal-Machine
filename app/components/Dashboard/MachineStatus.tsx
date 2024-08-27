"use client";
import React from "react";
import { CiCircleQuestion } from "react-icons/ci";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { IoMdSettings } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";

const MachineStatus = () => {
  const data = [
    { name: "Red", value1: 4000, value2: 3000 },
    { name: "Blue", value1: 2000, value2: 1000 },
    { name: "Green", value1: 3000, value2: 2000 },
  ];

  const statusDataSets = [
    [
      { label: "Active", value: "8m", borderColor: "#3f7e52" },
      { label: "Loading", value: "0m", borderColor: "#3f7e52" },
      { label: "Setup", value: "0m", borderColor: "#fbbf24" },
      { label: "Stalled", value: "8h 10m", borderColor: "#f87171" },
    ],
    [
      { label: "Active", value: "1h 56m", borderColor: "#3f7e52" },
      { label: "Loading", value: "0m", borderColor: "#3f7e52" },
      { label: "Setup", value: "0m", borderColor: "#fbbf24" },
      { label: "Stalled", value: "11m", borderColor: "#f87171" },
    ],
  ];

  const gridDataSets = [
    [
      { label: "MODE", value: "MEM" },
      { label: "PROGRAM", value: "O9001" },
      { label: "TOOL", value: "1" },
      { label: "PARTCOUNT", value: "188" },
      { label: "PARTGOAL", value: "0" },
      { label: "SPINDLE", value: "0" },
    ],
    [
      { label: "MODE", value: "MEM" },
      { label: "PROGRAM", value: "01_DRM" },
      { label: "TOOL", value: "8" },
      { label: "PARTCOUNT", value: "1205" },
      { label: "PARTGOAL", value: "0" },
      { label: "SPINDLE", value: "7999" },
    ],
  ];

  return (
    <div className="bg-navbar-bg rounded-lg text-white p-4 transition-transform duration-300 transform hover:scale-102">
      {/* Navbar */}
      <nav className="flex flex-wrap justify-start mb-4 text-sm text-[#484849]">
        <span className="px-4 mb-2 hover:text-white cursor-pointer">
          Machines
        </span>
        <span className="px-4 mb-2 hover:text-white cursor-pointer">
          Status
        </span>
        <span className="px-4 mb-2 flex items-center hover:text-white cursor-pointer">
          Cycle Progress
          <CiCircleQuestion className="ml-2 text-gray-500" />
        </span>
        <span className="px-4 mb-2 flex items-center hover:text-white cursor-pointer">
          Production Progress
        </span>
        <span className="px-4 mb-2 flex items-center hover:text-white cursor-pointer">
          Production Remaining
          <CiCircleQuestion className="ml-2 text-gray-500" />
        </span>
      </nav>

      {/* Machine Status Rows */}
      {["HALO - 01", "NIMBUS - 09"].map((machine, index) => (
        <div
          key={index}
          className={`mb-6 pb-4 border-b border-[#484849] ${
            index === 0 ? "border-dashed" : "border-solid"
          }`}
        >
          {/* Status Title and Indicator */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2 sm:flex-1 sm:w-[20%]">
              <h2 className="font-semi-bold px-4">{machine}</h2>
              <span
                className={`px-3 py-1 rounded text-xs border ${
                  index === 0
                    ? "text-white-600 border-white-600"
                    : "text-green-600 border-green-600"
                }`}
              >
                {index === 0 ? "IDLE" : "ACTIVE"}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-4 sm:w-[20%]">
              <div className="flex-1 max-w-[100px] h-4 bg-[#484849] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#497b54]"
                  style={{ width: `0%` }}
                ></div>
              </div>
              <div className="flex-1 max-w-[100px] h-4 bg-[#484849] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#497b54]"
                  style={{ width: `100%` }}
                ></div>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:w-[60%] justify-end">
              <IoMdSettings className="text-[#484849]" />
              <IoIosArrowDropupCircle className="text-[#484849]" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start">
            {/* Grid Layout */}
            <div className="w-full sm:w-1/4 p-3 mb-4 sm:mb-0">
              <div className="grid grid-cols-3 gap-2">
                {gridDataSets[index].map((item, idx) => (
                  <div
                    key={idx}
                    className="text-center rounded border border-[#484849]"
                  >
                    <div className="text-xs text-gray-400">{item.label}</div>
                    <div className="font-semibold rounded border bg-custom-bg border-[#484849]">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Status Cards */}
            <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
              <div className="grid grid-cols-2 gap-2 p-1.5">
                {statusDataSets[index].map((card, cardIndex) => (
                  <div
                    key={cardIndex}
                    className="flex flex-col bg-custom-bg px-2 rounded-md border-l-4"
                    style={{ borderColor: card.borderColor }}
                  >
                    <span className="text-gray-100 text-sm">{card.label}</span>
                    <span className="block text-lg">{card.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Graph Bar */}
            <div className="w-full sm:w-1/2">
              <div className="flex flex-col justify-end h-full py-2">
                <ResponsiveContainer width="100%" height={100}>
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" hide />
                    <YAxis hide />
                    <Tooltip />
                    <Bar dataKey="value1" fill="#994144" />
                    <Bar dataKey="value2" fill="#3f7e52" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MachineStatus;
