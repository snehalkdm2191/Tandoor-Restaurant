import React from "react";
import { useParams, Link } from "react-router-dom";
//Project files
import { useMenu } from "../state/MenuProvider";

export default function CategoryPage() {
  const { bbqMenu } = useMenu();

  const FoodDetails = [
    ...new Map(bbqMenu.map((item) => [item["type"], item])).values(),
  ];
  console.log(FoodDetails);
  return (
    <div id="Home-categories-section" className="row">
      {FoodDetails.map((foodList) => (
        <div className="col-sm-6">
          <Link
            to={{
              pathname: `/menu/${foodList.type}`,
              state: { id: foodList.type },
            }}
          >
            <div class="type-overlay-text">
              <h4 className="btn btn-category-type">{foodList.type}</h4>
            </div>
            <img
              data-toggle="tooltip"
              data-placement="top"
              title={`Click here for ${foodList.type} menu.`}
              className="category-image"
              src={require(`../assets/images/${foodList.type}.jpg`).default}
              alt={foodList.type}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
