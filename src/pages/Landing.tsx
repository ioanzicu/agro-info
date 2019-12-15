import React from "react";
import BootrtapNavbar from "../components/Navbar";
import BootrtapJumbotron from "../components/Jumbatron";
import Slider from "../components/Slider";
import Testemonials from "../components/Testemonials";
import Footer from "../components/Footer";

const Landing: React.FC = () => {
  return (
    <>
      <div>
        <BootrtapNavbar />
        <BootrtapJumbotron />
        <Slider />
        <Testemonials />
      </div>
      <Footer />
    </>
  );
};

export default Landing;
