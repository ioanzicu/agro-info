import React, { useEffect, useState } from "react";
import { Container, Table, Spinner, Alert } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import firebase from "../helpers/firebase";
import { REGISTER, SIGN_IN } from "../constants/routes";
import { capitalizeString, replaceUnderscore } from "../helpers/functions";

export interface IWeatherResults {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  wind: Wind;
  rain: Rain;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  id: number;
  name: string;
  cod: number;
}

export interface Clouds {
  all: number;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Main {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
  sea_level: number;
  grnd_level: number;
}

export interface Rain {
  "3h": number;
}

export interface Sys {
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Wind {
  speed: number;
  deg: number;
}

const Dashboard = (_props: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<IWeatherResults>();
  const [error, setError] = useState<any>("");

  const { latitude, longitude, locationName } = _props.coordinates;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OPENWEATHER_API}`;

  const [quote, setQuote] = useState("");

  useEffect(() => {
    // make reqiest when the longitude and latitude are set
    if (latitude !== 0 && longitude !== 0) {
      getWeatherData(url);
    }
  }, [url, latitude, longitude]);


  useEffect(() => {
    firebase.getCurrentUserQuote().then(setQuote);
  });

  if (!firebase.getCurrentUserName()) {
    // not loggeed in
    // alert("Please login first");
    console.log("Please login first");

    // redirect to the singn in page
    _props.history.replace(SIGN_IN);
    return null;
  }


  const getWeatherData = async (url: string) => {
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

  // if request is loading -> show spinner
  if (loading) return <Spinner animation="border" />;
  // if an error occur -> show alert message
  if (error)
    return <Alert variant="danger">Something went wrong: {error}.</Alert>;

  const temperatureIcons = [
    '<i class="fas fa-thermometer-half"></i>',
    '<i class="fas fa-smile"></i>',
    '<i class="fas fa-temperature-low"></i>',
    '<i class="fas fa-temperature-high"></i>',
    '<i class="fas fa-compress"></i>',
    '<i class="fas fa-water"></i>'
  ];

  const windIcons = [
    '<i class="fas fa-wind"></i>',
    '<i class="fas fa-compass"></i>'
  ];

  return (
    <Container className="p-5">
      <h1>
        Hello {firebase.getCurrentUserName()}. Your quote: {quote}
      </h1>
      {locationName && (
        <div className="text-center">
          <h1>{locationName}</h1>
          {results && results.weather[0] && (
            <img
              src={`http://openweathermap.org/img/wn/${results.weather[0].icon}@2x.png`}
              alt="icon"
            />
          )}
          {results && results.weather[0].description && (
            <p>{results.weather[0].description}</p>
          )}
        </div>
      )}
      {results && results.weather && (
        <Table className="p-5" bordered hover responsive>
          {/* TEMPERATURE */}
          <thead>
            <tr>
              <th>#</th>
              <th>Temperature</th>
              <th>Values</th>
            </tr>
          </thead>
          <tbody>
            {results &&
              results.main &&
              Object.entries(results.main).map(([key, value], index) => (
                <tr key={key}>
                  <td>{index + 1}</td>
                  <td>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: temperatureIcons[index]
                      }}
                    ></span>{" "}
                    {capitalizeString(replaceUnderscore(key))}
                  </td>
                  <td>{value}</td>
                </tr>
              ))}
          </tbody>
          {/* WIND */}
          <thead>
            <tr>
              <th>#</th>
              <th>Wind</th>
              <th>Values</th>
            </tr>
          </thead>
          <tbody>
            {results &&
              results.wind &&
              Object.entries(results.wind).map(([key, value], index) => (
                <tr key={key}>
                  <td>{index + 1}</td>
                  <td>
                    <span
                      dangerouslySetInnerHTML={{ __html: windIcons[index] }}
                    ></span>{" "}
                    {capitalizeString(key)}
                  </td>
                  <td>{value}</td>
                </tr>
              ))}
          </tbody>
          {/* Clouds */}
          <thead>
            <tr>
              <th>#</th>
              <th>Clouds</th>
              <th>Values</th>
            </tr>
          </thead>
          <tbody>
            {results && results.clouds && (
              <tr>
                <td>+</td>
                <td>
                  <i className="fas fa-cloud"></i> Clouds
                </td>
                <td>{results.clouds.all}</td>
              </tr>
            )}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default withRouter(Dashboard);
