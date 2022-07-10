import React, { useState } from "react";
import axios from "axios";

import UpcommingSession from "./UpcommingSession";

function UpcommingSessions() {
  const [session, setSession] = useState<Session[]>([]);
  const fetchSession = async () => {
    await axios
      .get("/base/upcommingSessions.json")
      .then((res) => setSession(res.data));
  };

  React.useEffect(() => {
    try {
      fetchSession();
    } catch (error) {
      alert("Error: cannot render cards");
    }
  }, []);

  return (
    <div className="w-[425px] h-96 relative bg-white rounded-[20px] ml-10 shadow-md p-6">
      <h3 className="font-medium text-[#333269]">Upcoming Sessions</h3>
      <div className="grid grid-cols-3 mt-7 text-[#65708D] text-sm">
        <span>Date</span>
        <span>Class</span>
        <span>Time</span>
      </div>
      <ul>
        {session.map((e) => (
          <UpcommingSession
            day={e.day}
            month={e.month}
            title={e.title}
            theme={e.theme}
            time={e.time}
          />
        ))}
      </ul>
      <button className="font-bold text-sm text-[#5855D6] absolute right-5 bottom-5 transition hover:text-indigo-800 hover:underline">
        See All Sessions
      </button>
    </div>
  );
}

export default UpcommingSessions;
