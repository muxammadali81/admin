import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./Dashboard/addProducts/AddProduct";
import Dashboard from "./Dashboard/Dashboard";
import Products from "./Dashboard/Products/Products";
import Transaction from "./Dashboard/Transaction/Transaction";
import LogIn from './Dashboard/logIn/LogIn';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Dashboard />} />
          <Route  path="/products" element={<Products />} />
          <Route  path="/transaction" element={<Transaction />} />
          <Route  path='/hy' element={<AddProduct />} />
          <Route  path='/mk' element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
