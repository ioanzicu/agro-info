import React from "react";
import "./App.css";
import Landing from "./pages/Landing_page";
import Dashboard from "./pages/Dashboard_page";

const App: React.FC = () => (
  <div className="App">
    <Landing />
    <Dashboard />
  </div>
);

export default App;
