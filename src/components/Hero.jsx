import React from "react";
import VideoPlayer from "./VideoPlayer";
import HomeBg from "../assets/images/hero-bg.mp4";
import dessertImg from "../assets/images/bbq-dessert.jpg";
import drinkImg from "../assets/images/bbq-drink.png";
import dishImg from "../assets/images/bbq-dish.jpg";
import contactImg from "../assets/images/contact.jpg";

export default function Hero({ section }) {
  switch (section) {
    case "Dish":
      return <img className="hero-img" src={dishImg} alt="Dish" />;
    case "Dessert":
      return <img className="hero-img" src={dessertImg} alt="Dessert" />;
    case "Drink":
      return <img className="hero-img" src={drinkImg} alt="Drink" />;
    case "contact":
      return <img className="contact-img" src={contactImg} alt="contact" />;
    default:
      return <VideoPlayer key="Home" vidLink={HomeBg}/>;
  }
}
