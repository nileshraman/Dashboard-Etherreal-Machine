import React, { useState, useEffect } from 'react';

interface Alarm {
  id: number;
  machine: string;
  message: string;
  time: string;
}

const AlarmList: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const alarms: Alarm[] = [
    { id: 1, machine: 'HALO - 01', message: 'Alarm on Machine 1: 501 - (X1)- OVERTRAVEL ( SOFT 1 )', time: '07/29 09:03' },
    { id: 2, machine: 'HALO - 01', message: 'Machine 1 idle for 15 minutes', time: '07/29 08:59' },
    { id: 3, machine: 'NIMBUS - 09', message: 'Alarm on NIMBUS: 500 - (Y)- OVERTRAVEL ( SOFT 1 )', time: '07/29 08:51' },
    { id: 4, machine: 'NIMBUS - 10', message: 'Machine idle for 10 minutes', time: '07/29 08:48' },
  ];

  return (
    <div className="bg-navbar-bg p-4 rounded-lg transition-transform transform hover:scale-105" style={{ maxHeight: '300px', position: 'relative', paddingBottom: '2rem' }}>
      <h2 className="text-xl mb-4 sticky top-0 bg-navbar-bg text-[#fe543c] p-2">Alarms</h2>
      <ul className="overflow-y-auto scrollbar-thumb-scrollbar-thumb scrollbar-track-scrollbar-track" style={{ maxHeight: 'calc(100% - 3rem)' }}>
        {isLoading ? (
          // Skeleton 
          [...Array(4)].map((_, index) => (
            <li
              key={index}
              className="mb-2 text-sm p-2 bg-[#151414] rounded-md animate-pulse"
              style={{ borderLeft: '6px solid #333332' }}
            >
              <div className="h-4 w-1/3 bg-gray-600 rounded mb-2"></div>
              <div className="h-3 w-1/4 bg-gray-600 rounded mb-1"></div>
              <div className="h-3 w-3/4 bg-gray-600 rounded"></div>
            </li>
          ))
        ) : (
          alarms.map((alarm) => (
            <li
              key={alarm.id}
              className="mb-2 text-sm p-2 bg-[#333332] rounded-md"
              style={{ borderLeft: '6px solid #454445' }}
            >
              <span className="font-bold">{alarm.machine}</span>
              <span className="float-right text-gray-400">{alarm.time}</span>
              <p className="text-gray-300">{alarm.message}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default AlarmList;
