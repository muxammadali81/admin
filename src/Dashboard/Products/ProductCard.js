import React from "react";
import "../Products/product.css";
import smartClock from "../img/smartClock.jpg";
import { FaPen, FaTrashAlt } from "react-icons/fa";

function ProductCard() {
  return (
    <div className="section">
      <div className="productItem">
        <div className="productItem-text">
          <h1>Products grid</h1>
        </div>
        <div className="productBtn">
          <button className="btn btn-light">Export</button>
          <button className="btn btn-light">Import</button>
          <button className="btn btn-primary">Create new</button>
        </div>
      </div>
      <div className="productTable">
        <div className="productForm">
          <input type="search" name="" id="" placeholder="Search..." />
          <div className="formSelect">
            <select name="" id="">
              <option value="1">All category</option>
              <option value="2">Electronics</option>
              <option value="3">Clothings</option>
              <option value="4">Something else</option>
            </select>
            <select name="" id="">
              <option value="1">Latest added</option>
              <option value="2">Cheap first</option>
              <option value="3">Most viewed</option>
            </select>
          </div>
        </div>
        <div className="productCards">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div className="productCard">
              <div className="wrapImg">
                <img src={smartClock} alt="" />
              </div>
              <h3>Just another product name</h3>
              <span>$179.00</span>
              <div className="cardBtn">
                <button className="btn btn-sm">
                  <FaPen />
                  Edit
                </button>
                <button className="btn btn-group-sm">
                  <FaTrashAlt />
                  Delete
                </button>
              </div>
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
  );
}

export default ProductCard;
