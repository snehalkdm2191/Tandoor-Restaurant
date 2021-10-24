import React from "react";
import VideoPlayer from "./VideoPlayer";
import contactImg from "../assets/images/contact.jpg";
import HomeBg from "../assets/images/hero-bg.mp4";

// Nesting -1
// This component looks super complex.
// You could create separate components and then call them on each case
export default function Hero({ section }) {
  switch (section) {
    case "Home":
      return <VideoPlayer key="Home" vidLink={HomeBg} />;
    case "contact":
      return <img className="contact-img" src={contactImg} alt="contact" />;
    default:
      return (
        <img
          className="hero-img"
          src={require(`../assets/images/${section}.jpg`).default}
          alt={section}
        />
      );
  }
}
