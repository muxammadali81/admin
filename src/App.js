import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Products from "./Dashboard/Products/Products";
import Transaction from "./Dashboard/Transaction/Transaction";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Dashboard />} />
          <Route  path="/products" element={<Products />} />
          <Route  path="/transaction" element={<Transaction />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
