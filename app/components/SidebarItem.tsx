import Link from "next/link";
import React, { FC } from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface ISidebarItem {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}

const SidebarItem: FC<ISidebarItem> = ({ icon: Icon, label, active, href }) => {
  return (
    <Link
      href={href}
      className={twMerge(
        `flex flex-row h-auto items-center w-full gap-4-x text-md font-medium cursor-pointer text-slate-300 hover:text-white transition next-neutral-400 py-1`,
        active && "text-white"
      )}
    >
      <Icon size={26}/>
      <p className='truncate w-full ml-3'>{label}</p>
    </Link>
  );
};

export default SidebarItem;
