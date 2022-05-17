// import { useState } from "react";
import { Link } from "react-router-dom";

interface NavLinkProps extends ElementList {
  key: string;
}

function NavLink({
  key,
  title,
  icon,
  activeIcon,
  isActive,
  destination,
}: NavLinkProps): JSX.Element {
  // const [active, setActive] = useState(isActive);

  return (
    <Link to={destination}>
      <li className="h-[34px] my-4 px-10 flex cursor-pointer">
        {isActive ? (
          <>
            <div className="w-[5px] h-[34px] bg-[#EE3637] absolute left-0"></div>
            <img
              className="mr-3.5 -mt-1"
              src={activeIcon}
              alt={key}
              width={18}
              height={18}
            />
            <span className="text-lg text-white font-bold">{title}</span>
          </>
        ) : (
          <>
            <img
              className="mr-3.5 -mt-2.5"
              src={icon}
              alt={key}
              width={15}
              height={15}
            />
            <span className="text-base text-[#C0BEFF]">{title}</span>
          </>
        )}
      </li>
    </Link>
  );
}

export default NavLink;
