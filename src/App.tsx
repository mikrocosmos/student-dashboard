import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Messages from "./pages/modules/Messages";

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
      <div className="container xl h-full font-sans bg-[#F0EFF5]">
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
        <main className="relative top-20 left-60 w-max h-full p-12">
          <Routes>
            {activeUser.map((e: UserList) => (
              <Route
                path="/"
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
					{
						activeUser.map((e: UserList) => (
              <Messages 
							key={e.id}
							id={e.id}
							name={e.name}
							fullName={e.fullName}
							status={e.status}
							img={e.img}
							activeUser={activeUser}
							/>
            ))
					}
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
