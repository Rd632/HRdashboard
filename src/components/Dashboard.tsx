import AnnouncementsCard from "./Announcements";
import EmployeeCard from "./EmployeeCard";
import RecentActivityCard from "./RecentActivity";
import UpcomingScheduleCard from "./UpcomingSchedule";
import UserCard from "./UserCard"

const Dashboard = () => {
  return (
    <div className="p-4 flex gap-4 flex-col lg:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
         {/* USER CARDS */}
         <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">
          <UserCard type="4 Urgently needed" number={24} label="Available Position" bgColor = "bg-orange-100" textColor = "text-orange-500"/>
          <UserCard type="4 Active hiring" number={10} label="Job Open"bgColor = "bg-blue-100" textColor = "text-blue-500"/>
          <UserCard type="4 Department" number={24} label="New Employees" bgColor = "bg-pink-100"textColor = "text-pink-500" />
          
        </div>
        {/* MIDDLE  */}
        <div className="grid  sm:grid-cols-1 md:grid-cols-2  gap-4 w-full ">
        <div className=" h-[180px]">
            <EmployeeCard totalEmployees="Total Employees" menCount={120} womenCount={96} growthPercentage={2} number={216} />
          </div>
          <div className=" h-[180px]">
            <EmployeeCard totalEmployees="Talent Request" menCount={6} womenCount={10} growthPercentage={5} number={16} />
          </div>
          
        </div>
        {/* BOTTOM  */}
        <div className="w-full h-[320px] -mt-9">
         <AnnouncementsCard/> 
        </div>
      </div>
      {/* RIGHT */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1  gap-4">
      <div className=" lg:h-[200px]">
      <RecentActivityCard />
      </div> 
      <div className="lg:h-[350px]">
      <UpcomingScheduleCard />
      </div>    
    </div>
    </div>
  );
};

export default Dashboard; 