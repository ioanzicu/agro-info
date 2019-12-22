import React, { useState, FormEvent, ChangeEvent } from "react";
import { withRouter } from "react-router-dom";
import { Form, Container, Button } from "react-bootstrap";
import Navbar from "../components/Navbar";
import * as ROUTES from "../constants/routes";
import firebase from "../helpers/firebase";

const Register = (props: any) => {
  const [validated, setValidated] = useState(false);
  // Form States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [quote, setQuote] = useState("");

  const handleSubmit: any = (event: FormEvent<HTMLInputElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  async function onRegister() {
    try {
      console.log("1");
      await firebase.register(name, email, password);
      // add quote in the firestore db
      console.log("2");

      await firebase.addQuote(quote);
      // redirect to the dashboard page
      console.log("3");

      props.history.replace(ROUTES.DASHBOARD);
    } catch (error) {
      alert(`Registration error ${error.message}`);
    }
  }

  return (
    <>
      <Navbar />
      <Container>
        <h1 className="mt-4 mb-3">Register</h1>
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
          <Form.Group controlId="formGroupName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Full Name"
              autoFocus
              value={name}
              onChange={(event: ChangeEvent<HTMLSelectElement>) =>
                setName(event.target.value)
              }
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please Enter your Full Name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              required
              type="email"
              value={email}
              onChange={(event: ChangeEvent<HTMLSelectElement>) =>
                setEmail(event.target.value)
              }
              placeholder="Email"
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
              value={password}
              onChange={(event: ChangeEvent<HTMLSelectElement>) =>
                setPassword(event.target.value)
              }
              placeholder="Password"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please Enter Password.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formGroupName">
            <Form.Label>Favorite Quote</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Quote"
              autoFocus
              value={quote}
              onChange={(event: ChangeEvent<HTMLSelectElement>) =>
                setQuote(event.target.value)
              }
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please Enter your Favourite Quote.
            </Form.Control.Feedback>
          </Form.Group>
          <Button className="mt-3 w-100" onClick={onRegister} type="submit">
            Register
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default withRouter(Register);
