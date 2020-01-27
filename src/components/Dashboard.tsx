import React, { useEffect, useState } from "react";
import { Container, Spinner, Alert } from "react-bootstrap";
import { capitalizeString } from "../helpers/functions";
import InformationCard from "./InformationCard";
import { IWeatherResults } from "../types/types";

const Dashboard = (_props: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<IWeatherResults>();
  const [forecast, setForecast] = useState();
  const [error, setError] = useState<any>("");

  const { latitude, longitude, locationName } = _props.coordinates;

  const url: string = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OPENWEATHER_API}`;

  const urlForecast: string = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OPENWEATHER_API}`;

  useEffect(() => {
    // make reqiest when the longitude and latitude are set
    if (latitude !== 0 && longitude !== 0) {
      getWeatherData(url, urlForecast);
    }
  }, [url, latitude, longitude, urlForecast]);

  const getWeatherData = async (url: string, urlForecast: string) => {
    try {
      // request data
      setLoading(true);
      const data = await fetch(url);
      const json = await data.json();

      const forecastData = await fetch(urlForecast);
      const forecastJson = await forecastData.json();

      // success
      if (json && forecastJson) {
        setLoading(false);
        setResults(json);
        setForecast(forecastJson);
        console.log("json", forecastJson);
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

  return (
    <Container className="p-5">
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
            <p>{capitalizeString(results.weather[0].description)}</p>
          )}
        </div>
      )}
      {results && results.weather && <InformationCard data={results} />}
      {forecast && (
        <div className="text-center">
          <h1>Forecast</h1>
        </div>
      )}
      {forecast &&
        forecast.list &&
        forecast.list.map((data: string) => <p>{JSON.stringify(data)}</p>)}
    </Container>
  );
};

export default Dashboard;
