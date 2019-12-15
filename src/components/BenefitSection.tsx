import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const LeftOrientation = (imageSrc: string, text: string) => (
  <Row>
    <Col xs={6} md={6}>
      <Image src={imageSrc} rounded />
    </Col>
    <Col xs={6} md={6}>
      <p>{text}</p>
    </Col>
  </Row>
);

const RightOrientation = (imageSrc: string, text: string) => (
  <Row>
    <Col xs={6} md={6}>
      <p>{text}</p>
    </Col>
    <Col xs={6} md={6}>
      <Image src={imageSrc} rounded />
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
  <div className="m-5">
    <Container className="p-5">
      {orientationLeft ? LeftOrientation(imageSrc, text) : null}
      {orientationRight ? RightOrientation(imageSrc, text) : null}
    </Container>
  </div>
);

export default BenefitSection;
