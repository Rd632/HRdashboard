import React from "react";
import { FaArrowUpLong } from "react-icons/fa6"; // Importing arrow icon

type EmployeeCardProps = {
    totalEmployees: string;
    menCount: number;
    womenCount: number;
    growthPercentage: number;
    number:number
  };
  
  const EmployeeCard: React.FC<EmployeeCardProps> = ({
    totalEmployees,
    menCount,
    womenCount,
    growthPercentage,
    number
  }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex items-center justify-between w-full border border-gray-300 ">
      {/* Left Section */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900">{totalEmployees}</h2>
        <h1 className="text-4xl font-bold text-gray-900 mt-1">{number}</h1>
        <p className="text-sm text-gray-600 mt-2">{menCount} Men</p>
        <p className="text-sm text-gray-600">{womenCount} Women</p>
      </div>

      {/* Right Section (Growth & Graph) */}
      <div className="flex flex-col items-center">
        {/* +2% with ArrowUp Icon */}
        <div className="flex flex-col items-center">
          <span className="text-orange-500 text-xs font-semibold">+{growthPercentage}%</span>
          <FaArrowUpLong  className="text-orange-500 w-4 h-4 mt-1" />
        </div>

        {/* SVG Curve with Shadow */}
        <svg width="100" height="40" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="shadow" x="0" y="0" width="150%" height="150%">
              <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="red" floodOpacity="0.3" />
            </filter>
          </defs>
          <path d="M0 35 C20 5, 50 45, 70 15 S 110 35, 170 20"
                stroke="red" strokeWidth="2" fill="none" filter="url(#shadow)" />
        </svg>

        {/* Growth Badge */}
        <div className="bg-orange-100 text-black-600 text-xs px-3 py-1 rounded-md mt-1">+{growthPercentage}% Past month</div>
      </div>
    </div>
  );
};

export default EmployeeCard;
