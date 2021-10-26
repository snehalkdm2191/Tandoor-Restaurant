import React from "react";
import { Link } from "react-router-dom";
//Project files
import { useMenu } from "../state/MenuProvider";

export default function CategoryPage() {
  const { bbqMenu } = useMenu();

  const FoodDetails = [
    ...new Map(bbqMenu.map((item) => [item["type"], item])).values(),
  ];

  // No comments in production
  console.log("CategoryPage.jsx FoodDetails", FoodDetails);

  // Component
  const CategoryItems = FoodDetails.map((foodList, index) => (
    <Link key={index} className="category-item" to={`/menu/${foodList.type}`}>
      <h4>{foodList.type}</h4>
      <img
        src={require(`../assets/images/${foodList.type}.jpg`).default}
        alt={foodList.type}
      />
    </Link>
  ));

  return (
    <div id="Home-categories-section" className="row">
      {/* No logic inside JSX (we mention this before) */}
      {CategoryItems}
    </div>
  );
}

/**
 * .category-item {
 *  // code for multi column layout (col-8)
 * }
 *
 * .category-item h4 {
 *  //
 * }
 *
 * .category-item img {
 *
 * }
 */
