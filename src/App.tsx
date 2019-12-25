import React from "react";
import "./App.css";
import { useStore } from "react-stores";
import Landing from "./pages/LandingPage";
import { Route, Switch, Redirect } from "react-router-dom";
import { store } from "./store/store";
import {
  LANDING,
  ABOUT,
  CONTACT,
  DASHBOARD,
  USER_ACCOUNT,
  SIGN_IN
} from "./constants/routes";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import Dashboard from "./pages/DashboardPage";
import SignIn from "./pages/SignInPage";
import UserAccount from "./pages/UserPage";

const App: React.FC = () => {
  const authStoreState = useStore(store);
  return (
    <div className="App">
      <Switch>
        <Route
          path={process.env.PUBLIC_URL + LANDING}
          exact
          component={Landing}
        />

        <Route path={process.env.PUBLIC_URL + ABOUT} exact component={About} />
        <Route
          path={process.env.PUBLIC_URL + CONTACT}
          exact
          component={Contact}
        />

        <Route path={process.env.PUBLIC_URL + DASHBOARD}>
          {authStoreState && authStoreState.authorized ? (
            <Dashboard />
          ) : (
            <Redirect to={process.env.PUBLIC_URL + LANDING} />
          )}
        </Route>

        <Route path={process.env.PUBLIC_URL + USER_ACCOUNT}>
          {authStoreState && authStoreState.authorized ? (
            <UserAccount />
          ) : (
            <Redirect to={process.env.PUBLIC_URL + LANDING} />
          )}
        </Route>

        <Route path={process.env.PUBLIC_URL + SIGN_IN} component={SignIn} />
      </Switch>
    </div>
  );
};

export default App;
