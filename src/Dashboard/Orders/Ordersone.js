import React from "react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import "./orders.css";

function Ordersone() {
  const Tableten = [
    {
      id: 1,
      name: "Marvin",
      email: "me.com",
      total: "9.00 $",
      status: "Pending",
      date: "03.12.2020",
    },
    {
      id: 2,
      name: "Leslie",
      email: "le.com",
      total: "46.61$",
      status: "Pending",
      date: "21.02.2020",
    },
    {
      id: 3,
      name: "Esther",
      email: "ese.com",
      total: "12.00$",
      status: "Canceled",
      date: "03.07.2020",
    },
    {
      id: 4,
      name: "Esther",
      email: "ese.com",
      total: "12.00$",
      status: "Canceled",
      date: "03.07.2020",
    },
    {
      id: 5,
      name: "Jenny",
      email: "je.com",
      total: "589.99$",
      status: "Received",
      date: "22.05.2020",
    },
    {
      id: 7,
      name: "Marvin",
      email: "me.com",
      total: "9.00 $",
      status: "Pending",
      date: "03.12.2020",
    },
    {
      id: 8,
      name: "Albert",
      email: "ae.com",
      total: "$10.00",
      status: "Received",
      date: "	13.03.2020",
    },
    {
      id: 9,
      name: "	Wade",
      email: "ae.com",
      total: "105.55$",
      status: "Received",
      date: "23.09.2019",
    },
    {
      id: 10,
      name: "Jane",
      email: "je.com",
      total: "710.68$",
      status: "Received",
      date: "28.04.2020",
    },
  ];

  return (
    <div className="wrapper">
      <div className="orders_full">
        <Sidebar />
      </div>
      <div className="orders">
        <div className="orders_text">
          <h1>Orders one</h1>
        </div>
        <div className="orders_case">
          <div className="search_select">
            <div className="search_left">
              <input type="search" placeholder="Search..." />
            </div>
            <div className="select_right">
              <select>
                <option value="0">Status</option>
                <option value="1">Active</option>
                <option value="2">Disabled</option>
                <option value="3">Show all</option>
              </select>
              <select>
                <option value="4">Show 20</option>
                <option value="5">Show 30</option>
                <option value="6">Show 40</option>
              </select>
            </div>
          </div>

          <div className="orders_table_full">
            <div className="orders_table">
              <h4>#ID</h4>
              <h4>Name</h4>
              <h4>Email</h4>
              <h4>Total</h4>
              <h4>Status</h4>
              <h4>Date</h4>
              <h4>Action</h4>
            </div>

            {Tableten.map((item) => (
              <div key={item.id} className="orders_table_one">
                <span>{item.id}</span>
                <h3> {item.name}</h3>
                <span> {item.email}</span>
                <span> {item.total}</span>
                <button>{item.status}</button>
                <span> {item.date}</span>
                <div className="orders_btn">
                  <button>Detail</button>
                  <button>. . .</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pagination">
          <button className="btn btn-pagination">Previous</button>
          <button className="btn">1</button>
          <Link to={"/orderstwo"}>
            <button className="btn">2</button>
            <button className="btn">Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Ordersone;
