import React from "react";
import { Container, Table, Col, Row } from "react-bootstrap";
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
        <div
          className="boxShadow"
          style={{
            backgroundColor: "rgba(220, 220, 220, 0.8)",
            borderRadius: "0.7rem",
            height: "60vh"
          }}
        >
          <h1 className="pt-5">Contacts</h1>
          <hr style={{ width: "70%" }} />
          <Row className="justify-content-md-center">
            <Col md="auto">
              <Table
                bordered
                className="p-5 mt-3"
                style={{
                  backgroundColor: "rgb(220, 220, 220)",
                  borderRadius: "1rem"
                }}
                responsive
                striped
                hover
              >
                <thead>
                  <tr>
                    <th colSpan={2}># How you can reach use</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <i className="fas fa-phone-alt"></i>
                    </td>
                    <td>+48 034 234 134</td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fas fa-at"></i>
                    </td>
                    <td>agro-info@gmail.com</td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fas fa-map-marked-alt"></i>
                    </td>
                    <td>Katowice, Poland, 40-001</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
