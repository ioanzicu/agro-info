import React, { useState, FormEvent, ChangeEvent } from "react";
import { withRouter } from "react-router-dom";
import { Form, Container, Button } from "react-bootstrap";
import * as ROUTES from "../constants/routes";
import Navbar from "../components/Navbar";
import firebase from "../helpers/firebase";

const SignIn = (props: any) => {
  const [validated, setValidated] = useState(false);
  // Form State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit: any = (event: FormEvent<HTMLInputElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  async function onSignIn() {
    try {
      await firebase.login(email, password);
      // redirect to the dashboard page
      props.history.replace(ROUTES.DASHBOARD);
    } catch (error) {
      alert(`SignIn error ${error.message}`);
    }
  }

  return (
    <>
      <Navbar />
      <Container>
        <h1 className="mt-4 mb-3">Sign In</h1>
        <Form
          style={{
            backgroundColor: "#F8F9FA",
            border: "1px solid #000",
            borderRadius: "5px"
          }}
          className="p-4 w-50 mx-auto"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event: ChangeEvent<HTMLSelectElement>) =>
                setEmail(event.target.value)
              }
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please Enter a valid Email Address.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event: ChangeEvent<HTMLSelectElement>) =>
                setPassword(event.target.value)
              }
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please Enter Password.
            </Form.Control.Feedback>
          </Form.Group>
          <Button className="mt-3 w-100" onClick={onSignIn} type="submit">
            Sign In
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default withRouter(SignIn);
