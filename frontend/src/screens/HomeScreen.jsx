import React from "react";
import Product from "../components/Product";
import { useGetProductsQuery } from "../slices/productApiSlice";
import "../styles/HomeScreen.css";
function HomeScreen() {
  const { data, isSuccess, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>; // Show a loading indicator while data is being fetched.
  }

  if (!isSuccess) {
    return <div>Error fetching data</div>; // Handle error state when data fetching fails.
  }

  return (
    <div className="product-page">
      <div className="product-grid">
        {data.products.map((product) => (
          <div key={product._id} className="product-item">
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
