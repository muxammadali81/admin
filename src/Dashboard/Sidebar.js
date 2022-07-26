import React from "react";
import "./dashboard.css";
import logo from "./img/logo.svg";
import { NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import {
  Arrowbottom,
  Customer,
  Dashboard,
  Logaut,
  Message,
  Payment,
  Product,
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
      btn: "Orders",
      to: "/order",
    },
    {
      id: 3,
      img: <Payment />,
      btn: "Payment",
      to: "/df",
    },
    {
      id: 4,
      img: <Trans />,
      btn: "Transactions",
      to: "/Transaction",
    },
    {
      id: 5,
      img: <Product />,
      btn: "Products",
      to: "/products",
    },
    {
      id: 6,
      img: <Customer />,
      btn: "Add product",
      to: "/adproduct",
    },
    {
      id: 7,
      img: <Message />,
      btn: "Brends",
      to: "/brends",
    },
    {
      id: 8,
      img: <FaUserAlt className="user" />,
      btn: "Account",
      to: "/login",
    },
    {
      id: 9,
      img: <Logaut />,
      btn: "Logout",
      to: "/kl",
    },
  ];
  return (
    <div className="container">
      <div className="sidebar">
        <div className="sidebar-item">
          <div className="logo">
            <img src={logo} alt="" />
            <div className="logo-icon">
              <Arrowbottom />
            </div>
          </div>
          <div className="sidebar-btns">
            {sidebar.map((item) => (
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
