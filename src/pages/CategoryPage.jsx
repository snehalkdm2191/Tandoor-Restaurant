import React from "react";
import { Link } from "react-router-dom";
import dessertImg from "../assets/images/bbq-dessert.jpg";
import drinkImg from "../assets/images/bbq-drink.png";
import dishImg from "../assets/images/bbq-dish.jpg";

export default function CategoryPage() {
  return (
    <div id="Home-categories-section">
      <article className="home-category">
        <img className="image" src={dishImg} alt="Dish" />
        <div className="Home-category-text">
          <div className="center">
            <h2>Dishes</h2>
            <p>
              A vegan lifestyle prevents a tremendous amount of animal slaughter
              and suffering. It offers a potent way to shrink our environmental
              footprint, especially in regard to climate change. And a
              well-planned vegan diet can fuel the highest levels of fitness,
              while reducing our risk of various chronic diseases. Plus, the
              food is insanely delicious{" "}
            </p>
            <Link
              exact
              to={{
                pathname: `/menu/Dish`,
                state: { name: "Dish" },
              }}
              className="btn btn-dish"
              activeClassName="active-link"
            >
              View Menu
            </Link>
          </div>
        </div>
      </article>

      <article className="home-category">
        <img className="image" src={dessertImg} alt="Dessert" />
        <div className="Home-category-text">
          <div className="center">
            <h2>Desserts</h2>
            <p>
              Nirvana Desserts offers you a wide range of delicious desserts and
              cakes.Deliciously vegan and gluten free but with no compromise on
              taste. Our extensive range of delicious desserts and cakes answer
              almost any sweet bakery need. With thousands of tempting bakes
              across our business, including snacking, premium desserts, rustic
              handmade cakes and bespoke development, we are sure to have the
              right treat to tempt you.
            </p>
            <Link
              exact
              to={{
                pathname: `/menu/Dessert`,
                state: { name: "Dessert" },
              }}
              className="btn btn-deserts"
              activeClassName="active-link"
            >
              View Menu
            </Link>
          </div>
        </div>
      </article>

      <article className="home-category">
        <img className="image" src={drinkImg} alt="Drink" />
        <div className="Home-category-text">
          <div className="center">
            <h2>Drinks</h2>
            <p>
              When it comes to cocktails, I like them to be refreshing, and this
              mocktail is the perfect summer refreshment. Sparkling water gives
              it the bubbly replacement of alcohol, whilst kombucha adds even
              more fizziness and flavour – and did I mention this will not only
              boost your good gut bacteria, but that the chia seeds will also
              give you a great hit of healthy Omega oils? Green Matters compiled
              an extensive roundup of vegan Nirvana drinks to try, aside from
              black coffee or cold brew with almond milk, of course. The options
              are truly endless, and trust us, your coffee run is about to get
              exponentially more interesting.
            </p>
            <Link
              exact
              to={{
                pathname: `/menu/Drink`,
                state: { name: "Drink" },
              }}
              className="btn btn-drinks"
              activeClassName="active-link"
            >
              View Menu
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
