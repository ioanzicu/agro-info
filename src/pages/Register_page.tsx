import React, { useState, FormEvent, ChangeEvent } from "react";
import { Form, Container, Button } from "react-bootstrap";
import fire from "../helpers/firebaseConfig";
import Navbar from "../components/Navbar";

const Register = () => {
  const [validated, setValidated] = useState(false);

  const [name, setName] = useState("");
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

  const register: any = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(u => {})
      .catch((error: any) => console.log("Registration Error", error));
  };

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
          <Button className="mt-3 w-100" onClick={register} type="submit">
            Register
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Register;
