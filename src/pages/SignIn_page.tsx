import React from "react";
import { Form, Container, Button } from "react-bootstrap";
import Navbar from "../components/Navbar";

const SignIn = () => {
  return (
    <>
      <Navbar />
      <Container>
        <h1 className="m-5">Sign In</h1>
        <Form
          style={{
            backgroundColor: "#F8F9FA",
            border: "1px solid #000",
            borderRadius: "5px"
          }}
          className="p-4 w-50 mx-auto"
        >
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button className="m-3 w-50" type="submit">
            Sign In
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default SignIn;
