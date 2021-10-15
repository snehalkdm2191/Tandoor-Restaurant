import React from "react";
import { useParams } from "react-router-dom";
import MenuPageList from "../components/MenuPageList";
import Hero from "../components/Hero";

export default function MenuPage() {
  const { id } = useParams();
  return (
    <div>
      <div id="menu-section">
        <Hero section={id}/>
      </div>
      <MenuPageList/>
    </div>
  );
}
