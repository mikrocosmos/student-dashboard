import React, { useState } from "react";
import axios from "axios";

import ActivePrograms from "../modules/ActivePrograms";
import Card from "../modules/Card";
import UpcommingSessions from '../modules/UpcommingSessions'
interface DashboardProps extends UserList {
  activeUser: Array<UserList>;
}
function Dashboard({ name }: DashboardProps) {
  const [card, setCard] = useState<Card[]>([]);
  const fetchCard = async () => {
    await axios.get("/base/card.json").then((res) => setCard(res.data));
  };

  React.useEffect(() => {
    try {
      fetchCard();
    } catch (error) {
      alert("Error: cannot render cards");
    }
  }, []);
  return (
    <>
      <h1 className="text-[21px] text-[#333269] font-bold ">Hello, {name}!</h1>
      <ActivePrograms />
      <div className="flex">
        {card.map((e: Card) => (
          <Card
            title={e.title}
            theme={e.theme}
            checkedIn={e.checkedIn}
            img={e.img}
            day={e.day}
            month={e.month}
            state={e.state}
          />
        ))}
				<UpcommingSessions />
      </div>
    </>
  );
}

export default Dashboard;
