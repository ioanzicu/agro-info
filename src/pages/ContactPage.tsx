import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container className="mt-5 mb-5 pb-2">
        <h1>Contacts</h1>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
