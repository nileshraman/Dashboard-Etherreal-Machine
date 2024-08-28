"use client";
import React, { useState, useEffect } from 'react';
import { IconType } from 'react-icons';
import { CiCircleQuestion } from 'react-icons/ci';

interface StatusCardProps {
  title: string;
  value: string;
  color: string;
  icon?: IconType;
  unit?: string;
  lableColor?: string;
}

export default function StatusCard({
  title,
  value,
  color,
  icon: Icon,
  unit,
  lableColor,
}: StatusCardProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${color} p-4 rounded-lg transition-transform transform hover:scale-105 ${isLoading ? 'animate-pulse' : ''}`}>
      <div className="flex justify-between items-center mb-2">
        {isLoading ? (
          <div className="h-8 w-24 bg-[#151414] rounded animate-bounce"></div>
        ) : (
          <h2 className="text-3xl text-[#020504] font-bold">{value}</h2>
        )}
        <CiCircleQuestion className="text-gray-500" />
      </div>
      <div className="flex items-center">
        {isLoading ? (
          <div className="h-4 w-20 bg-[#151414] rounded animate-bounce"></div>
        ) : (
          <>
            <p className="text-sm text-[#020504] opacity-80">{title}</p>
            {Icon && <Icon className={`${lableColor} text-xl mr-2`} />}
            <p className={`${lableColor} text-md opacity-50 font-bold`}>{unit}</p>
          </>
        )}
      </div>
    </div>
  );
}
