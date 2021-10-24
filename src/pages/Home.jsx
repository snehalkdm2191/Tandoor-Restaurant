import React from "react";
import Hero from "../components/Hero";

// As mentioned on the review spreadhseet, this home page looks empty is just a lnk to see the menu
export default function Home() {
  return (
    <div>
      <div id="Home-section">
        <Hero section="Home" />
      </div>
    </div>
  );
}
