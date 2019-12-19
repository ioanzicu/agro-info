import React, { FormEvent } from "react";
import useInput from "../hoc/inputHook";
import { Form, Col, Row, Button } from "react-bootstrap";

const InputLocation: React.FC = () => {
  const { value, bind, reset } = useInput("");

  const handleSubmit: any = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    alert(`Submitting Value ${value}`);
    reset();
  };

  return (
    <Form className="pl-5 pr-5" onSubmit={handleSubmit}>
      <Form.Group as={Row}>
        <Col sm={8}>
          <Form.Control
            type="text"
            placeholder="Enter Name of the City/Vilage"
            {...bind}
          />
        </Col>
        <Col sm={4}>
          <Button variant="primary" type="submit" className="pl-5 pr-5">
            Submit
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default InputLocation;
