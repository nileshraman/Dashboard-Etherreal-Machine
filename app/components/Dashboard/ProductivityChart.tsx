import React from "react";
import PieChart from "../Charts/pieChart";

const ProductivityChart: React.FC = () => {
  const pieData = [2 * 60 + 4, 0, 0, 8 * 60 + 22];
  const pieLabels = ["Active", "Loading", "Setup", "Stalled"];

  return (
    <div className="bg-navbar-bg text-white p-5 rounded-lg transition-transform transform hover:scale-105">
      <h2 className="text-2xl mb-5">Productivity</h2>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Pie Chart */}
        <div className="flex-shrink-0 flex justify-center items-center w-full lg:w-auto">
          <div className="w-full max-w-[150px]">
            <PieChart data={pieData} labels={pieLabels} />
          </div>
        </div>
        {/* Metrics */}
        <div className="flex-grow grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <div className="flex flex-col bg-custom-bg p-4 rounded-md border-l-4 border-l-[#3f7e52]">
            <span className="text-gray-400 text-sm">Active</span>
            <span className="block text-lg font-bold">2h 4m</span>
          </div>
          <div className="flex flex-col bg-custom-bg p-4 rounded-md border-l-4 border-l-[#3f7e52]">
            <span className="text-gray-400 text-sm">Loading</span>
            <span className="block text-lg font-bold">0m</span>
          </div>
          <div className="flex flex-col bg-custom-bg p-4 rounded-md border-l-4 border-l-yellow-500">
            <span className="text-gray-400 text-sm">Setup</span>
            <span className="block text-lg font-bold">0m</span>
          </div>
          <div className="flex flex-col bg-custom-bg p-4 rounded-md border-l-4 border-l-red-500">
            <span className="text-gray-400 text-sm">Stalled</span>
            <span className="block text-lg font-bold">8h 22m</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductivityChart;
