import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import Jumbotron from "../components/Jumbatron";
import InputLoaction from "../components/InputLocation";

const Dashboard_page: React.FC = () => {
  const initialValues = {
    latitude: 0,
    longitude: 0
  };

  const [coordinates, setCoordinates] = useState(initialValues);

  console.log("coordinates", coordinates);
  return (
    <div>
      <Navbar />
      <Jumbotron>
        <InputLoaction setCoodinates={setCoordinates} />
      </Jumbotron>

      <Dashboard />
    </div>
  );
};

export default Dashboard_page;
