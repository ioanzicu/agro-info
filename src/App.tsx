import React from "react";
import "./App.css";
import Landing from "./pages/Landing_page";
import { Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard_page";

const App: React.FC = () => {
  return (
    <div className="App">
      <Route path="/" exact component={Landing} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  );
};

export default App;
