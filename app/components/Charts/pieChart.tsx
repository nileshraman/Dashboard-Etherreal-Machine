"use client";
import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  data: number[];
  labels: string[];
}

const PieChart: React.FC<PieChartProps> = ({ data, labels }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: ['#4492fe', '#39e368'],
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
    <div className={`max-w-[220px] mx-auto transition-transform transform hover:scale-105 ${isLoading ? 'animate-pulse' : ''}`}>
      {isLoading ? (
        <div className="h-48 bg-[#151414] rounded-full animate-bounce"></div>
      ) : (
        <Pie data={chartData} options={options} />
      )}
    </div>
  );
};

export default PieChart;
