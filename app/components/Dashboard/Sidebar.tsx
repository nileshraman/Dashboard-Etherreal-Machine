import React from "react";
import { CiSettings } from "react-icons/ci";
import {
  FaCalendarAlt,
  FaBox,
  FaFileAlt,
  FaHome,
  FaIndustry,
  FaChartLine,
} from "react-icons/fa";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  alwaysWhite?: boolean;
}

export default function Sidebar() {
  return (
    <div className="bg-navbar-bg text-white w-12 lg:w-19 h-screen flex flex-col">
      <nav className="flex flex-col h-full justify-between">
        <div className="flex flex-col gap-4 text-lg items-center justify-center flex-grow">
          <SidebarItem icon={<FaHome />} label="Home" alwaysWhite />
          <SidebarItem icon={<FaIndustry />} label="Factory" />
          <SidebarItem icon={<FaBox />} label="Stack" />
          <SidebarItem icon={<FaCalendarAlt />} label="Event" />
          <SidebarItem icon={<FaFileAlt />} label="Document" />
          <SidebarItem icon={<FaChartLine />} label="Stock" />
        </div>
        <div className="flex justify-center mb-4">
          <SidebarItem icon={<CiSettings />} label="Settings" />
        </div>
      </nav>
    </div>
  );
}

function SidebarItem({ icon, label, alwaysWhite }: SidebarItemProps) {
  return (
    <div className="relative flex items-center justify-center w-12 h-12 group cursor-pointer">
      <div
        className={`text-xl ${alwaysWhite ? 'text-white' : 'text-icon-default'} group-hover:text-icon-hover transition-colors duration-300`}
      >
        {icon}
      </div>
      <div className="absolute left-full top-1/2 transform -translate-x-4 -translate-y-1/2 w-max p-2 text-sm text-white bg-gray-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        {label}
      </div>
    </div>
  );
}
