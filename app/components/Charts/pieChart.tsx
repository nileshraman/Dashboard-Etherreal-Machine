"use client";
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  data: number[];
  labels: string[];
}

const PieChart: React.FC<PieChartProps> = ({ data, labels }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: ['#497b54', '#994144'], 
        borderWidth: 6,
        borderColor: '#2b2a2a',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: '60%',
  };

  return (
    <div className="max-w-[220px] mx-auto">
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
