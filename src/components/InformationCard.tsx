import React from "react";
import { Table } from "react-bootstrap";
import {
  capitalizeString,
  replaceUnderscore,
  kelvinToCelsius
} from "../helpers/functions";
import { IWeatherResults } from "../types/types";

interface Props {
  data: IWeatherResults;
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

const InformationCard = ({ data }: Props) => {
  return (
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
        <tr>
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
        <tr>
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
  );
};

export default InformationCard;
