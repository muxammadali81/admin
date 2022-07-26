import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./Dashboard/addProducts/AddProduct";
import Dashboard from "./Dashboard/Dashboard";
import Products from "./Dashboard/Products/Products";
import Transaction from "./Dashboard/Transaction/Transaction";
import LogIn from './Dashboard/logIn/LogIn';
import Orders from "./Dashboard/Orders/Orders"
import Orderstwo from "./Dashboard/Orders/Orderstwo";
import Brend from "./Dashboard/brend/Brend";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Dashboard />} />
          <Route  path="/products" element={<Products />} />
          <Route  path="/transaction" element={<Transaction />} />
          <Route  path='/adproduct' element={<AddProduct />} />
          <Route  path='/login' element={<LogIn />} />
          <Route  path='/order' element={<Orders />} />
          <Route  path="/orderstwo" element={<Orderstwo />} />
          <Route  path="/brends" element={<Brend />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
