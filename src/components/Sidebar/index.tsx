import React, { useState } from "react";
import axios from "axios";
import NavLink from "./NavLink";

function Sidebar(): JSX.Element {
  const [navList, setNavList] = useState<ElementList[]>([]);
  const fetchNavList = async () => {
    await axios.get("/base/sidebar.json").then((res) => setNavList(res.data));
  };

  React.useEffect(() => {
		try {
			fetchNavList();
		} catch (error) {
			alert('Error: cannot render sidebar navigation list.')
		}
  }, []);

  return (
    <aside className="bg-indigo-900 w-60 h-full fixed top-0 left-0 z-1 overflow-y-auto">
      <button className="absolute right-2 top-4 z-5 opacity-50 hover:opacity-100 transition linear delay-2500">
        <img src="/img/icons/left-arrow.svg" alt="" width={28} height={28} />
      </button>
      <div className="block m-10">
        <img
          className="cursor-pointer inline-block mr-3 -mt-0.5"
          width={28}
          height={36}
          src="/img/svg/_logo.svg"
          alt="Univé"
        />
        <span className="font-Museo font-semibold text-3xl bg-clip-text bg-gradient-to-br from-white/70 to-gray-200/70 [-webkit-text-fill-color:transparent]">
          Univé
        </span>
      </div>
      <ul className="mt-14">
        {navList.map((e) => (
          <NavLink
            key={e.title}
            title={e.title}
            icon={e.icon}
            activeIcon={e.activeIcon}
          />
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
