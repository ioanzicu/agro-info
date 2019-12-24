import React, { useEffect } from "react";
import firebase from "firebase";
import { login } from "../store/authActions";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbatron";
import Slider from "../components/Slider";
import BenfitSection from "../components/BenefitSection";
import Testemonials from "../components/Testemonials";
import Footer from "../components/Footer";

const Landing: React.FC = () => {
  return (
    <>
      <div>
        <Navbar />
        <Jumbotron />
        <Slider />
        <BenfitSection
          orientationLeft={true}
          imageSrc="https://images.unsplash.com/photo-1555773419-9f97a6f48320?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
          title="Reduce Unwanted Impacts"
          text="&nbsp;&nbsp;Climate variability leads to economic and food security risks throughout the world because of its major influences on agriculture. Accurate forecasts of climate can potentially allow farmers and others in agriculture to make decisions to reduce unwanted impacts or take advantage of expected favorable climate."
        />
        <hr />
        <BenfitSection
          orientationRight={true}
          imageSrc="https://images.unsplash.com/photo-1567974772901-1365e616baa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
          title="Economic Impact"
          text="&nbsp;&nbsp;Agriculture is highly dependent on climate and, as such, crop yield variability is affected by year-to-year climatic variability, with regards to both extreme events and changes in historical patterns of regional climate (Hoogenboom, 2000; Ogallo et al., 2000). This vulnerability could have significant effects on crop production because of the many uncertainties for the growing season (Jones et al., 2000), and may result in economic and food security risks in some parts of the world."
        />
        <hr />
        <Testemonials />
      </div>
      <Footer />
    </>
  );
};

export default Landing;
