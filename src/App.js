import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Statistic from "./Dashboard/Statistic.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/statistik" element={<Statistic />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
