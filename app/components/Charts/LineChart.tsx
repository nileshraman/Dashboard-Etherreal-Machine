"use client";
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartProps {
  data: number[];
  labels: string[];
}

const LineChart: React.FC<LineChartProps> = ({ data, labels }) => {
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
        borderColor: '#4CAF50',
        backgroundColor: '#3f7e52',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        min: 0,
        max: 90,
        ticks: {
          stepSize: 10,
          callback: function(value: any) {
            return value + '%';
          },
        },
      },
    },
  };

  return (
    <div className={`bg-navbar-bg rounded-lg p-4 transition-transform transform hover:scale-105 ${isLoading ? 'animate-custom-bounce' : ''}`}>
      {isLoading ? (
        <div className="h-48 bg-[#151414] rounded"></div>
      ) : (
        <Line data={chartData} options={options} />
      )}
    </div>
  );
};

export default LineChart;
