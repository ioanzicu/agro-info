import React, { FormEvent, useState, ChangeEvent } from "react";
import emailjs from "emailjs-com";
import { Form, Button, Alert } from "react-bootstrap";

const EmailJS: React.FC = () => {
  // Flags
  const [validated, setValidated] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState("");
  // Form data
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit: any = (event: FormEvent<HTMLInputElement>) => {
    const form = event.currentTarget;
    console.log(event.currentTarget);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const sendEmail = (event: any) => {
    event.preventDefault();
    console.log(name, email, message);

    // credentials
    const service_id = "gmail";
    const template_id = "template_QsBMhje4";
    const user_id = "user_4PoajHrWaY8xLkd8aNYpg";

    if (name && email && message) {
      emailjs.sendForm(service_id, template_id, event.target, user_id).then(
        (result: any) => {
          setEmailSent(true);
          // Empty form fields
          setName("");
          setEmail("");
          setMessage("");
          console.log("success", result.text);
        },
        (error: any) => {
          setEmailSent(false);
          setEmailError(error.text);
        }
      );
    } else {
      console.log("form is empty");
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
          Please Enter Email Address.
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
