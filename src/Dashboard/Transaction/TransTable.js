import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import visa from "../img/visa.png";

function TransTable() {
  return (
    <div className="section">
      <div className="transaction">
        <h1>Transactions </h1>
        <div className="transСard">
          <div className="transForm">
            <div className="productForm">
              <input type="search" name="" id="" placeholder="Search..." />
              <div className="formSelect">
                <select name="" id="">
                  <option value="1">Method</option>
                  <option value="2">Master card</option>
                  <option value="3">Visa card</option>
                  <option value="4">Paypal</option>
                </select>
              </div>
            </div>
            <div className="tarnsTable">
              <div className="tableHeader">
                <th>Transaction ID</th>
                <th>Paid</th>
                <th>Method</th>
                <th>Date</th>
                <th>Action</th>
              </div>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12].map((item) => (
                <div className="tableBody">
                  <td>
                    <b>#456667</b>
                  </td>
                  <td>$294.00</td>
                  <td>
                    <div className="imgText">
                      <img src={visa} alt="" />
                    </div>
                    Amex
                  </td>
                  <td>16.12.2020, 14:21</td>
                  <td>
                    <button className="btn btn-light">Details</button>
                  </td>
                </div>
              ))}
            </div>
            <div className="pagination">
              <button className="btn btn-pagination">Previous</button>
              <button className="btn">1</button>
              <button className="btn">2</button>
              <button className="btn">3</button>
              <button className="btn">Next</button>
            </div>
          </div>
          <div className="transBox">
            <h5>Transaction Details</h5>
            <hr />
            <h5>Suplier:</h5>
            <p>TemplateMount</p>
            <h5>Date:</h5>
            <p>December 19th, 2020</p>
            <h5>Billing address</h5>
            <p>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
            <h5>VAT ID:</h5>
            <p>54741654160</p>
            <h5>Email:</h5>
            <p>support@example.com</p>
            <h5>Item purchased:</h5>
            <p>
              <a href="#"> Adidas Air Jordan </a>
              <FaExternalLinkAlt className="link" /> <br />
              <a href="#"> Great product </a>
              <FaExternalLinkAlt className="link" />
            </p>
            <p>Payment: PayPal</p>
            <h4>$457.14</h4>
            <hr />
            <button className="btn btn-light"> Download receipe </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransTable;
