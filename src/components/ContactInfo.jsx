import React, { useState } from "react";
import ContactForm from "./ContactForm";

export default function ContactInfo() {
  const [zoom] = useState(4);
  const options = `&output=embed&z=${zoom}`;
  const googleMaps = `https://maps.google.com/maps?q=59.334591,18.063240&hl=en&z=14&amp${options}`;
  return (
    <div className="contact-info">
      <div className="row">
        <div className="col-md-12 text-center contact-timings">
          {/* this can be smaller components that are created on the fly using a json */}
          <h2>Opening Times</h2>
          <h5>Monday to Thursday</h5>
          <span>8:00 am - 9:00 pm</span>
          <h5>Friday to Saturday</h5>
          <span>8:00 am - 12:00 pm</span>
          <h5>Sunday</h5>
          <span>8:00 am - 10:00 pm</span>
        </div>
        {/* Book Your Table and Address could be 2 sub components also created via json */}
        <div className="col-md-12 contact-form">
          <h2>Book Your Table</h2>
          <ContactForm />
        </div>
        <div className="col-md-12 text-center contact-Address">
          <h2>Address</h2>
          <p>Stockholm,Sweden</p>
        </div>
        <div id="frame-container">
          <iframe
            className="map-frame"
            src={googleMaps}
            title="Insta track map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
