import Image from "next/image";

type UserCardProps = {
    type: string;
    number: number;
    label: string;
    bgColor: string;
    textColor: string;
  };
  
  const UserCard: React.FC<UserCardProps> = ({ type, number, label ,bgColor , textColor}) => {
  return (
    <div className={`rounded-2xl  p-4 flex-1 min-w-[130px] ${bgColor}`}>
      <div className="flex justify-between items-center">
      <h2 className="capitalize text-sm font-medium text-gray-500">{label}</h2>
        
      </div>
      <h1 className="text-3xl font-semibold my-4">{number}</h1>
      <h2 className={`capitalize text-sm font-medium ${textColor}`}>{type}</h2>
    </div>
  );
};

export default UserCard;