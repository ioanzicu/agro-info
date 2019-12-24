import React from "react";
import { Container, Image, Table, Row, Col } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact: React.FC = () => {
  const bgImage =
    "https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1253&q=80";
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <Navbar />
      <Container className="mt-5 mb-5 pb-2">
        <div style={{ height: "60vh" }}>
          <h1>Contacts</h1>
          <div className="justify-content-center align-self-center"></div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
