import React from "react";

interface NavLinkProps extends ElementList { key: string; }

function NavLink({ key, title, icon, activeIcon }: NavLinkProps): JSX.Element {
  return (
    <li className="h-[34px] my-4 px-10 flex">
      <img
        className="mr-3.5 -mt-2.5"
        src={icon}
        alt={key}
        width={15}
        height={15}
      />
      <span className="text-base text-[#C0BEFF]">{title}</span>
    </li>
  );
}

export default NavLink;
