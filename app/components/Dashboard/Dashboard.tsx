import React from "react";
import StatusCard from "./StatusCard";
import Sidebar from "./Sidebar";
import {
  IoMdArrowDropup,
  IoMdTimer,
  IoMdBuild,
  IoMdArrowDropdown,
} from "react-icons/io";
import ProductivityChart from "./ProductivityChart";
import AlarmList from "./AlarmList";
import MachineStatus from "./MachineStatus";
import LineChart from "../Charts/LineChart";

export default function Dashboard() {
  const lineData = [5, 3, 7, 20];
  const lineLabels = ["07/26", "07/27", "07/28", "07/29"];

  return (
    <div className="flex m-0 p-0">
      <div className="flex-grow p-6">
        <p className="text-[#6e6f70] text-end ml-auto pb-1 hover:text-red-500 cursor-pointer">
          [logout]
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
          <StatusCard
            title="Active"
            value="20%"
            color="bg-navbar-bg"
            icon={IoMdArrowDropup}
            unit={"20%"}
            lableColor="text-label-color-growth"
          />
          <StatusCard title="Setup" value="0%" color="bg-navbar-bg" />
          <StatusCard
            title="Stall"
            value="80%"
            color="bg-navbar-bg"
            icon={IoMdArrowDropup}
            unit={"20%"}
            lableColor="text-label-color-growth"
          />
          <StatusCard
            title="Machine Hours"
            value="10.4hr"
            color="bg-navbar-bg"
            icon={IoMdArrowDropdown}
            unit={"36hrs"}
            lableColor="text-label-color-loss"
          />
          <StatusCard
            title="Time Stalled"
            value="502min"
            color="bg-navbar-bg"
            icon={IoMdArrowDropup}
            unit={"2276min"}
            lableColor="text-label-color-growth"
          />
          <StatusCard title="Parts Made" value="0" color="bg-navbar-bg" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-60">
          <ProductivityChart />
          <LineChart data={lineData} labels={lineLabels} />
          <AlarmList />
        </div>

        <div className="mt-6">
          <MachineStatus />
        </div>
      </div>
    </div>
  );
}
