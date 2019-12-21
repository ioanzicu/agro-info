import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const LeftOrientation = (imageSrc: string, text: string) => (
  <Row>
    <Col xs={6} sm={6} md={6}>
      <Image src={imageSrc} rounded fluid />
    </Col>
    <Col xs={6} sm={6} md={6}>
      <p>{text}</p>
    </Col>
  </Row>
);

const RightOrientation = (imageSrc: string, text: string) => (
  <Row>
    <Col xs={6} sm={6} md={6}>
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
  text: string;
  imageSrc: string;
}

const BenefitSection: React.FC<BenefitSectionProps> = ({
  orientationLeft,
  orientationRight,
  text,
  imageSrc
}) => (
  <Container className="pt-5 pb-5">
    {orientationLeft && LeftOrientation(imageSrc, text)}
    {orientationRight && RightOrientation(imageSrc, text)}
  </Container>
);

export default BenefitSection;
