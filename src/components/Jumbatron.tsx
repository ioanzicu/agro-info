import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const BootrtapJumbotron: React.FC = () => {
  return (
    <Jumbotron fluid className="mb-0">
      <Container>
        <h1>Fluid jumbotron</h1>
        <p>
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </Container>
    </Jumbotron>
  );
};

export default BootrtapJumbotron;
