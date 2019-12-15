import React from "react";
import BootrtapNavbar from "../components/Navbar";
import BootrtapJumbotron from "../components/Jumbatron";
import Slider from "../components/Slider";
import BenfitSection from "../components/BenefitSection";
import Testemonials from "../components/Testemonials";
import Footer from "../components/Footer";

const Landing: React.FC = () => {
  return (
    <>
      <div>
        <BootrtapNavbar />
        <BootrtapJumbotron />
        <Slider />
        <BenfitSection
          orientationLeft={true}
          imageSrc="https://images.unsplash.com/photo-1555773419-9f97a6f48320?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
          text="Some super description goes here"
        />
        <BenfitSection
          orientationRight={true}
          imageSrc="https://images.unsplash.com/photo-1494249465471-5655b7878482?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
          text="Some super description goes here"
        />
        <hr />
        <Testemonials />
      </div>
      <Footer />
    </>
  );
};

export default Landing;
