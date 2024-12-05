import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
          <h2 className="page-heading about-heading">About Us</h2>
            <p>
            With Doctor's Appointment you can accept bookings via various booking channels.
            Pick your favourite ones or enable all of them to ensure that 
            you have the maximum online visibility!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
