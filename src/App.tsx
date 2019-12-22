import React, { useState, useEffect } from "react";
import "./App.css";
import Landing from "./pages/Landing_page";
import { Route, Switch } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { LANDING, DASHBOARD, REGISTER, SIGN_IN } from "./constants/routes";
import Dashboard from "./pages/Dashboard_page";
import Register from "./pages/Register_page";
import SignIn from "./pages/SignIn_page";
import firebase from "./helpers/firebase";

const App: React.FC = () => {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    firebase.isInitialized().then((val: any) => {
      setFirebaseInitialized(val);
    });
  });

  return firebaseInitialized !== false ? (
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
  ) : (
    <Spinner animation="border" />
  );
};

export default App;
