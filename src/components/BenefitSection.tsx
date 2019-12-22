import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const LeftOrientation = (imageSrc: string, title: string, text: string) => (
  <>
    <Row>
      <Col xs={6} sm={6} md={6}>
        <Image src={imageSrc} rounded fluid />
      </Col>
      <Col
        xs={6}
        sm={6}
        md={6}
        className="justify-content-center align-self-center text-justify"
      >
        <h2 className="mb-4 text-center">{title}</h2>
        <p>{text}</p>
      </Col>
    </Row>
  </>
);

const RightOrientation = (imageSrc: string, title: string, text: string) => (
  <Row>
    <Col
      xs={6}
      sm={6}
      md={6}
      className="justify-content-center align-self-center text-justify"
    >
      <h2 className="mb-4 text-center">{title}</h2>
      <p>{text}</p>
    </Col>
    <Col xs={6} sm={6} md={6}>
      <Image src={imageSrc} rounded fluid />
    </Col>
  </Row>
);

interface BenefitSectionProps {
  orientationLeft?: boolean;
  orientationRight?: boolean;
  title: string;
  text: string;
  imageSrc: string;
}

const BenefitSection: React.FC<BenefitSectionProps> = ({
  orientationLeft,
  orientationRight,
  title,
  text,
  imageSrc
}) => (
  <Container className="p-5 mt-5 mb-5">
    {orientationLeft && LeftOrientation(imageSrc, title, text)}
    {orientationRight && RightOrientation(imageSrc, title, text)}
  </Container>
);

export default BenefitSection;
