import React, { FormEvent, useState, memo } from "react";
import useInput from "../hoc/inputHook";
// import dataFetchingHook from "../hoc/dataFetchingHook";
import { Form, Col, Row, Button, Spinner } from "react-bootstrap";

const InputLocation = memo((_props: any) => {
  // get input data from the custom hook
  const { value, bind, reset } = useInput("");
  // fetch parameters: load, success, fail
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<any>([]);
  const [error, setError] = useState<any>("");

  const url = `https://geocoder.ls.hereapi.com/6.2/geocode.json?apiKey=${process.env.REACT_APP_HEREMAP_GEOCODE_API}&searchtext=${value}`;

  const fetchData = async (url: string) => {
    try {
      // request data
      setLoading(true);
      const data = await fetch(url);
      const json = await data.json();
      // success
      if (json) {
        setLoading(false);
        setResults(json);
      }
    } catch (error) {
      // fail
      setLoading(false);
      setError(error.message);
    }

    setLoading(false);
  };

  const handleSubmit: any = (event: FormEvent<HTMLInputElement>) => {
    // prevent page from refreshing
    event.preventDefault();

    // fetch
    fetchData(url);

    // reset the input field
    reset();
  };

  // show spinner if there are errors or is loading
  if (loading) return <Spinner animation="border" />;
  if (error) return error.message;

  // if there is a result set the coordinates wich will be passed to the parent component
  // because they are required for the Dashboard component
  if (
    results.Response &&
    results.Response.View[0].Result[0].Location.DisplayPosition.Latitude &&
    results.Response.View[0].Result[0].Location.DisplayPosition.Longitude
  ) {
    _props.setCoodinates({
      longitude:
        results.Response.View[0].Result[0].Location.DisplayPosition.Longitude,
      latitude:
        results.Response.View[0].Result[0].Location.DisplayPosition.Latitude
    });
  }

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
        <p>{JSON.stringify(results)}</p>
      </Form.Group>
    </Form>
  );
});

export default InputLocation;
