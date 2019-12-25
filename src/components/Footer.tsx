import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Logo from "./Logo";

const Footer: React.FC = () => {
  const date = new Date();

  return (
    <Card className="text-center">
      <Card.Footer className="text-muted">
        <Row>
          <Col sm={2}>
            <Logo />
          </Col>
          <Col sm={9}>
            Agro Info &copy; Copyright {date.getFullYear()}. All rights
            reserved.
            <hr />
            <div className="m-3">
              Agro Info web application was made by{" "}
              <a href="https://www.linkedin.com/in/ioan-z%C3%AEcu-29109b161/">
                Ioan Zîcu
              </a>
              , as a university project.
              <br />
              All information displayed on the site has educational porposes and
              is not refered to the real company.
            </div>
          </Col>
          <Col sm={1}></Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default Footer;
