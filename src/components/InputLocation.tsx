import React, { FormEvent, useState, memo } from "react";
import useInput from "../hoc/inputHook";
import { Form, Col, Row, Button, Spinner, Alert } from "react-bootstrap";

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

  // HEREMAP Geocoder API for getting the geographical coordination by the name of the location
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
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
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} md="4">
        <Col sm={2} md={2} lg={2}></Col>
        <Col sm={6} md={6} lg={5}>
          <Form.Control
            type="text"
            placeholder="Enter Name of the City/Vilage"
            {...bind}
          />
        </Col>
        <Col sm={2} md={2} lg={3}>
          <Button className="pr-3 pl-3" variant="primary" type="submit">
            <i className="fas fa-search-location pr-3"></i> Search Loaction
          </Button>
        </Col>
        <Col sm={2} md={2} lg={3}></Col>
      </Form.Group>
    </Form>
  );
});

export default InputLocation;
