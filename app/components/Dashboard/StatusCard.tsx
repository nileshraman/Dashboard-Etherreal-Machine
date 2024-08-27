import React from 'react';
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
  return (
    <div className={`${color} p-4 rounded-lg transition-transform transform hover:scale-105`}>
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-3xl font-bold">{value}</h2>
        <CiCircleQuestion className="text-gray-500" />
      </div>
      <div className="flex items-center">
        <p className="text-sm opacity-80">{title}</p>
        {Icon && <Icon className={`${lableColor} text-xl mr-2`} />}
        <p className={`${lableColor} text-md opacity-80 font-bold`}>{unit}</p>
      </div>
    </div>
  );
}
