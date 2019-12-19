import React, { useEffect } from "react";
import { Container, Table } from "react-bootstrap";

const Dashboard: React.FC = () => {
  const asyncCallPost = async () => {
    const bodyData = {
      name: "Raionul Glodeni",
      geo_json: {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-332.459291, 47.639719],
              [-332.459291, 47.677684],
              [-332.372055, 47.677684],
              [-332.372055, 47.639719],
              [-332.459291, 47.639719]
            ]
          ]
        }
      }
    };

    const agroUrl =
      "http://api.agromonitoring.com/agro/1.0/polygons?appid={API_KEY}";
    try {
      const data = await postData(agroUrl, bodyData);
      console.log(JSON.stringify(data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    asyncCallPost();
  });

  const postData = async (url = "", data = {}) => {
    const response = await fetch(url, {
      method: "POST", // * GET, POST, PUT, DELETE
      mode: "cors", // no-cors, cors, same-origin
      cache: "no-cache",
      credentials: "same-origin", // include, same-origin, omit
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'applicaion/x-www-form-urlencoded,
      },
      redirect: "follow", // manual, follow, error
      referrer: "no-referrer", // no-referrer, cliend
      body: JSON.stringify(data)
    });
    return await response.json(); // parses JSON response into JS object
  };

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
