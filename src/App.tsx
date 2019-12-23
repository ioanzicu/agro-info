import React, { useState } from "react";
import "./App.css";
import Landing from "./pages/LandingPage";
import { Route, Switch } from "react-router-dom";
import { LANDING, DASHBOARD, REGISTER, SIGN_IN } from "./constants/routes";
import Dashboard from "./pages/DashboardPage";
import Register from "./pages/RegisterPage";
import SignIn from "./pages/SignInPage";
import UserAccount from "./pages/AccountPage";

const App: React.FC = () => {
  const userLocalData = window.localStorage.getItem(
    "firebaseui::rememberedAccounts"
  );
  const [userData, setUserData] = useState<Object | null>(userLocalData);

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
        <Route
          path={process.env.PUBLIC_URL + SIGN_IN}
          render={props => <SignIn {...props} setUserData={setUserData} />}
        />
      </Switch>
    </div>
  );
};

export default App;
