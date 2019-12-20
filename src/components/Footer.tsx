import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Logo from "../images/logo.png";

const Footer: React.FC = () => {
  const date = new Date();

  return (
    <Card className="text-center">
      <Card.Footer className="text-muted">
        <Row>
          <Col sm={2}>
            <img src={Logo} width="100px" height="100px" alt="logo" />
          </Col>
          <Col sm={9}>
            Agro Info &copy; Copyright {date.getFullYear()}. All rights
            reserved.
            <hr />
            <div className="m-3">
              Agro Info web application was made by Ioan Zîcu, as a university
              project.
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
