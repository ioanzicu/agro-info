import React, { useState, ChangeEvent } from "react";
import emailjs from "emailjs-com";
import { Form, Button, Alert } from "react-bootstrap";

const EmailJS: React.FC = () => {
  // Flags
  const [validated, setValidated] = useState<boolean>(false);
  const [emailSent, setEmailSent] = useState<boolean>(false);
  const [emailError, setEmailError] = useState("");
  // Form data
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  // check if the string exist, return is else return empty string
  const validOrEmptyString = (str: string | undefined) => (str ? str : "");

  const sendEmail = (event: any) => {
    // Prevent reload the page on submit
    event.preventDefault();

    // EmailJS credentials
    const service_id: string = validOrEmptyString(
      process.env.REACT_APP_EMAILJS_SERVICE_ID
    );
    const template_id: string = validOrEmptyString(
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID
    );
    const user_id: string = validOrEmptyString(
      process.env.REACT_APP_EMAILJS_USER_ID
    );

    // Validate email address
    const emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    const validEmail = emailPattern.test(email);

    if (name && validEmail && message) {
      // Send form data, and resolve promise
      emailjs.sendForm(service_id, template_id, event.target, user_id).then(
        (result: any) => {
          setEmailSent(true);
        },
        (error: any) => {
          // Set error flags
          setEmailSent(false);
          setEmailError(error.text);
        }
      );
    } else {
      console.log("Form or a field is empty/not valid.");
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={sendEmail}>
      <h5>Keep in touch...</h5>
      <input type="hidden" name="contact_number" />
      <Form.Group controlId="formGroupEmail">
        <Form.Control
          required
          name="from_name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setName(event.target.value)
          }
        />
        <Form.Control.Feedback type="invalid">
          Please Enter Your Name.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formGroupEmail">
        <Form.Control
          required
          name="from_email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value)
          }
        />
        <Form.Control.Feedback type="invalid">
          Please Enter Valid Email Address.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formGroupMessage">
        <Form.Control
          rows="3"
          required
          name="message_html"
          as="textarea"
          placeholder="Message"
          value={message}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setMessage(event.target.value)
          }
        />
        <Form.Control.Feedback type="invalid">
          Please Enter a Message.
        </Form.Control.Feedback>
      </Form.Group>
      <Button className="w-100" type="submit" onClick={handleSubmit}>
        Send
      </Button>
      {name && email && message && emailSent && (
        <Alert variant="success" className="mt-3">
          Thank you <b>{name}</b> for your email!
        </Alert>
      )}
      {emailError && (
        <Alert variant="danger" className="mt-3">
          Something went wrong. Try again!
        </Alert>
      )}
    </Form>
  );
};

export default EmailJS;
