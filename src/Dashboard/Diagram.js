import React from "react";
import { Arrowtop } from "./assets/Svg";

function Diagram() {
  const inputRange = [
    {
      id: 1,
      title: "Jeans",
      number: 70,
    },
    {
      id: 2,
      title: "Shirts",
      number: 40,
    },
    {
      id: 3,
      title: "Belts",
      number: 60,
    },
    {
      id: 4,
      title: "Caps",
      number: 80,
    },
    {
      id: 5,
      title: "Others",
      number: 20,
    },
  ];

  return (
    <div className="diagram">
      <div className="diagram-text">
        <h1>Dashboard</h1>
      </div>
      <div className="diagram-cards">
        {[1, 2, 3].map((item) => (
          <div className="diagram-card">
            <div className="card-text">
              <h3>Todays Sales</h3>
              <h1>$20.4K</h1>
              <span>We have sold 123 items</span>
            </div>
            <div className="circle"></div>
          </div>
        ))}
      </div>
      <div className="diagram-item">
        <div className="diagram-rev">
          <div className="rev-text">
            <h2>Total Revenue</h2>
            <div className="rev-item">
              <div className="rev-end">
                <div className="rev-bg"></div>
                <span>Profit</span>
              </div>
              <div className="rev-end">
                <div className="rev-bg"></div>
                <span>Loss</span>
              </div>
            </div>
          </div>
          <div className="rev-price">
            <h3>$50.4K</h3>
            <Arrowtop />
            <span>5% than last month</span>
          </div>
          <section className="graph">
            <div className="legend">
              <span>0</span>
              <span>20k</span>
              <span>50k</span>
              <span>60k</span>
              <span>80k</span>
              <span>100k</span>
            </div>
            <div className="bar" style={{ height: "160px" }}>
              <span className="label">Jan</span>
            </div>
            <div className="bar" style={{ height: "130px" }}>
              <span className="label">Feb</span>
            </div>
            <div className="bar" style={{ height: "135px" }}>
              <span className="label">Mar</span>
            </div>
            <div className="bar" style={{ height: "113px" }}>
              <span className="label">Apr</span>
            </div>
            <div className="bar" style={{ height: "130px" }}>
              <span className="label">May</span>
            </div>
            <div className="bar" style={{ height: "71px" }}>
              <span className="label">Jun</span>
            </div>
            <div className="bar" style={{ height: "113px" }}>
              <span className="label">Jul</span>
            </div>
            <div className="bar" style={{ height: "135px" }}>
              <span className="label">Aug</span>
            </div>
            <div className="bar" style={{ height: "124px" }}>
              <span className="label">Sep</span>
            </div>
          </section>
        </div>
        <div className="rev-inpreing">
          <h2>Most Sold Items </h2>
          {inputRange.map((item) => (
            <div className="inp-reing">
              <div className="reing-text">
                <span>{item.title}</span>
                <div className="value">{item.number}%</div>
              </div>
              <div className="progress-full">
                <div class="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span className="title"></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Diagram;
