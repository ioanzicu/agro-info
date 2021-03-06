import React from "react";
import { Table } from "react-bootstrap";
import {
  capitalizeString,
  replaceUnderscore,
  kelvinToCelsius,
  timeConverterUnixToDate
} from "../helpers/functions";
import { IWeatherResults } from "../types/types";

interface Props {
  data: IWeatherResults;
  locationName?: string;
  unixTimestamp?: number;
}

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

const tableHeadStyle = { backgroundColor: "#6F6F6F", color: "#FFFFFF" };

const InformationCard = ({ data, locationName, unixTimestamp }: Props) => (
  <div className="m-4">
    <div className="text-center">
      <hr />
      {locationName && <h1>{locationName}</h1>}
      {unixTimestamp && (
        <h2 className="d-inline">
          Forecast for {timeConverterUnixToDate(unixTimestamp)}
        </h2>
      )}
      {data && data.weather[0] && (
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="icon"
          className="d-inline"
        />
      )}
      {data && data.weather[0].description && (
        <h2 className="d-inline">
          {capitalizeString(data.weather[0].description)}
        </h2>
      )}
      <hr />
    </div>
    <Table className="p-5" bordered hover responsive>
      {/* TEMPERATURE */}
      <thead>
        <tr style={tableHeadStyle}>
          <th>#</th>
          <th colSpan={2}>Temperature</th>
          <th>Values</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.main &&
          Object.entries(data.main).map(([key, value], index) => (
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
        <tr style={tableHeadStyle}>
          <th>#</th>
          <th colSpan={2}>Wind</th>
          <th>Values</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.wind &&
          Object.entries(data.wind).map(([key, value], index) => (
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
        <tr style={tableHeadStyle}>
          <th>#</th>
          <th colSpan={2}>Clouds</th>
          <th>Values</th>
        </tr>
      </thead>
      <tbody>
        {data && data.clouds && (
          <tr>
            <td>+</td>
            <td>
              <i className="fas fa-cloud"></i>
            </td>
            <td>Clouds</td>
            <td>{data.clouds.all}</td>
          </tr>
        )}
      </tbody>
    </Table>
  </div>
);

export default InformationCard;
