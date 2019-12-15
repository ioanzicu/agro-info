import React from "react";
import BootrtapNavbar from "../components/Navbar";
import BootrtapJumbotron from "../components/Jumbatron";
import BootrtapSlider from "../components/Slider";
import Footer from "../components/Footer";

const Landing: React.FC = () => {
  return (
    <>
      <div>
        <BootrtapNavbar />
        <BootrtapJumbotron />
        <BootrtapSlider />
        <p>Landing Page</p>
      </div>
      <Footer />
    </>
  );
};

export default Landing;
