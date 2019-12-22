import React, { useState, FormEvent, ChangeEvent } from "react";
import { Form, Container, Button } from "react-bootstrap";
import fire from "../helpers/firebaseConfig";
import Navbar from "../components/Navbar";

const SignIn = () => {
  const [validated, setValidated] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit: any = (event: FormEvent<HTMLInputElement>) => {
    const form = event.currentTarget;
    console.log(event.currentTarget);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const signIn: any = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(email.trim(), password)
      .then(u => {})
      .catch((error: any) => {
        console.log("Sign In Error", error);
      });
  };

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
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
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
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setPassword(event.target.value)
              }
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please Enter Password.
            </Form.Control.Feedback>
          </Form.Group>
          <Button className="mt-3 w-100" onClick={signIn} type="submit">
            Sign In
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default SignIn;
