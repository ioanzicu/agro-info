import React from "react";
import "./App.css";
import Landing from "./pages/Landing_page";
import { Route, Switch } from "react-router-dom";
import { LANDING, DASHBOARD, REGISTER, SIGN_IN } from "./constants/routes";
import Dashboard from "./pages/Dashboard_page";
import Register from "./pages/Register_page";
import SignIn from "./pages/SignIn_page";

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route
          path={process.env.PUBLIC_URL + LANDING}
          exact
          component={Landing}
        />
        <Route
          path={process.env.PUBLIC_URL + DASHBOARD}
          component={Dashboard}
        />
        <Route path={process.env.PUBLIC_URL + REGISTER} component={Register} />
        <Route path={process.env.PUBLIC_URL + SIGN_IN} component={SignIn} />
      </Switch>
    </div>
  );
};

export default App;
