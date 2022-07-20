import React, { useState } from "react";
import "./dashboard.css";
import logo from "./img/logo.png";
import dukaan from "./img/dukaan.png";
import { NavLink } from "react-router-dom";
import {
  Arrowbottom,
  Customer,
  Dashboard,
  Logaut,
  Message,
  Payment,
  Product,
  Setting,
  Statistic,
  Trans,
} from "./assets/Svg";

function Sidebar() {
  const sidebar = [
    {
      id: 1,
      img: <Dashboard />,
      btn: "Dashboard",
      to: "/",
    },
    {
      id: 2,
      img: <Statistic />,
      btn: "Statistics",
      to: "/statistik",
    },
    {
      id: 3,
      img: <Payment />,
      btn: "Payment",
      to: "/sa",
    },
    {
      id: 4,
      img: <Trans />,
      btn: "Transactions",
      to: "/df",
    },
    {
      id: 5,
      img: <Product />,
      btn: "Products",
      to: "/gh",
    },
    {
      id: 6,
      img: <Customer />,
      btn: "Customer",
      to: "/hy",
    },
    {
      id: 7,
      img: <Message />,
      btn: "Messages",
      to: "/yj",
    },
    {
      id: 8,
      img: <Setting />,
      btn: "Settings",
      to: "/mk",
    },
    {
      id: 9,
      img: <Logaut />,
      btn: "Logout",
      to: "/li",
    },
  ];
  const [active, setActive] = useState(null);
  return (
    <div className="container">
      <div className="sidebar">
        <div className="sidebar-item">
          <div className="logo">
            <div className="logo-dukaan">
              <img src={logo} alt="" />
              <img src={dukaan} alt="" />
            </div>
            <div className="logo-icon">
              <Arrowbottom />
            </div>
          </div>
          <div className="sidebar-btns">
            {sidebar.map((item, i) => (
              <NavLink className="sidebar-btn" to={item.to}>
                <div className="sidebar-icon">{item.img}</div>
                <button>{item.btn}</button>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;