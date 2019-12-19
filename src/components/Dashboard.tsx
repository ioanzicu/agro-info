import React, { useEffect } from "react";
import { Container, Table } from "react-bootstrap";

const Dashboard: React.FC = () => {
  const getWeatherData = (url: string) => {
    fetch(url)
      .then(function(response) {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }

        // Examine the text in the response
        response.json().then(function(data) {
          console.log(data);
        });
      })
      .catch(function(err) {
        console.log("Fetch Error :-S", err);
      });
  };

  const latitude = 47.660556;
  const longitude = 27.587222;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OPENWEATHER_API}`;

  useEffect(() => {
    getWeatherData(url);
  });

  return (
    <Container className="p-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Parameters</th>
            <th>Values</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Soil</td>
            <td>---</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Temperature</td>
            <td>---</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Humidity</td>
            <td>---</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Dashboard;
