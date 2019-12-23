import React, { useState } from "react";
import "./App.css";
import Landing from "./pages/LandingPage";
import { Route, Switch } from "react-router-dom";
import { LANDING, DASHBOARD, USER_ACCOUNT, SIGN_IN } from "./constants/routes";
import Dashboard from "./pages/DashboardPage";
import SignIn from "./pages/SignInPage";
import UserAccount from "./pages/UserPage";

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
        <Route
          path={process.env.PUBLIC_URL + USER_ACCOUNT}
          component={UserAccount}
        />
        <Route path={process.env.PUBLIC_URL + SIGN_IN} component={SignIn} />
      </Switch>
    </div>
  );
};

export default App;
