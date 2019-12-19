import React from "react";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";

const Dashboard_page: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Dashboard />
    </div>
  );
};

export default Dashboard_page;
