import React from "react";
import "../../styles/newArrivals.css";
function NewArrival() {
  return (
    <div className="new-arrivals">
      <div className="new-arrivals-content">
        <p>
          Our SS23 collection is an interplay between tranquility and adventure
          ~ an invitation to embrace a sense of unfiltered femininity that
          mimics our earth's natural rhythms and exotic dreamscapes.
          <br />
          Embrace the unknown and run headlong into what excites you most.
        </p>
      </div>
      <div className="header-button">
        <h3>New Arrivals</h3>
        <button>View All</button>
      </div>
      <div className="image-row">
        <img src={require("../../image/img1.png")} alt="new dress" />

        <img src={require("../../image/img2.png")} alt="new dress" />

        <img src={require("../../image/img3.png")} alt="new dress" />
      </div>
    </div>
  );
}

export default NewArrival;
