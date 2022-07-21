import React from "react";
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
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
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
        </div>
      </div>
    </div>
  );
}

export default TransTable;
