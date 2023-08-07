import React from "react";
import "../styles/socials.css";

function SocialMedia() {
  return (
    <div className="socials-ctnr">
      <h3 className="ig-header"> Join our Instagram tribe @PuraVida</h3>
      <div className="social-media-grid">
        <div className="grid-item">
          {" "}
          <img
            src={require("../image/social1.png")}
            alt="Category 5"
            className="grid-item"
          />{" "}
        </div>
        <div className="grid-item">
          {" "}
          <img
            src={require("../image/social2.png")}
            alt="Category 5"
            className="grid-item"
          />
        </div>
        <div className="grid-item">
          {" "}
          <img
            src={require("../image/social6.png")}
            alt="Category 5"
            className="grid-item"
          />
        </div>
        <div className="grid-item">
          {" "}
          <img
            src={require("../image/social4.png")}
            alt="Category 5"
            className="grid-item"
          />
        </div>
        <div className="grid-item">
          {" "}
          <img
            src={require("../image/social3.png")}
            alt="Category 5"
            className="grid-item"
          />
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
