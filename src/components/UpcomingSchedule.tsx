import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

const schedules = [
  {
    title: "Review candidate applications",
    time: "Today - 11.30 AM",
  },
  {
    title: "Interview with candidates",
    time: "Today - 10.30 AM",
  },
  {
    title: "Short meeting with product designer from IT Department",
    time: "Today - 09.15 AM",
  },
];

const UpcomingScheduleCard: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-full  overflow-hidden">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Upcoming Schedule</h2>
        <button className="bg-gray-100 px-3 py-1 text-sm rounded-lg shadow-sm flex items-center gap-2">
          Today, 13 Sep 2021 <AiOutlineCalendar />
        </button>
      </div>

      {/* Schedule List */}
      <div className="space-y-3 overflow-y-auto max-h-[250px] pr-2">
        {schedules.map((schedule, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg flex justify-between items-start">
            <div>
              <h3 className="text-sm font-medium text-gray-800">{schedule.title}</h3>
              <p className="text-xs text-gray-500">{schedule.time}</p>
            </div>
            <BsThreeDots className="text-gray-500 cursor-pointer" />
          </div>
        ))}
      </div>

      {/* Footer Button */}
      <div className="border-t mt-2 pt-2 text-center">
        <button className="text-red-500 font-medium text-sm hover:underline">
          Create a New Schedule
        </button>
      </div>
    </div>
  );
};

export default UpcomingScheduleCard;
