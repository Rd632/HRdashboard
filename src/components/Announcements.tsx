import React from "react";
import { FaThumbtack } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

type Announcement = {
  title: string;
  time: string;
  pinned?: boolean;
};

const announcements: Announcement[] = [
  { title: "Outing schedule for every department", time: "5 Minutes ago", pinned: true },
  { title: "Meeting HR Department", time: "Yesterday, 12:30 PM", pinned: false },
  { title: "IT Department needs two more talents for UX/UI Designer position", time: "Yesterday, 09:15 AM", pinned: false },
];

const AnnouncementsCard: React.FC = () => {
    return (
      <div className="bg-white shadow-md rounded-xl p-1 w-full h-95% border  border-gray-300 overflow-hidden">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800"> &nbsp; Announcement</h2>
          <button className="bg-gray-100 px-3 py-1 text-sm rounded-lg shadow-sm">
            Today, 13 Sep 2021 ▼
          </button>
        </div>
  
        {/* Announcements List */}
        <div className="space-y-3 overflow-y-auto max-h-[250px] pr-2">
          {announcements.map((announcement, index) => (
            <div key={index} className="bg-gray-100 p-2 rounded-lg flex justify-between items-start">
              <div>
                <h3 className="text-sm font-medium text-gray-800">{announcement.title}</h3>
                <p className="text-xs text-gray-500">{announcement.time}</p>
              </div>
              <div className="flex items-center space-x-2">
                {announcement.pinned && <FaThumbtack className="text-gray-400" />}
                <BsThreeDots className="text-gray-500 cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
  
        {/* Footer Button */}
        <div className="border-t mt-4 pt-3 text-center ">
        <button className="text-red-500 font-medium text-sm hover:underline">
          See All Announcement
        </button>
      </div>
      </div>
    );
  };
  

export default AnnouncementsCard;
