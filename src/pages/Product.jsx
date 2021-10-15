import React from "react";
import { useParams, Link } from "react-router-dom";
//Project files
import { useMenu } from "../state/MenuProvider";
import ProductDetails from "../components/ProductDetails";

export default function Product() {
  // Global state
  const { id } = useParams();
  const { bbqMenu } = useMenu();

  const productDetails = bbqMenu.filter((item) => item.name === id);
  return (
    <div>
      <div id="product-section">
        {productDetails.map((details) => (
          <img
            className="product-img"
            src={details.imgUrl}
            alt={details.name}
          />
        ))}
      </div>
        <ProductDetails productData={productDetails} />

      {productDetails.map((details) => (
        <Link
          className="btn back-button"
          to={{
            pathname: `/menu/${details.type}`,
            state: { name: details.type },
          }}
        >
          <span>Back To Menu</span>
        </Link>
      ))}
    </div>
  );
}