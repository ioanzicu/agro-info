import React, { FormEvent, useState, memo } from "react";
import useInput from "../hoc/inputHook";
// import dataFetchingHook from "../hoc/dataFetchingHook";
import { Form, Col, Row, Button, Spinner, Alert } from "react-bootstrap";

// Generated by https://quicktype.io

export interface IGeocode {
  Response: Response;
}

export interface Response {
  MetaInfo: MetaInfo;
  View: View[];
}

export interface MetaInfo {
  Timestamp: string;
}

export interface View {
  _type: string;
  ViewId: number;
  Result: Result[];
}

export interface Result {
  Relevance: number;
  MatchLevel: string;
  MatchQuality: MatchQuality;
  Location: Location;
}

export interface Location {
  LocationId: string;
  LocationType: string;
  DisplayPosition: DisplayPosition;
  NavigationPosition: DisplayPosition[];
  MapView: MapView;
  Address: Address;
}

export interface Address {
  Label: string;
  Country: string;
  State: string;
  County: string;
  City: string;
  PostalCode: string;
  AdditionalData: AdditionalDatum[];
}

export interface AdditionalDatum {
  value: string;
  key: string;
}

export interface DisplayPosition {
  Latitude: number;
  Longitude: number;
}

export interface MapView {
  TopLeft: DisplayPosition;
  BottomRight: DisplayPosition;
}

export interface MatchQuality {
  City: number;
}

const InputLocation = memo((_props: any) => {
  // get input data from the custom hook
  const { value, bind, reset } = useInput("");
  // fetch parameters: load, success, fail
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<IGeocode>();
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

    if (value !== "") {
      // fetch
      fetchData(url);
    }

    // reset the input field
    reset();
  };

  // if there is a result set the coordinates wich will be passed to the parent component
  // because they are required for the Dashboard component
  if (
    results &&
    results.Response &&
    results.Response.View[0].Result[0].Location.DisplayPosition.Latitude &&
    results.Response.View[0].Result[0].Location.DisplayPosition.Longitude &&
    results.Response.View[0].Result[0].Location.Address.Label
  ) {
    _props.setCoodinates({
      longitude:
        results.Response.View[0].Result[0].Location.DisplayPosition.Longitude,
      latitude:
        results.Response.View[0].Result[0].Location.DisplayPosition.Latitude,
      locationName: results.Response.View[0].Result[0].Location.Address.Label
    });
  }

  // if request is loading -> show spinner
  if (loading) return <Spinner animation="border" />;
  // if an error occur -> show alert message
  if (error)
    return <Alert variant="danger">Something went wrong: {error}.</Alert>;

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
            <i className="fas fa-search"></i> Submit
          </Button>
        </Col>
        <p>{JSON.stringify(results)}</p>
      </Form.Group>
    </Form>
  );
});

export default InputLocation;
