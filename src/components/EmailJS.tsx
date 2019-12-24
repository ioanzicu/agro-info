import React, { FormEvent } from "react";
import emailjs from "emailjs-com";
import { Form, Button } from "react-bootstrap";
import { emit } from "cluster";

const EmailJS: React.FC = () => {
  const sendEmail = (event: any) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        event.target,
        "YOUR_USER_ID"
      )
      .then(
        (result: any) => {
          console.log(result.text);
        },
        (error: any) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Form>
      <h3>Keep in touch...</h3>
      <Form.Group controlId="formGroupEmail">
        <Form.Control
          required
          type="email"
          placeholder="Email"
          value=""
          //   onChange={(event: ChangeEvent<HTMLInputElement>) =>
          //     setEmail(event.target.value)
          //   }
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Please Enter a valid Email Address.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formGroupMessage">
        <Form.Control
          rows="3"
          required
          as="textarea"
          placeholder="Message"
          //   value={email}
          //   onChange={(event: ChangeEvent<HTMLInputElement>) =>
          //     setEmail(event.target.value)
          //   }
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Please Enter a valid Email Address.
        </Form.Control.Feedback>
      </Form.Group>
      <Button className="w-100" type="submit">
        Send
      </Button>
    </Form>
  );
};

export default EmailJS;
