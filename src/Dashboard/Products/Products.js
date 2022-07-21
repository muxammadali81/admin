import React from "react";
import Sidebar from "../Sidebar";
import ProductCard from "./ProductCard";

function Products() {
  return (
    <div className="wrapper">
      <Sidebar />
      <ProductCard />
    </div>
  );
}

export default Products;
