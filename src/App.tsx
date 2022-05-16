import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App(): JSX.Element {
  const [activeUser, setActiveUser] = useState<UserList[]>([]);
  const fetchActiveUser = async () => {
    await axios
      .get("/base/users/1.json")
      .then((res) => setActiveUser(res.data));
  };

  React.useEffect(() => {
    try {
      fetchActiveUser();
    } catch (error) {
      alert("Error: cannot render users list");
    }
  }, []);
  return (
    <BrowserRouter>
      <div className="container xl h-full font-sans">
        <Sidebar />
        {activeUser.map((e: UserList) => (
          <Header
            key={e.id}
            id={e.id}
            name={e.name}
            fullName={e.fullName}
            status={e.status}
            img={e.img}
            activeUser={activeUser}
          />
        ))}
        <Routes>
					{activeUser.map((e: UserList) => (
          <Route path="/"
					element={
					<Dashboard
            key={e.id}
            id={e.id}
            name={e.name}
            fullName={e.fullName}
            status={e.status}
            img={e.img}
            activeUser={activeUser}
						/>
					}
          />
        ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
