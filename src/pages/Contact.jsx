import React from "react";
import Hero from "../components/Hero";
import ContactInfo from "../components/ContactInfo";

export default function Contact() {
  return (
    <div>
      <div id="Contact-section">
        <Hero section="contact"/>
      </div>
        <ContactInfo/>    
    </div>
  );
}
