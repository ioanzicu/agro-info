import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container className="mt-5 mb-5 pb-2">
        <h1>About Us</h1>
      </Container>
      <Footer />
    </>
  );
};

export default About;
