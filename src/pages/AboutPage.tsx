import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container className="mt-5 mb-5 pb-2">
        <div style={{ height: "60vh" }}>
          <h1>About Us</h1>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default About;
