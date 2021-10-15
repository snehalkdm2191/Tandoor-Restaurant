import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
//Project files
import { useMenu } from "../state/MenuProvider";

export default function MenuPageList() {
  const { id } = useParams();
  const { bbqMenu } = useMenu();
  
  const FoodDetails = bbqMenu.filter((item) => item.type === id);

  return (
    <div className="category-list container">
      <h2>Super Delicious Menu</h2>
      {FoodDetails.map((foodList) => (
        <div className="row category-row">
          <div className="col-md-4">
            <div className="category-img-div">
            <Link
              to={{
                pathname: `/product/${foodList.name}`,
                state: { name: foodList.name },
              }}
            >
            <img
              className="category-food-img"
              src={foodList.imgUrl}
              alt={foodList.name}
            />
            </Link>
            </div>
          </div>
          <div className="col-md-8 category-text">
            <Link
              to={{
                pathname: `/product/${foodList.name}`,
                state: { name: foodList.name },
              }}
            >
             <h4>{foodList.name}</h4>
            </Link>
            <p className="product-para">{foodList.description}</p>
            <Link className="btn btn-view"
              to={{
                pathname: `/product/${foodList.name}`,
                state: { name: foodList.name },
              }}
            >
             View
            </Link>
          </div>
        </div>
      ))} 
    </div>
  );
}