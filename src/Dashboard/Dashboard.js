import React from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    <div className="container">
      <div className="wrapper">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default Dashboard;
