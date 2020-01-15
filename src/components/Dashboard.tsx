import React, { useEffect, useState } from "react";
import { Container, Table, Spinner, Alert } from "react-bootstrap";
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
  }, [url, latitude, longitude]);

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
        console.log("json", forecastJson.list);
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

  const kelvinToCelsius = (celcius: number) => (celcius - 273.15).toFixed(2);

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
      {results && results.weather && (
        <Table className="p-5" bordered hover responsive>
          {/* TEMPERATURE */}
          <thead>
            <tr>
              <th>#</th>
              <th colSpan={2}>Temperature</th>
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
                    ></span>
                  </td>
                  <td>{capitalizeString(replaceUnderscore(key))}</td>
                  {/* Kelvin to celcius */}
                  <td>{index < 4 ? kelvinToCelsius(value) + " °C" : value}</td>
                </tr>
              ))}
          </tbody>
          {/* WIND */}
          <thead>
            <tr>
              <th>#</th>
              <th colSpan={2}>Wind</th>
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
                    ></span>
                  </td>
                  <td>{capitalizeString(key)}</td>
                  <td>{value}</td>
                </tr>
              ))}
          </tbody>
          {/* Clouds */}
          <thead>
            <tr>
              <th>#</th>
              <th colSpan={2}>Clouds</th>
              <th>Values</th>
            </tr>
          </thead>
          <tbody>
            {results && results.clouds && (
              <tr>
                <td>+</td>
                <td>
                  <i className="fas fa-cloud"></i>
                </td>
                <td>Clouds</td>
                <td>{results.clouds.all}</td>
              </tr>
            )}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default Dashboard;
