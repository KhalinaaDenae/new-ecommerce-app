import React from "react";
import { Link } from "react-router-dom";
import "../styles/product.css";
function Product({ product }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product._id}`}>
        <img className="product-image" src={product.image} alt={product.name} />
      </Link>

      <div className="product-details">
        <Link to={`/product/${product._id}`}>
          <h6 className="product-name">{product.name}</h6>
        </Link>

        <h3 className="product-price">${product.price}</h3>
      </div>
    </div>
  );
}

export default Product;
