import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About: React.FC = () => {
  const bgImage =
    "https://images.unsplash.com/photo-1547336863-6491b008052b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=914&q=80";

  const content =
    "Agro Info is a web platform which helps peoples around the world to have information about the weather. This information can be used for personal or agriculture business interests.";

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
        <div
          style={{
            backgroundColor: "rgba(220, 220, 220, 0.9)",
            borderRadius: "0.7rem",
            height: "60vh"
          }}
        >
          <h1 className="pt-5">About Agro Info</h1>
          <Row className="justify-content-md-center">
            <div className="m-5" style={{ width: "60%" }}>
              {content}
            </div>
          </Row>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default About;
