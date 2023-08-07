import React from "react";
import "../../styles/occasion.css";
import About from "../homescreen/About";
import NewCollection from "./NewCollection";

function Occassions() {
  return (
    <div className="occasion">
      <div className="occasion-content">
        <p className="about-message">
          Every piece is designed with the Pura Vida muse in mind. <br />
          The romantic yet powerful, strong yet feminine, and simple yet elegant
          woman. Hand made and hand dyed in Bali by our talented team of
          artisans.
        </p>
      </div>

      <div className="occasion-section">
        <div className="image-row">
          {/* Add three wedding images here */}

          <h3 className="cta">
            ROMA COLLECTION
            <br /> <span className="shop-btn"> Shop Now </span>
          </h3>

          <img
            src={require("../../image/wedding1.png")}
            alt="Category 5"
            className="occasion-img"
          />
          <img
            src={require("../../image/wedding2.png")}
            className="none occasion-img"
            alt="Category 5"
          />
          <img
            src={require("../../image/wedding3.png")}
            className="none occasion-img noneee"
            alt="Category 5"
          />
          <img
            src={require("../../image/bottom.png")}
            className="none occasion-img nonee"
            alt="Category 5"
          />
        </div>
      </div>

      <div className="occasion-section">
        <div className="image-row none">
          {/* Add three beach images here */}

          <img
            src={require("../../image/beach1.png")}
            alt="Category 5"
            className="none"
          />
          <img
            src={require("../../image/beach2.png")}
            className="none occasion-img"
            alt="Category 5"
          />
          <img
            src={require("../../image/beachh.png")}
            className="none occasion-img noneee"
            alt="Category 5"
          />
          <img
            src={require("../../image/beach.png")}
            className="none occasion-img nonee"
            alt="Category 5"
          />
          <h3 className="cta">
            {" "}
            SUMMER 23'
            <br /> <span className="shop-btn"> Shop Now </span>
          </h3>
        </div>
      </div>

      <NewCollection />

      <About />

      <div className="occasion-section">
        <div className="image-row">
          <h3 className="cta">
            BESTSELLERS
            <br /> <span className="shop-btn"> Shop Now </span>
          </h3>
          {/* Add three resort images here */}
          <img
            src={require("../../image/resort1.png")}
            alt="Category 5"
            className="occasion-img"
          />
          <img
            src={require("../../image/resort2.png")}
            className="none occasion-img"
            alt="Category 5"
          />
          <img
            src={require("../../image/resort3.png")}
            className="none occasion-img noneee"
            alt="Category 5"
          />
          <img
            src={require("../../image/bestSeller.png")}
            className="none occasion-img nonee"
            alt="Category 5"
          />
        </div>
      </div>
    </div>
  );
}

export default Occassions;
