import React from "react";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import Jumbotron from "../components/Jumbatron";
import InputLoaction from "../components/InputLocation";

const Dashboard_page: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron>
        <InputLoaction />
      </Jumbotron>

      <Dashboard />
    </div>
  );
};

export default Dashboard_page;
