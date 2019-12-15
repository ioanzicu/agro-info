import React from "react";
import NavigationMenu from "../components/Navbar";
import Slider from "../components/Slider";

const Landing: React.FC = () => {
  return (
    <div>
      <NavigationMenu />
      <Slider />
      <p>Landing Page</p>
    </div>
  );
};

export default Landing;
