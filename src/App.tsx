import React from "react";
import "./App.css";
import Landing from "./pages/Landing_page";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard_page";

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
};

export default App;
