import React from "react";

const RecentActivityCard = () => {
  return (
    <div className="bg-[#0D1B40] text-white p-6 rounded-2xl shadow-lg w-full max-w-md ">
      <h3 className="text-lg font-semibold mb-5">Recently Activity</h3>
      <p className="text-sm text-gray-300">10:40 AM, Fri 10 Sept 2021</p>
      
      <h2 className="text-lg font-bold mt-2">You Posted a New Job</h2>
      <p className="text-sm text-gray-300 mt-1">
        Kindly check the requirements and terms of work and make sure everything is right.
      </p>
      
      {/* Flex container to keep text and button in the same row */}
      <div className="flex justify-between items-center mt-6">
        <p className="text-sm">
          Today you makes <span className="font-semibold">12</span> Activity
        </p>
        <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-4 py-2 rounded-lg">
          See All Activity
        </button>
      </div>
    </div>
  );
};

export default RecentActivityCard;
