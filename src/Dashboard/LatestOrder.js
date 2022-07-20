import React from "react";

function LatestOrder() {
  const table = [
    {
      id: 1,
      product: "Iphone 13 Pro",
      status: "Delivered",
      amount: "$400.00",
    },
    {
      id: 2,
      product: "Mackbook Pro",
      status: "Pending",
      amount: "$288.00",
    },
    {
      id: 3,
      product: "Apple Watch",
      status: "Canceled",
      amount: "$500.00",
    },
    {
      id: 4,
      product: "Microsoft Book",
      status: "Delivered",
      amount: "$100.00",
    },
    {
      id: 5,
      product: "Apple Pen",
      status: "Delivered",
      amount: "$60.00",
    },
    {
      id: 6,
      product: "Airpods",
      status: "Delivered",
      amount: "$80.00",
    },
  ];
  return (
    <div className="latesorder">
      <h3>Latest Orders</h3>
      <div className="lates-table">
        <div className="lates-head">
          <h4>Products</h4>
          <h4>Order ID</h4>
          <h4>Date</h4>
          <h4>Customer name</h4>
          <h4>Status</h4>
          <h4>Amount</h4>
          <h4>Action</h4>
        </div>
        {table.map((item) => (
          <div className="lates-body">
            <span>{item.product}</span>
            <span>#11232</span>
            <span>Jun 29,2022</span>
            <span>Afaq Karim</span>
            <span>{item.status}</span>
            <span>{item.amount}</span>
            <div className="lates-dout">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestOrder;
