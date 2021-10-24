import React from "react";
import Hero from "../components/Hero";
import ContactInfo from "../components/ContactInfo";

// Component lenght -1 Why if is only 14 lines of code withouth theese comments?
// Becasuee did not refactor the component, just hided the complexity and moved into ContactInfo.
// The correct approach was to break down the contact info items into reusable components
export default function Contact() {
  return (
    <div>
      <div id="Contact-section">
        <Hero section="contact" />
      </div>
      <ContactInfo />
    </div>
  );
}
