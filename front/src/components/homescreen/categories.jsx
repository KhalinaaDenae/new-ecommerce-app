import React from "react";
import "../../styles/categories.css";

function Categories() {
  return (
    <div className="categories">
      <h2>Shop by Category</h2>
      <div className="image-grid">
        <div className="image-container">
          <img src={require("../../image/category1.png")} alt="Category 1" />
          <div className="overlay">
            <p> Dresses </p>
          </div>
        </div>
        <div className="image-container">
          <img src={require("../../image/category2.png")} alt="Category 2" />
          <div className="overlay">
            <p> Two - Piece Sets </p>
          </div>
        </div>
        <div className="image-container">
          <img src={require("../../image/category3.png")} alt="Category 3" />
          <div className="overlay">
            <p> Loungewear </p>
          </div>
        </div>
        <div className="image-container">
          <img src={require("../../image/category4.png")} alt="Category 4" />
          <div className="overlay">
            <p> Tops </p>
          </div>
        </div>
        <div className="image-container">
          <img src={require("../../image/category5.png")} alt="Category 5" />
          <div className="overlay">
            <p> Jumpsuits </p>
          </div>
        </div>
        <div className="image-container">
          <img src={require("../../image/category6.png")} alt="Category 6" />
          <div className="overlay">
            <p> Bottoms </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
