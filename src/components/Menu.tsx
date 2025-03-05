import { BiHome, BiUser, BiCalendar, BiBriefcase, BiCog, BiHeadphone } from "react-icons/bi";
import Link from "next/link";

const menuItems = [
  {
    title: "MAIN MENU",
    items: [
      { icon: <BiHome size={20} />, label: "Dashboard", href: "/" },
      { icon: <BiUser size={20} />, label: "Recruitment", href: "/recruitment" },
      { icon: <BiCalendar size={20} />, label: "Schedule", href: "/schedule" },
      { icon: <BiBriefcase size={20} />, label: "Employee", href: "/employee" },
      { icon: <BiBriefcase size={20} />, label: "Department", href: "/department" },
    ],
  },
  {
    title: "OTHER",
    items: [
      { icon: <BiHeadphone size={20} />, label: "Support", href: "/support" },
      { icon: <BiCog size={20} />, label: "Settings", href: "/settings" },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((section) => (
        <div className="flex flex-col gap-2" key={section.title}>
          {/* Section Title - Visible only on large screens */}
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {section.title}
          </span>

          {/* Menu Items */}
          {section.items.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className="flex items-center justify-center md:justify-center lg:justify-start gap-4 text-gray-500 py-2 rounded-md hover:bg-gray-200"
            >
              {/* Always show icon */}
              <div className="text-xl">{item.icon}</div>

              {/* Show label only on large screens */}
              <span className="hidden md:hidden lg:block">{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
