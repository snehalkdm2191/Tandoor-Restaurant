import React from "react";

export default function ProductDetails({ productData }) {
  return (
    <div className="product-details-section container">
      {productData.map((product) => (
        <>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h6 className="price-data">Price : {product.price} Sek</h6>
        </>
      ))}
    </div>
  );
}
