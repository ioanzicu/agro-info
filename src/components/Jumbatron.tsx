import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const BootrtapJumbotron: React.FC = (props: any) => {
  const content = (
    <>
      <h1>Welcom to the Agro Info App</h1>
      <p>
        Discover an easy way to have access to the weather data necessary for
        your agriculture business by the requested location.
      </p>
    </>
  );

  return (
    <Jumbotron
      fluid
      className="mb-0"
      style={{ backgroundColor: "rgba(51,51,51,0.7)", color: "#fff" }}
    >
      <Container>{props.children ? props.children : content}</Container>
    </Jumbotron>
  );
};

export default BootrtapJumbotron;
