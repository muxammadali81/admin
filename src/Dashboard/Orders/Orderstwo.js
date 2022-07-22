import React from "react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import "./orders.css";

import Iphone from "../img/iphone.png";
import Card from "../img/card.png";

import {
  FaRegCalendarAlt,
  FaPrint,
  FaUser,
  FaCarSide,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Orderstwo() {
  const Pro = [
    {
      id: 1,
      icon: <FaUser />,
      title: "Customer",
      text: " John Alexander alex@example.com +998 90 123 45 67",
      link: "View profile",
    },
    {
      id: 2,
      icon: <FaCarSide />,
      title: "Order info",
      text: "Shipping: Fargo express Pay method:card Status: new",
      link: "Download info",
    },
    {
      id: 2,
      icon: <FaMapMarkerAlt />,
      title: "Deliver to",
      text: "City: Tashkent, Uzbekistan Block A House 123, Floor 2 Po Box 10000",
      link: "View profile",
    },
  ];

  const Product = [
    {
      id: 1,
      img: Iphone,
      text: "Phone",
      unitPrice: "44.25$",
      quantity: "2",
      total: "99.50$",
    },
    {
      id: 2,
      img: Iphone,
      text: "Phone",
      unitPrice: "7.50$",
      quantity: "2",
      total: "15.00$",
    },
    {
      id: 3,
      img: Iphone,
      text: "Phone",
      unitPrice: "43.50$",
      quantity: "2",
      total: "102.04$",
    },
    {
      id: 4,
      img: Iphone,
      text: "Phone",
      unitPrice: "99.00$",
      quantity: "3",
      total: "297.00$",
    },
  ];

  return (
    <div className="wrapper">
      <div className="orders_full">
        <Sidebar />
      </div>
      <div className="orders">
        <div className="orders_text">
          <h1>Order detail</h1>
        </div>

        <div className="orders_case">
          <div className="orders_data">
            <div className="orders_data_text">
              <h4>
                <FaRegCalendarAlt /> Wed, Aug 13, 2020, 4:34PM
              </h4>
              <p>Order ID: 3453012</p>
            </div>

            <div className="order_select_right">
              <select>
                <option value="0">Change status</option>
                <option value="1">Awaiting payment</option>
                <option value="2">Confirmed</option>
                <option value="3">Shipped</option>
                <option value="4">Delivered</option>
              </select>
              <button>Save</button>
              <FaPrint />
            </div>
          </div>
          <div className="order_icon_full">
            {Pro.map((item) => (
              <div key={item.id} className="order_icon_one">
                <div className="order_icon">{item.icon}</div>
                <div className="order_icon_text">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                  <a href="#">{item.link}</a>
                </div>
              </div>
            ))}
          </div>

          <div className="order_icon_table_full">
            <div className="order_icon_table_product">
              <div className="order_icon_table_td">
                <h4>Product</h4>
                <h4>Unit Price</h4>
                <h4>Quantity</h4>
                <h4>Total</h4>
              </div>

              {Product.map((item) => (
                <div key={item.id} className="order_icon_table_child">
                  <div className="order_icon_table_box">
                    <img src={item.img} alt="" />
                    <h4>{item.text}</h4>
                  </div>

                  <p>{item.unitPrice}</p>
                  <p> {item.quantity}</p>
                  <p> {item.total}</p>
                </div>
              ))}

              <div className="order_ftr">
                <div></div>
                <div></div>
                <div className="order_ftr_status">
                  <p>Subtotal:</p>
                  <p>Shipping cost:</p>
                  <p>Grand total:</p>
                  <p>Status:</p>
                </div>
                <div className="order_ftr_sum">
                  <p>973.35$</p>
                  <p>10.00$</p>
                  <h4>983.00$</h4>
                  <button>Payment done</button>
                </div>
              </div>
            </div>

            <div className="order_icon_table_card_full">
              <div className="order_icon_table_card">
                <h4>Payment info</h4>
                <div className="order_icon_table_card_box">
                  <p>
                    <img src={Card} alt="" />
                    Master Card **** **** 4768 Business name: Grand Market LLC
                    Phone: +1 (800) 555-154-52
                  </p>
                </div>
              </div>
              <div className="note">
                <h4>Notes</h4>
                <textarea placeholder="Type some note"></textarea>
                <button>Save</button>
              </div>
            </div>
          </div>
        </div>
        <div className="pagination">
          <Link to="/order">
            <button className="btn btn-pagination">Previous</button>
            <button className="btn">1</button>
          </Link>
          <button className="btn">2</button>
          <button className="btn">Next</button>
        </div>
      </div>
    </div>
  );
}

export default Orderstwo;
